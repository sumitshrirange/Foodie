import React from "react";
import { IoMdClose } from "react-icons/io";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = ({ show, set }) => {
  const cartItems = useSelector((state) => state.cart.carts);
  console.log(cartItems);

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.price * item.qty,
    0
  );

  return (
    <div>
      <div
        className={` ${
          show
            ? "translate-x-0 lg:right-[130px] opacity-100"
            : "translate-x-full lg:opacity-10"
        } duration-300 ease-in-out z-20 fixed right-0 top-0 w-full lg:w-[27vw] lg:shadow-2xl h-full bg-white lg:bg-[#fbfbfb] px-5 lg:py-5 mt-14`}
      >
        <div className="flex justify-between items-center my-2">
          <span className="text-xl font-semibold">My Order</span>
          <IoMdClose
            onClick={set}
            className="border border-darkgray p-1 text-2xl rounded-full hover:text-main duration-300 hover:border-main cursor-pointer"
          />
        </div>

        <div className="hideScroll h-[64vh] overflow-y-scroll">
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
            <p className="text-darkgray mt-56">Your cart is empty!</p>
          )}
        </div>

        <div className="absolute bottom-0">
          <h3 className="text-left font-semibold text-darkgray">
            Items : {totalQty}
          </h3>
          <h3 className="text-left font-semibold text-darkgray">
            Total Amount : ${totalPrice}
          </h3>
          <hr className="text-darkgray my-2 w-[90vw] lg:w-[24.5vw]" />
          <button className="bg-[#10bb00] w-full font-semibold px-3 text-white py-2 rounded-lg mb-20">
            Process to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
