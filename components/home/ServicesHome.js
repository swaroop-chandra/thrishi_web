import React from "react";
import LetsTalk from "../common/buttons/LetsTalk";

function ServicesHome() {
  return (
    <div>
      <h1 className="text-4xl h-40 flex items-end justify-center">
        We cater our Services to your needs
      </h1>
      <div>
        <img
          src="/images/home/boxlight.png"
          alt="grey"
          className="absolute"
          style={{ right: "35%", marginTop: "35%" }}
        />
      </div>
      <div className="grid grid-cols-2">
        <img src="/images/home/boxgrey.png" alt="grey" className="p-20" />
        <div className="p-20 py-30">
          <h1 className="text-3xl mb-6 mt-20">Event Management</h1>
          <p className="text-sm mb-12 w-5/6">
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

      <div className="grid grid-cols-2">
        <div className="p-20 py-30">
          <h1 className="text-3xl mb-6 mt-20">Digital Marketing</h1>
          <p className="text-sm mb-12 w-5/6">
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
        <img src="/images/home/boxgrey.png" alt="grey" className="p-20" />
      </div>
    </div>
  );
}

export default ServicesHome;
