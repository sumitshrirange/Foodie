import React, { useContext, useState } from "react";
import myLogo from "/src/assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { RiSearchLine, RiShoppingBagLine } from "react-icons/ri";
import { TbLogin2 } from "react-icons/tb";
import CountContext from "../context/CountContext";
import Cart from "./Cart";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Header = () => {
  const Links = [
    { name: "Why Foodie ?", link: "" },
    { name: "Services", link: "/services" },
    { name: "Menu", link: "/menu" },
    { name: "Get App", link: "/getapp" },
  ];

  const { count } = useContext(CountContext);

  const dispatch = useDispatch();

  return (
    <header>
      <nav className="w-full flex items-center justify-between">
        <Link to={""}>
          <img className="w-24 cursor-pointer" src={myLogo} alt="foodie-logo" />
        </Link>

        <div className="flex items-center lg:gap-28">
          <div className="hidden lg:flex items-center gap-6">
            {Links.map((linked) => (
              <NavLink
                to={linked.link}
                key={linked.name}
                className={({ isActive }) =>
                  `${
                    isActive ? "text-main font-semibold" : "text-black"
                  } hover:text-main text-xs`
                }
              >
                {linked.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2 lg:gap-6">
            <div className="lg:flex hidden items-center justify-between border border-darkgray px-3 py-[5px] rounded-full ">
              <input
                className="bg-[transparent] border-none outline-none text-sm"
                type="search"
                name="search"
                placeholder="Search here"
                onChange={(e) => dispatch(setSearch(e.target.value))}
              />
              <RiSearchLine className="cursor-pointer" />
            </div>

            <Link to={"/cart"}>
              <div className="flex items-center cursor-pointer">
                <RiShoppingBagLine />
                <span className="select-none text-[8px] mb-1.5 -ml-1.5 bg-main text-white w-auto px-1 rounded-full">
                  {count}
                </span>
              </div>
            </Link>

            <Link to={"/signup"}>
              <button
                onClick={() => setShowCart(false)}
                className="flex items-center gap-1 text-xs bg-main text-white px-3 py-2 lg:px-5 lg:py-2.5 rounded-full font-medium tracking-2"
              >
                <TbLogin2 />
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
