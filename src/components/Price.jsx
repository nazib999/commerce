import React from "react";

const Price = () => {
  return (
    <div
      id="price"
      className="sm:h-screen flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-28 py-4 sm:py-0 relative"
    >
      <div className="shadow-lg hover:scale-105 transition-all delay-100 duration-400 shadow-black-300 drop-shadow-md rounded-xl py-6 px-10 flex flex-col items-center gap-8 bg-white">
        <div className="flex items-center">
          $<h1 className="font-bold text-6xl">20</h1>/month
        </div>
        <button className="text-red-600 rounded-3xl border-red-600 border-2 p-2">
          Basic Plan
        </button>
        <p className="font-medium">200 Hand-Crafted Templates</p>
        <p className="font-medium">Exclusive Support</p>
        <p className="font-medium">50+ Prebuild Websites</p>
        <p className="font-medium">Premium Plugings</p>
        <button className="bg-blue-900 text-white text-md rounded-md p-2">
          Join Now
        </button>
      </div>
      <div className="shadow-lg hover:scale-105 transition-all delay-100 duration-400 shadow-black-300 drop-shadow-md rounded-xl py-6 px-10 flex flex-col items-center gap-8 bg-white">
        <div className="flex items-center">
          $<h1 className="font-bold text-6xl">50</h1>/month
        </div>
        <button className="text-red-600 rounded-3xl border-red-600 border-2 p-2">
          Premium Plan
        </button>
        <p className="font-medium">200 Hand-Crafted Templates</p>
        <p className="font-medium">Exclusive Support</p>
        <p className="font-medium">50+ Prebuild Websites</p>
        <p className="font-medium">Premium Plugings</p>
        <button className="bg-blue-900 text-white text-md rounded-md p-2">
          Join Now
        </button>
      </div>
      <div className="shadow-lg hover:scale-105 transition-all delay-100 duration-400 shadow-black-300 drop-shadow-md rounded-xl py-6 px-10 flex flex-col items-center gap-8 bg-white">
        <div className="flex items-center">
          $<h1 className="font-bold text-6xl">100</h1>/month
        </div>
        <button className="text-red-600 rounded-3xl border-red-600 border-2 p-2">
          Advance Plan
        </button>
        <p className="font-medium">200 Hand-Crafted Templates</p>
        <p className="font-medium">Exclusive Support</p>
        <p className="font-medium">50+ Prebuild Websites</p>
        <p className="font-medium">Premium Plugings</p>
        <button className="bg-blue-900 text-white text-md rounded-md p-2">
          Join Now
        </button>
      </div>
      <div className="clip2 absolute top-0 left-0"></div>
    </div>
  );
};

export default Price;
