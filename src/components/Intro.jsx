import React from "react";
import woman from "../assets/img/woman2.png";
import AnimateShape from "./AnimateShape";

const Intro = () => {
  return (
    <div className="h-[calc(100vh-3.5rem)]  flex px-1 sm:px-6">
      <div className="w-[60%] flex flex-col items-center justify-center gap-9 sm:gap-9">
        <h1 className="text-3xl sm:text-6xl w-[60%] sm:leading-[70px]">
          Adventures in creative age
        </h1>
        <p className="text-md sm:text-xl w-[60%] mt-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
          similique accusamus excepturi vero sit quae voluptatum cum consequatur
          harum! Blanditiis perferendis vel consequatur cum enim illo tenetur.
          Saepe, quisquam tempore.
        </p>
        <div className="flex items-center justify-between w-[60%]">
          <button className="mr-6 ring-2 px-4 py-3 bg-blue-700 text-white rounded-md font-bold">
            START A PROJECT
          </button>
          <div className="flex-col hidden sm:flex">
            <span className="text-red-300">Call Us (342) 4343 232</span>
            <span className="text-gray-500">For any question and query</span>
          </div>
        </div>
      </div>
      <div className="w-[40%] sm:mr-16 hidden sm:block">
        <img src={woman} alt="" className="w-full object-cover h-full" />
      </div>
    </div>
  );
};

export default Intro;
