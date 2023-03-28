import React from "react";
import LetsTalk from "../common/buttons/LetsTalk";
import bg from "../../public/images/home/background.jpg";

//style={{ height: "88vh" }}
function Landing() {
  return (
    <div
      className=" grid lg:flex columns-2"
      style={{
        height: "88vh",
      }}
    >
      <div
        className="flex items-center justify-center col-start-1 col-end-4 bg-auto bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <div>
          <h1 className="text-3xl lg:text-7xl">
            Discover the best place for <span>Event Management</span>
          </h1>
          <LetsTalk />
        </div>
      </div>
      <div
        className="col-start-4 col-end-7 bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${bg.src})`,
        }}
      >
        <img src="/images/home/thishibg.jpeg" alt="bg" />
      </div>
    </div>
  );
}

export default Landing;
