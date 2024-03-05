import React from "react";

const Footer = () => {
  return (
    <div className="h-16 bg-red-800  text-white flex py-5 px-3 sm:px-10 items-center justify-between">
      <ul className="list-none flex gap-6">
        <li className="cursor-pointer">Guide</li>
        <li className="cursor-pointer">Support</li>
        <li className="cursor-pointer">Api</li>
        <li className="cursor-pointer">Community</li>
      </ul>
      <div>nazib ullah &copy;</div>
    </div>
  );
};

export default Footer;
