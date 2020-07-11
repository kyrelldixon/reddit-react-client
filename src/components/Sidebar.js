import React from "react";
import { FaReddit } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="hidden bg-white h-screen w-64 flex-shrink-0 lg:block">
      <header className="flex justify-center items-center py-6">
        <FaReddit className="text-orange text-5xl mr-2" />
        <span className="text-2xl">Reddit</span>
      </header>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search"
          className="rounded-r-full border border-gray-light pl-4 pr-4 py-2 text-sm"
        />
      </form>
    </aside>
  );
}
