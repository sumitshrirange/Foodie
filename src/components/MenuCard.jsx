import React, { useContext, useState } from "react";
import { MdOutlineStar, MdOutlineStarHalf } from "react-icons/md";
import CountContext from "../context/CountContext";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const MenuCard = ({ id, img, name, price, quantity }) => {
  const { count, setCount } = useContext(CountContext);
  const [isAdded, setIsAdded] = useState(false);

  const CountCondition = () => {
    setCount(count + 1);
    setIsAdded(true);
  };

  const dispatch = useDispatch();

  const handleCart = () => {
    CountCondition();

    const addCartHandler = () => {
      dispatch(addToCart({ id, name, img, price, qty: 1 }));
    };
    addCartHandler();
  };

  return (
    <div>
      <div className="border border-darkgray w-[370px] lg:w-fit p-3 rounded-sm flex lg:flex-col gap-2">
        <img className="w-60 h-36" src={img} alt="food-image" />
        <div>
          <div className="flex items-center flex-col lg:flex-row justify-between">
            <h6 className="text-sm font-semibold">{name}</h6>
            <span className="text-sm font-semibold text-main">${price}</span>
          </div>
          <span className="text-xs text-darkgray text-left">
            Quantity: {quantity}
          </span>
          <div className="flex flex-col lg:flex-row items-center mt-3 justify-between">
            <span className="flex text-play">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStarHalf />
            </span>
            <button
              onClick={handleCart}
              disabled={isAdded}
              className={`${
                isAdded ? "bg-[#ff000084]" : "bg-main"
              } text-xs font-medium mt-3 lg:mt-0 text-white px-2 py-1 rounded-sm`}
            >
              {isAdded ? "Added" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
