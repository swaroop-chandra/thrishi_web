import React from "react";

function Landing() {
  return (
    <div
      className="h-[32rem] lg:h-screen bg-gray-400 flex flex-col items-start justify-end lg:pb-40 mt-0 lg:px-20 p-10"
      style={{ marginTop: "-10px" }}
    >
      <h1 className="lg:text-8xl text-4xl mb-6">Meet our family</h1>
      <p className="lg:w-1/2 lg:pr-20 lg:text-base text-xs">
        Thishi is a start up where we provide opportunities for people with
        creative and technical skills, Freelancers, individual contributors or
        someone who wants a side hustle to be a part of a social occasion or a
        personalized events for our end user or customer base.
      </p>
    </div>
  );
}

export default Landing;
