import React from "react";
import topImg from "/src/assets/Frame 5.png";
import heroImg from "/src/assets/hero-img.png";
import { IoIosPlay } from "react-icons/io";
import { BiFoodMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import Marquee from "./MarqueeEffect";
import Services from "./Services";
import Menu from "./Menu";
import GetApp from "./GetApp";

const Home = () => {
  return (
    <div className="mt-12 lg:mt-0">
      <Marquee />
      <div className="flex flex-col-reverse items-center justify-center lg:flex-row">
        <div className="flex flex-col gap-6 lg:gap-10 place-items-center lg:place-items-start mb-14">
          <img className="w-40" src={topImg} alt="" />
          <h1 className="lg:text-6xl text-5xl font-bold font-Rubik lg:text-left">
            Claim Best Offer on Fast
            <span className="font-Lobster italic text-main"> Food</span> &
            <span className="font-Lobster italic text-main"> Restaurants</span>
          </h1>
          <p className="text-left text-sm lg:text-base">
            Our job is to filling your tummy with delicious food <br /> and with
            fast and free delivery.
          </p>
          <div className="flex gap-5">
            <Link to={"/menu"}>
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-main text-white text-xs">
                <BiFoodMenu className="text-lg" />
                Get Menu
              </button>
            </Link>
            <button className="flex items-center gap-2 text-xs">
              <IoIosPlay className="size-6 text-xs pl-1 rounded-full bg-play text-black" />
              Watch Video
            </button>
          </div>
        </div>
        <img className="w-96 lg:w-1/2" src={heroImg} alt="hero-image" />
      </div>
      <div className="lg:hidden">
        <Services />
        <hr className="text-darkgray mt-24" />
        <Menu />
        <GetApp />
      </div>
    </div>
  );
};

export default Home;
