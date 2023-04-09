import React from "react";
import ClientReviewCard from "../common/cards/ClientReviewCard";

function CReviewHome() {
  return (
    <div className="flex lg:flex-row flex-col lg:h-screen lg:px-20 mt-20 lg:mt-0">
      <div className="lg:w-1/2 w-full  lg:h-[22rem] lg:h-screen flex items-center justify-center m-auto">
        <div className="mb-8  lg:mb-0 w-3/4 md:w-4/5 lg:w-3/4">
          <h1 className="text-base mb-2 text-gray-400">
            Don’t Take it from us
          </h1>
          <h1 className="text-xl lg:text-5xl md:text-3xl leading-10 lg:mb-8 mb-4">
            Our Happy clients
          </h1>
          <p className="text-xs lg:text-base md:text-base text-left mb-8">
            Thishi is a start up where we provide opportunities for people with
            creative and technical skills, Freelancers, individual contributors
            or someone who wants a side hustle to be a part of a social occasion
            or a personalized events for our end user or customer base.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 w-full  lg:h-[22rem] flex  items-center justify-center  w-3/4 md:w-2/3 m-auto border-t-2 border-l-2 p-5 lg:p-10">
        <ClientReviewCard />
      </div>
    </div>
  );
}

export default CReviewHome;
