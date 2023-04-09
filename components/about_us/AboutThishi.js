import React from "react";

function AboutThishi() {
  return (
    <div className="flex lg:flex-row flex-col  lg:h-screen h-full">
      <div className="lg:w-1/2 w-full lg:h-min flex items-center justify-center m-auto p-10">
        <div className="mb-8  lg:mb-0 md:w-4/5 lg:w-3/4 ">
          <h4 className="text-sm text-gray-400 mb-6">About</h4>
          <h1 className="text-xl lg:text-5xl md:text-3xl leading-10 mb-8">
            Thishi
          </h1>
          <p className="text-xs lg:text-base md:text-base text-left mb-8">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:h-[22rem] h-full flex  items-center justify-center md:w-2/3 m-auto lg:p-20 p-10">
        <img src="/images/home/boxgrey.png" alt="grey" className="lg:p-20" />
      </div>
    </div>
  );
}

export default AboutThishi;
