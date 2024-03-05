import React from "react";

const Navbar = () => {
  return (
    <div className="h-14 w-full">
      <div className="px-1 sm:px-6 py-4 flex items-center justify-between">
        {/* left */}
        <div className="w-[60%] flex items-center justify-between">
          <div className="text-2xl rounded-xl font-bold border-cyan-400 border-2 px-1 py-1 italic bg-teal-500 text-white">
            e-commerce
          </div>

          <ul className="sm:flex list-none gap-8 hidden">
            <li className="font-medium text-xl cursor-pointer mr-4 hover:text-red-600 active:bg-blue-600 p-2 active:text-white rounded-md">
              Home
            </li>
            <li className="font-medium text-xl cursor-pointer mr-4 hover:text-red-600 active:bg-blue-600 p-2 active:text-white rounded-md">
              <a href="#feature">Feature</a>
            </li>
            <li className="font-medium text-xl cursor-pointer mr-4 hover:text-red-600 active:bg-blue-600 p-2 active:text-white rounded-md">
              Service
            </li>
            <li className="font-medium text-xl cursor-pointer mr-4 hover:text-red-600 active:bg-blue-600 p-2 active:text-white rounded-md">
              <a href="#price">Pricing</a>
            </li>
            <li className="font-medium text-xl cursor-pointer mr-4 hover:text-red-600 active:bg-blue-600 p-2 active:text-white rounded-md">
              Contact
            </li>
          </ul>
        </div>
        {/* right */}
        <div className="">
          <button className=" px-3 py-2 font-bold bg-red-600 rounded-md ring-2 text-white ">
            Join now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
