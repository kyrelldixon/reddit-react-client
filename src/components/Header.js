import React from "react";
import { FaReddit } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row-reverse justify-between py-8 font-heading md:items-center">
      <div className="flex justify-between items-center">
        <div className="flex md:hidden justify-center items-center mr-2">
          <FaReddit className="text-orange text-3xl mr-2" />
          <span className="text-2xl">Reddit</span>
        </div>
        <p className="text-gray-dark">Username</p>
      </div>
      <ul className="flex w-full justify-between max-w-md text-sm md:text-base text-gray-normal justify-center pt-6 pb-2 md:py-0 mx-auto md:mx-0">
        <li className="text-orange">
          <span>Popular</span>
          <div className="w-full h-2px bg-orange transform translate-y-2"></div>
        </li>
        <li>Hot</li>
        <li>Rising</li>
        <li>Controversial</li>
        <li>Top</li>
        <li>Gilded</li>
      </ul>
    </header>
  );
}
