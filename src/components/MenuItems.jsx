import React from "react";
import FoodData from "/src/data/FoodData.js";
import MenuCard from "./MenuCard";
import { useSelector } from "react-redux";

const MenuItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  console.log(search);

  return (
    <div className="editScroll overflow-x-hidden justify-center lg:justify-start flex items-center flex-wrap gap-5 h-96 mt-10 overflow-y-scroll">
      {FoodData.filter((food) => {
        if (category === "All") {
          return food.name.toLowerCase().includes(search.toLowerCase());
        } else {
          return (
            category === food.category &&
            food.name.toLowerCase().includes(search.toLowerCase())
          );
        }
      }).map((food) => (
        <MenuCard
          key={food.id}
          id={food.id}
          img={food.img}
          name={food.name}
          quantity={food.quantity}
          price={food.price}
        />
      ))}
    </div>
  );
};

export default MenuItems;
