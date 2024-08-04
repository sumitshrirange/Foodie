import React, { useEffect, useState } from "react";
import MenuItems from "./MenuItems";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";
import { setSearch } from "../redux/slices/SearchSlice";

const Menu = () => {
  const [categories, setCategories] = useState([]);

  const uniqueCategoriesList = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    uniqueCategoriesList();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="mt-14 mb-10 lg:mb-0 w-full">
      <span className="text-main tracking-widest text-xs font-medium text-left">
        OUR ITEMS
      </span>
      <h3 className="text-3xl -z-50 mt-2 font-bold relative text-left">
        Menu That Always <br /> Make You To Fall In Love
      </h3>
      <div className="flex lg:hidden mt-4 items-center justify-between border border-darkgray px-3 py-[5px] rounded-full ">
        <input
          className="bg-[transparent] border-none outline-none text-sm"
          type="search"
          name="search"
          placeholder="Search here"
          size={56}
          onChange={(e) => dispatch(setSearch(e.target.value))}
        />
      </div>
      <div className="hideScroll flex gap-4 overflow-x-auto mt-7">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`${
            selectedCategory === "All" && "bg-main text-white"
          } px-4 py-2 text-sm rounded-md bg-gray select-none hover:bg-[#ff9696e0] hover:text-white duration-300`}
        >
          All
        </button>

        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`${
                selectedCategory === category && "bg-main text-white"
              } px-4 py-2 text-sm rounded-md bg-gray select-none hover:bg-[#ff9696e0] hover:text-white duration-300`}
            >
              {category}
            </button>
          );
        })}
      </div>
      <MenuItems />
    </div>
  );
};

export default Menu;
