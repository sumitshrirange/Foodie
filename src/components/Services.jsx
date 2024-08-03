import React from "react";
import orderImg from "/src/assets/food-order.png";
import delevareyImg from "/src/assets/delevarey-boy.png";
import qualityImg from "/src/assets/quality.png";

const Services = () => {
  return (
    <div className="mt-14">
      <span className="text-main tracking-widest text-xs font-medium">
        WHAT WE SERVE
      </span>
      <h3 className="text-3xl -z-50 my-5 font-bold relative">
        Your Favourite Food <br /> Delivery Partner
      </h3>

      <div className="flex items-center justify-evenly lg:mt-16 flex-wrap">
        <div className="flex items-center flex-col gap-4 mt-12">
          <img className="w-4/5 mb-6" src={orderImg} alt="" />
          <h5 className="font-semibold">Easy To Order</h5>
          <p className="text-sm ">
            You only need a few steps in <br /> ordering food
          </p>
        </div>
        <div className="flex items-center flex-col gap-4">
          <img src={delevareyImg} alt="" />
          <h5 className="font-semibold">Fastest Delivery</h5>
          <p className="text-sm">
            Delivery that is always ontime <br /> even faster
          </p>
        </div>
        <div className="flex items-center flex-col gap-4">
          <img src={qualityImg} alt="" />
          <h5 className="font-semibold">Best Quality</h5>
          <p className="text-sm">
            Not only fast for us quality is also <br /> number one
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
