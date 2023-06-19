import React from "react";
import bg from "../../public/images/about_us/banner.jpg";

function Landing() {
  return (
    <div
      className="h-[32rem] lg:h-screen bg-gray-400 flex flex-col items-start justify-end lg:pb-40 mt-0 lg:px-20 p-10 bg-cover"
      style={{
        backgroundImage: `url(${bg.src})`,
        wordSpacing: "12px",
        position: "sticky",
        zIndex: "-3",
      }}
    >
      {/* <h1 className="lg:text-8xl text-4xl mb-6">We elevate your brand</h1>
      <p className="lg:w-1/2 lg:pr-20 lg:text-base text-xs">
        We craft unforgettable experiences
      </p> */}
    </div>
  );
}

export default Landing;
