import React from "react";
import DownloadImg from "/src/assets/download-app.png";
import { MdOutlineFileDownload } from "react-icons/md";
import Footer from "./Footer";

const GetApp = () => {
  return (
    <div>
      <div className="mt-16 flex w-full flex-col lg:flex-row items-center lg:items-start justify-center">
        <div className="flex text-center flex-col items-center lg:items-start lg:mt-16">
          <span className="text-main tracking-wide text-xs font-medium text-left">
            DOWNLOAD APP
          </span>
          <h2 className="lg:text-left font-bold text-4xl lg:text-5xl mt-10 lg:mt-20 mb-4 lg:mb-10">
            Get Started With Foodie Today!
          </h2>
          <p className="text-sm text-darkgray lg:text-left">
            Discover food wherever and whenever and get your food delivered
            quickly.
          </p>
          <button className="bg-main flex items-center gap-1 shadow-lg shadow-[#eb002782] text-white px-4 py-2.5 rounded-full lg:ml-16 mt-10 mb-5 lg:mb-0 lg:mt-16 text-sm tracking-wide">
            <MdOutlineFileDownload className="text-lg" />
            Get the App
          </button>
        </div>
        <img src={DownloadImg} alt="download-app-image" />
      </div>
      <hr className="text-darkgray mt-20 lg:mt-24" />
      <Footer />
    </div>
  );
};

export default GetApp;
