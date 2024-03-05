import React from "react";
import man from "../assets/img/woman1.png";

const Feature = () => {
  return (
    <div id="feature" className="flex h-screen  relative">
      <div className="sm:flex-1 hidden sm:block ">
        <img src={man} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="sm:flex-1 flex flex-col gap-8 justify-center pl-5  sm:pl-40  pr-5">
        <h2 className="text-6xl">good design</h2>
        <h2 className="text-6xl">good business</h2>
        <h4 className="italic text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque dicta
          porro nesciunt eos at tenetur nam amet corrupti minus illum, quas
          culpa unde nobis impedit. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Minima, ab.
        </p>
        <button className="w-40 bg-blue-700 text-white px-6 py-3 text-xl ring-1 rounded-xl">
          Learn More
        </button>
      </div>
      <div className="clip1 absolute top-0 left-0"></div>
    </div>
  );
};

export default Feature;
