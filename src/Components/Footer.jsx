import React from "react";

function Footer() {
  return (
    <div className=" bg-slate-800 h-[425px] relative bottom-0 w-full flex justify-center items-start pt-7 text-slate-300">
      <div className="categ text-sm">
        <span className=" text-lg font-semibold ">Categories</span>
        <ul>
          <li>Web Building</li>
          <li>Hosting</li>
          <li>Data Center</li>
          <li>Robotic-Automation</li>
        </ul>
      </div>
      <div className="contact  text-sm ml-14">
        <span className=" text-lg font-semibold">Contact</span>
        <ul>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms Of Service</li>
          <li>Categories</li>
          <li>About</li>
        </ul>
      </div>
      United States
      <img src="./vec.png" className="relative top-2 left-2 cursor-pointer" />
    </div>
  );
}

export default Footer;
