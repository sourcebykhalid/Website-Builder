import React from "react";
import "../App.css";
function Home() {
  return (
    <div className="home w-2/3 mx-auto h-[7rem]">
      <div className="a flex justify-around items-center mx-auto">
        <a href="Tools">Tools</a>
        <a href="AWS Builder">AWS Builder</a>
        <a href="">Start Build</a>
        <a href="">Build Supplies</a>
        <a href="">Tooling</a>
        <a href="">BlueHosting</a>
      </div>
      <div className="nav  flex justify-center items-center absolute left-64 mt-2">
        <span className="mr-2">Home</span>
        <img src="./Vector.png" alt="" />
        <span className="ml-2 mr-2">Hosting for all</span>
        <img src="./Vector.png" alt="" />
        <span className="ml-2 mr-2">Hosting</span>
        <img src="./Vector.png" alt="" />
        <span className="ml-2 mr-2">Hosting6</span>
        <img src="./Vector.png" alt="" />
        <span className="ml-2 mr-2">Hosting5</span>
      </div>
      <div className="cup bg-orange-400 flex w-fit p-2 rounded-r-lg mt-16 ">
        <img src="./cup.png" alt="" />
        <span className="ml-2 text-slate-200">Best Choice</span>
      </div>
    </div>
  );
}

export default Home;
