import React from "react";
import "../App.css";
function Articles() {
  return (
    <>
      <div className="articles flex justify-center items-center  w-2/3 h-fit  mx-auto px-5">
        <div className="card flex justify-center ic mx-auto flex-col p-3 bg-white text-gray-500">
          <img src="./img2.png" className=" w-2/4 mx-auto mb-10 text-base" />
          <span className="mb-3">
            <span className=" px-3 text-blue-600 bg-gray-100 p-2 rounded-lg mr-2">
              20% Off
            </span>
            <span className=" px-3 text-blue-600 bg-gray-100 p-2 rounded-lg mr-2">
              Limited time
            </span>
          </span>
          <span className=" font-bold text-gray-500 mx-auto">Webbuilder 1</span>{" "}
          <br />
          <span>Computer Modern clasic with wix support</span>
          <br />
          <span>
            <span className=" text-lg text-slate-700">$39.96</span>
            <span className="text-md m-3">$49.96</span>{" "}
            <span className=" text-red-400"> (20% Off)</span>
          </span>
          <button className=" bg-blue-500 w-full p-3 mt-2 rounded-lg text-slate-200">
            View Deal
          </button>
        </div>
        <div className="card1 flex justify-center ic mx-auto flex-col p-3 bg-white text-gray-500">
          <img src="./img2.png" className=" w-2/4 mx-auto mb-10 text-base" />
          <span className="mb-3">
            <span className=" px-3 text-blue-600 bg-gray-100 p-2 rounded-lg mr-2">
              20% Off
            </span>
            <span className=" px-3 text-blue-600 bg-gray-100 p-2 rounded-lg mr-2">
              Limited time
            </span>
          </span>
          <span className=" font-bold text-gray-500 mx-auto">Webbuilder 1</span>{" "}
          <br />
          <span>Computer Modern clasic with wix support</span>
          <br />
          <span>
            <span className=" text-lg text-slate-700">$39.96</span>
            <span className="text-md m-3">$49.96</span>{" "}
            <span className=" text-red-400"> (20% Off)</span>
          </span>
          <button className=" bg-blue-500 w-full p-3 mt-2 rounded-lg text-slate-200">
            View Deal
          </button>
        </div>
        <div className="card1 flex justify-center ic mx-auto flex-col p-3 bg-white text-gray-500">
          <img src="./img2.png" className=" w-2/4 mx-auto mb-10 text-base" />
          <span className="mb-3">
            <span className=" px-3 text-blue-600 bg-gray-100 p-2 rounded-lg mr-2">
              20% Off
            </span>
            <span className=" px-3 text-blue-600 bg-gray-100 p-2 rounded-lg mr-2">
              Limited time
            </span>
          </span>
          <span className=" font-bold text-gray-500 mx-auto">Webbuilder 1</span>{" "}
          <br />
          <span>Computer Modern clasic with wix support</span>
          <br />
          <span>
            <span className=" text-lg text-slate-700">$39.96</span>
            <span className="text-md m-3">$49.96</span>{" "}
            <span className=" text-red-400"> (20% Off)</span>
          </span>
          <button className=" bg-blue-500 w-full p-3 mt-2 rounded-lg text-slate-200">
            View Deal
          </button>
        </div>
        <br />
      </div>
      <div className="aside flex justify-between items-center mx-auto w-2/3 mt-12 mb-12">
        <span className=" text-3xl mx-7 text-gray-600">
          Sign up and get exclusive <br /> special deals
        </span>
        <button className=" bg-blue-500 text-slate-50 p-3 rounded-r-lg mr-8 ">
          Sign Up
        </button>
      </div>
    </>
  );
}

export default Articles;
