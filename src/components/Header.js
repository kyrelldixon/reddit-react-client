import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between py-8">
      <ul className="flex space-x-8 text-gray-normal font-heading">
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
      <div>
        <p>Username</p>
      </div>
    </header>
  );
}
