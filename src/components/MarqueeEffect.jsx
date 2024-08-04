import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeEffect = () => {
  const dishes = [
    { id: 1, name: "Pizza" },
    { id: 2, name: "Burger" },
    { id: 3, name: "Pasta" },
    { id: 4, name: "Sandwich" },
    { id: 5, name: "Chicken" },
    { id: 6, name: "Fish" },
    { id: 7, name: "Egg" },
    { id: 8, name: "Biryani" },
  ];

  return (
    <div className="mt-8 mb-2 MarqueeFade w-full">
      <Marquee autoFill>
        {dishes.map((item) => (
          <ul key={item.id}>
            <li className="mr-5 text-base font-Lobster tracking-widest italic select-none bg-[#ff191918] text-main px-5 py-1 rounded-full">
              {item.name}
            </li>
          </ul>
        ))}
      </Marquee>
    </div>
  );
};

export default MarqueeEffect;
