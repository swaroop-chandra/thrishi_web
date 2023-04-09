import React from "react";
import LetsTalk from "../common/buttons/LetsTalk";

function ServicesHome() {
  return (
    <div className="p-10">
      <h1 className="text-4xl h-40 flex items-end justify-center">
        We cater our Services to your needs
      </h1>
      <div>
        <img
          src="/images/home/boxlight.png"
          alt="grey"
          className="absolute hidden lg:block"
          style={{ right: "35%", marginTop: "35%" }}
        />
      </div>
      <div className="grid lg:grid-cols-2">
        <img
          src="/images/home/boxgrey.png"
          alt="grey"
          className="p-20 hidden lg:block"
        />
        <div className="lg:p-20 lg:py-30">
          <h1 className="text-3xl lg:mb-6 mb-4 lg:mt-20 mt-12">
            Event Management
          </h1>
          <p className="text-sm mb-12 lg:w-5/6">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <LetsTalk
            width={"160px"}
            height={"50px"}
            text={"Know more"}
            size={"18px"}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="lg:p-20 lg:py-30">
          <h1 className="text-3xl lg:mb-6 mb-4 lg:mt-20 mt-12">
            Digital Marketing
          </h1>
          <p className="text-sm mb-12 lg:w-5/6">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <LetsTalk
            width={"160px"}
            height={"50px"}
            text={"Know more"}
            size={"18px"}
          />
        </div>
        <img
          src="/images/home/boxgrey.png"
          alt="grey"
          className="p-20 hidden lg:block"
        />
      </div>
    </div>
  );
}

export default ServicesHome;
