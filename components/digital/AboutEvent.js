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
        Digital Marketing
      </h1>
      <p className="text-sm lg:w-9/12 lg:text-center mb-12">
        Thishi, your one-stop solution for all digital marketing needs. We offer
        a range of comprehensive services to help you succeed in the digital
        landscape. Our team of experts will work with you to create a custom
        strategy that fits your unique needs and help you reach your business
        goals.
      </p>
    </div>
  );
}

export default AboutEvent;
