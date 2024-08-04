import React from "react";
import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FoodOrderImg from '/src/assets/food-order-2.jpg'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.carts);
  console.log(cartItems);

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.price * item.qty,
    0
  );

  return (
    <div className="w-full lg:flex items-center justify-evenly">
      <div className="lg:w-[450px] py-5">
        <div className="flex justify-between items-center my-2">
        <span className="text-main lg:text-[#d65600] tracking-wide text-sm lg:mb-3 lg:ml-48 font-medium">MY ORDER</span>
        <Link to={"/menu"}>
            <IoMdClose className="border lg:hidden border-darkgray p-1 text-2xl rounded-full hover:text-main duration-300 hover:border-main cursor-pointer" />
          </Link>
        </div>

        <div className="hideScroll h-[64vh] mb-4 overflow-y-scroll">
          {cartItems.length > 0 ? (
            cartItems.map((food) => {
              return (
                <CartItem
                  key={food.id}
                  id={food.id}
                  name={food.name}
                  price={food.price}
                  image={food.img}
                  qty={food.qty}
                />
              );
            })
          ) : (
            <p className="text-darkgray text-center mt-56">
              Your cart is empty!
            </p>
          )}
        </div>

        <div>
          <h3 className="text-left font-semibold text-darkgray">
            Items : {totalQty}
          </h3>
          <h3 className="text-left font-semibold text-darkgray">
            Total Amount : ${totalPrice}
          </h3>
          <hr className="text-darkgray my-2 w-full" />
          <button className="bg-main lg:bg-[#d85600] w-full font-semibold text-white py-2 lg:px-5 rounded-lg">
            Process to Payment
          </button>
        </div>
      </div>
      <img className="hidden lg:block w-1/2 h-auto" src={FoodOrderImg} alt="food order image" />
    </div>
  );
};

export default Cart;
