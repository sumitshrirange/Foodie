import React, { useState } from "react";
import myLogo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import { RiInstagramFill, RiFacebookFill, RiTwitterFill } from "react-icons/ri";
import { LuSendHorizonal } from "react-icons/lu";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div className="flex flex-wrap gap-6 lg:gap-0 justify-start text-start lg:justify-between mt-12">
        <div className="flex flex-col gap-4 w-fit">
          <Link to="/">
            <img className="w-24" src={myLogo} alt="foodie-logo" />
          </Link>
          <p className="text-xs lg:text-sm text-left">
            Our job is to filling your tummy with <br /> delicious food and with
            fast and <br />
            free delivery.
          </p>
          <div className="flex items-center gap-5 text-main mt-4">
            <RiInstagramFill className="cursor-pointer" />
            <RiFacebookFill className="cursor-pointer" />
            <RiTwitterFill className="cursor-pointer" />
          </div>
        </div>

        <div className="hidden lg:flex flex-col gap-4">
          <h5 className="text-lg font-semibold">About</h5>
          <Link className="text-sm" to={"/"}>
            About us
          </Link>
          <Link className="text-sm" to={"/"}>
            Features
          </Link>
          <Link className="text-sm" to={"/"}>
            News
          </Link>
          <Link className="text-sm" to={"/menu"}>
            Menu
          </Link>
        </div>

        <div className="hidden lg:flex flex-col gap-4">
          <h5 className="text-lg font-semibold">Company</h5>
          <Link className="text-sm" to={"/"}>
            Why Foodie?
          </Link>
          <Link className="text-sm" to={"/"}>
            Partner with us
          </Link>
          <Link className="text-sm" to={"/"}>
            FAQ
          </Link>
          <Link className="text-sm" to={"/menu"}>
            Blog
          </Link>
        </div>

        <div className="hidden lg:flex flex-col gap-4">
          <h5 className="text-lg font-semibold">Support</h5>
          <Link className="text-sm" to={"/"}>
            Account
          </Link>
          <Link className="text-sm" to={"/"}>
            Support Center
          </Link>
          <Link className="text-sm" to={"/"}>
            Feedback
          </Link>
          <Link className="text-sm" to={"/menu"}>
            Contact us
          </Link>
          <Link className="text-sm" to={"/menu"}>
            Accessibilty
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          <h5 className="text-lg font-semibold">Get in Touch</h5>
          <Link className="text-xs lg:text-sm" to={"/"}>
            Question or Feedback?
          </Link>
          <Link className="text-xs lg:text-sm" to={"/"}>
            We'd love to hear from you
          </Link>
          <button className="flex w-fit items-center gap-3 text-xs border border-darkgray rounded-full px-3 py-2">
            Email Address <LuSendHorizonal className="text-main" />
          </button>
        </div>
      </div>

      <div>
        <p className="text-xs lg:text-sm mt-5">
          Copyright &copy; {currentYear} Foodie. All Rights Reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
