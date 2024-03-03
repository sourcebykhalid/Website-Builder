import React from "react";
import "../App.css";
function Navbar() {
  return (
    <div className="navbars bg-gray-800 h-16 flex flex-wrap items-center justify-center pl-42 mb-6">
      <div className="flex items-center relative">
        <input
          type="search"
          className="bg-slate-100 rounded-lg pl-10 w-52 p-2"
          placeholder="Search"
        />
        <img
          src="./IMAGE3.png"
          alt="Search Icon"
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
        />
      </div>
      <ul className="flex items-center text-slate-200 cursor-pointer">
        <li className="mx-4">Categories</li>
        <li className="mx-4">Website Builder</li>
        <li className="mx-4">Today&apos;s deals</li>
      </ul>
    </div>
  );
}

export default Navbar;
