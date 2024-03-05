import React from "react";

const AnimateShape = () => {
  return (
    <div className="">
      <div className="w-16 h-16 bg-blue-500 opacity-70 absolute top-[-60px] right[-60px] z-[-1] animate-square"></div>
      <div className="w-20 h-20 bg-red-500 opacity-70 absolute top-[200px] left[-100px] z-[-1] rounded-full animate-circle"></div>
      <div className="w-12 h-28 bg-green-500 opacity-50 absolute top-[400px] left[-50px] z-[-1]  animate-rec"></div>
    </div>
  );
};

export default AnimateShape;
