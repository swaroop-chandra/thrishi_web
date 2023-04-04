import React from "react";
import LetsTalk from "../common/buttons/LetsTalk";

function HomeWhy() {
  return (
    <div className="flex lg:flex-row flex-col h-[46rem] lg:h-screen">
      <div className="lg:w-1/3 w-full  h-[22rem] lg:h-screem flex items-center justify-center ">
        <div className="mb-8  lg:mb-0 w-3/4 md:w-4/5 lg:w-3/4">
          <h1 className="text-sm lg:text-lg md:text-base leading-10 mb-3 text-slate-500">
            Why thishi
          </h1>
          <h1 className="text-xl lg:text-5xl md:text-3xl leading-10 mb-6">
            Why you should <br /> choose us
          </h1>
          <p className="text-xs lg:text-base :text-base text-left mb-8">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
          </p>
          <LetsTalk
            width={"160px"}
            height={"50px"}
            text={"Know more"}
            size={"18px"}
          />
        </div>
      </div>
      <div className="lg:w-2/3 w-full  h-[22rem] lg:h-screem flex  items-center justify-center  w-3/4 md:w-2/3 m-auto">
        <img
          src="/images/home/Group2.png"
          alt="bg"
          className="h-48 lg:h-96 md:h-80"
        />
      </div>
    </div>
  );
}

export default HomeWhy;
