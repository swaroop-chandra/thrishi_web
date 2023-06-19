import React from "react";

function AboutThishi() {
  return (
    <div className="flex lg:flex-row flex-col  lg:h-screen h-full">
      <div className="lg:w-1/2 w-full lg:h-min flex items-center justify-center m-auto p-10">
        <div className="mb-8  lg:mb-0 md:w-4/5 lg:w-3/4 ">
          <h4 className="text-sm text-gray-400 mb-6">About</h4>
          <h1 className="text-xl lg:text-5xl md:text-3xl leading-10 mb-8">
            Our Story
          </h1>
          <p className="text-xs lg:text-base md:text-base text-left mb-8">
            Thishi Events, founded by creators for creatives. Thishi born out
            passion and creativity of a team filled with like-minded creators.
            Started off in the latter half of 2021, Thishi set out to become a
            company of creators that provide innovative event management
            services and ROI-driven digital marketing services that delivers
            exceptional results. <br />
            <br />
            At Thishi Events, creativity lies at the core of everything we do.
            Our team is filled with creative innovators such as event planners,
            designers, digital marketers, performance marketers, photographers,
            videographers, and many more creators who create work towards
            crafting unforgettable and memorable experiences. <br />
            <br />
            For us at Thishi Events, we take up every task as if it were our
            own. With a constant zeal for learning, we always use every
            opportunity to provide an innovative, compelling and successful
            output. We believe that with every event we take up and every brand
            we work with, we are committed to creating effective collaborations
            and exceeding expectations in every way possible.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:h-[22rem] h-full flex  items-center justify-center md:w-2/3 m-auto lg:p-20 p-10">
        <img src="/images/about_us/about.jpg" alt="grey" className="lg:p-20" />
      </div>
    </div>
  );
}

export default AboutThishi;
