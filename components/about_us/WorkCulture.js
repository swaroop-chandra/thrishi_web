import React from "react";
import bg from "../../public/images/about_us/eclips.png";

function WorkCulture() {
  return (
    <div
      className="bg-center h-full p-10 m-auto bg-auto bg-no-repeat w-screen lg:mt-12 mt-4 flex flex-col items-center justify-center "
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "contain",
      }}
    >
      <h1 className="lg:text-6xl text-4xl lg:mb-8 mb-4">Work culture</h1>
      <p className="text-sm lg:w-1/2 lg:text-center mb-12">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and{" "}
      </p>
      <div className="flex lg:flex-row flex-col">
        <img
          src="/images/home/boxgrey.png"
          alt="grey"
          className="lg:p-20 lg:w-1/3 mb-8 lg:m-0"
        />
        <img
          src="/images/home/boxgrey.png"
          alt="grey"
          className="lg:p-20 lg:w-1/3  mb-8 lg:m-0"
        />
        <img
          src="/images/home/boxgrey.png"
          alt="grey"
          className="lg:p-20 lg:w-1/3  mb-8 lg:m-0"
        />
      </div>
    </div>
  );
}

export default WorkCulture;
