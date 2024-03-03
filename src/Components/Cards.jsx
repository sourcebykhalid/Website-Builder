import React from "react";

function Cards({ score, text }) {
  return (
    <div className="cards  w-2/3 flex justify-around m-4 items-center mx-auto pb-6">
      <img src="./img2.png" className=" inline-block mr-4" />

      <div className="spans">
        <span>
          {" "}
          <strong className=" text-slate-700">
            WixPro 72-Inch Responsive Website Builder-
          </strong>{" "}
          Comprehensive Digital Platform Creation Tool, Streamlined Design
          Interface for Professional Websites and Online Stores (Black/Blue){" "}
          <br />
          <strong className="mt-2">Main Highlights</strong>
        </span>
        <br />
        <span className=" ml-6">
          [What You Get]: Receive the WixPro website builder suite, access to
          premium design templates, an extensive library of widgets and apps,
          and detailed step-by-step guides.
        </span>{" "}
        <br />
        <span className=" text-blue-500 cursor-pointer">
          Show More
          <img src="./more.png" className=" inline-block text-blue-500" />
        </span>
      </div>
      <div className="end  mx-auto flex justify-center items-center flex-col p-3   ">
        <div className="end bg-blue-50  mx-auto flex justify-center items-center flex-col p-3 rounded-b-lg  ">
          <span className=" text-lg">{score}</span>
          <span>{text}</span>
          <img src="./stars.png" alt="" />
        </div>

        <button className=" bg-blue-500 px-20 py-2 mt-8 rounded-lg text-slate-200">
          View
        </button>
      </div>
    </div>
  );
}

export default Cards;
