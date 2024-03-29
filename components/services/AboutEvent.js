import React from "react";

function AboutEvent() {
  return (
    <div
      className="bg-center h-full p-10 m-auto bg-zinc-50 w-screen lg:mt-12 mt-4 flex flex-col items-center justify-center "
      // style={{
      //   backgroundImage: `url(${bg.src})`,
      //   backgroundSize: "contain",
      // }}
    >
      <h5 className="lg:text-xl text-base lg:mb-4 mb-2 text-gray-400">
        {" "}
        About
      </h5>
      <h1 className="lg:text-6xl text-4xl lg:mb-8 mb-4 underline underline-offset-8">
        Event Management
      </h1>
      <p className="text-sm lg:w-9/12 lg:text-center mb-12">
        Thishi, is a full-service event management company offering end-to-end
        event management solutions. We specialise in crafting unforgettable
        events that are tailored to suit your needs. Whether you're planning a
        corporate event, a wedding, or a private party, Thishi Events has you
        covered.
      </p>
    </div>
  );
}

export default AboutEvent;
