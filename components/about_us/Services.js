import React from "react";
import bg from "../../public/images/about_us/services.png";
import CardsWorkHome from "../common/cards/CardsWorkHome";

function Services() {
  return (
    <div className="lg:pt-40 p-10">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl mb-8">Event Services</h1>
        <p className="text-sm lg:w-1/2 lg:text-center">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and
        </p>
      </div>
      <div
        className="bg-center w-full h-full m-auto bg-auto bg-no-repeat lg:w-screen lg:h-screen flex flex-col items-center justify-start pt-40"
        style={{
          backgroundImage: `url(${bg.src})`,
          // width: " 100vw",
          // height: "100vh",
        }}
      >
        <div className="flex lg:flex-row flex-col">
          <div className="lg:grid grid-rows-3 grid-flow-col gap-x-12 mx-12 ">
            <div className="row-end-3 row-span-2 lg:m-0 ">
              <CardsWorkHome />
            </div>
            <div className="row-start-2 row-span-2 lg:m-0 ">
              <CardsWorkHome />
            </div>
            <div className="row-end-3 row-span-2 lg:m-0 ">
              <CardsWorkHome />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
