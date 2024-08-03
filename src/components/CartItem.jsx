import React, { useContext } from "react";
import { MdDelete, MdAdd, MdRemove } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import CountContext from "../context/CountContext";

const CartItem = ({ id, image, name, price, qty }) => {
  const { count, setCount } = useContext(CountContext);

  const CountCondition = () => {
    setCount(count - 1);
  };

  const dispatch = useDispatch();

  const handleCart = () => {
    CountCondition();

    const removeCartHandler = () => {
      dispatch(removeFromCart({ id, name, image, price, qty }));
    };
    removeCartHandler();
  };

  return (
    <div>
      <div className="flex items-center justify-between mt-5 shadow-md px-3 py-1">
        <div className="flex items-center gap-2">
          <img className="w-[60px]" src={image} alt="food-image" />
          <div className="flex flex-col items-start">
            <h2 className="font-semibold text-sm">{name}</h2>
            <span className="font-medium text-sm text-[#00d10e]">${price}</span>
          </div>
        </div>
        <div className="flex items-center gap-20 lg:gap-10">
          <div className="flex items-center gap-3">
            <MdRemove
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border cursor-pointer border-darkgray text-darkgray hover:text-white hover:bg-main hover:border-none duration-300"
            />
            <span className="select-none">{qty}</span>
            <MdAdd
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="border cursor-pointer border-darkgray text-darkgray hover:text-white hover:bg-[#38e000] hover:border-none duration-300"
            />
          </div>
          <MdDelete
            onClick={handleCart}
            className="text-xl cursor-pointer text-darkgray hover:text-main duration-200"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
