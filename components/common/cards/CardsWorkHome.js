import React from "react";
import bg from "../../../public/images/home/workbox.png";

function CardsWorkHome() {
  return (
    <div
      className=" w-full flex flex-col items-center justify-end bg-auto bg-no-repeat bg-center bg-contain w-96 h-96 p-20"
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
    >
      <h1 className="text-2xl ">Dhol barse 2022</h1>
      <p className="m-0">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and{" "}
      </p>
    </div>
  );
}

export default CardsWorkHome;
