import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";

const bottomdata = [
  "For public and private companies",
  "From the first Pitch to IPO",
];

const LandingPage = () => {
  return (
    <div className="w-full  h-screen  text-black pt-1 ">
      <div className="textStrcture mt-48 px-20">
        {["We create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker uppercase">
              <div className="w-fit flex  uppercase ">
                {index === 1 && (
                  <div className="mr-[1vw] w-[8vw] rounded-md h-[5.7vw] top-[1.7vw] relative bg-red-500"></div>
                )}
                <h1 className="uppercase leading-[.75] -mb-[1vw] pt-[2vw]  tracking-tighter text-[6vw] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-200 mt-20 flex justify-between items-center py-5 px-20">
        {bottomdata.map((item, index) => {
          return (
            <h1 className="text-md font-normal tracking-tight leading-none">
              {item}
            </h1>
          );
        })}
        <div className="start flex items-center gap-2">
          <div className="uppercase px-5 py-2 border-[2px] border-zinc-700 hover:text-white hover:bg-black text-sm  cursor-pointer rounded-full">
            Start The Project
          </div>
          <div className="w-10 h-10 rounded-full cursor-pointer border-[2px] border-zinc-500 flex items-center justify-center">
            <span className="-rotate-45">
              <FaArrowRight className="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
