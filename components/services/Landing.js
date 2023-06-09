import React from "react";
import bg from "../../public/images/services/bg.png";
import LetsTalk from "../common/buttons/LetsTalk";

function Landing() {
  return (
    <div
      className="h-[32rem] lg:h-screen bg-white bg-no-repeat flex flex-col items-start justify-end lg:pb-40 mt-0 lg:px-20 p-10 "
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "contain",
        marginTop: "-5px",
      }}
    >
      <h1 className="lg:text-8xl text-4xl mb-6">
        We Are Event <br /> Planners
      </h1>
      <p className="lg:w-1/2 lg:pr-20 lg:text-base text-xs mb-10">
        Thishi is a start up where we provide opportunities for people with
        creative and technical skills, Freelancers, individual contributors or
        someone who wants a side hustle to be a part of a social occasion or a
        personalized events for our end user or customer base.
      </p>
      <LetsTalk
        width={"160px"}
        height={"50px"}
        text={"See more"}
        size={"18px"}
      />
    </div>
  );
}

export default Landing;
