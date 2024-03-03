import React from "react";
import "../App.css";
function Header() {
  return (
    <div className="header bg-slate-50 flex justify-center items-center p-4 flex-col w-2/3 mx-auto">
      <h2 className=" text-slate-700 text-3xl leading-9 mb-3">
        Best Website Builders in the US
      </h2>

      <div className="details px-3  text-sm text-gray-600   ">
        <span className="ml-2">
          <img src="./IMAGE2.png" className=" inline-block w-4" /> Last Updated{" "}
        </span>
        <span className="ml-2"> - </span>
        <span className="ml-2"> Feb 22, 2020 </span>
        <span className="ml-2">
          {" "}
          <img src="./IMAGE.png" className=" inline-block w-4" /> Advertising
          Disclosure
        </span>
        <span className="rel  relative left-48">Top Relevant</span>
      </div>
    </div>
  );
}

export default Header;
