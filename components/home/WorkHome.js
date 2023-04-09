import React from "react";
import CardsWorkHome from "../common/cards/CardsWorkHome";
import LetsTalk from "../common/buttons/LetsTalk";

function WorkHome() {
  return (
    <div className="h-full">
      <h1 className="text-4xl h-40 flex items-end justify-center">
        Recent work
      </h1>
      <div className="flex lg:flex-row flex-col mt-16">
        <div className="basis-1/3 flex justify-center ">
          <CardsWorkHome />
        </div>
        <div className="basis-1/3 flex justify-center">
          <CardsWorkHome />
        </div>
        <div className="basis-1/3 flex justify-center">
          <CardsWorkHome />
        </div>
      </div>
      <div className="flex justify-center lg:mt-8">
        <LetsTalk
          width={"160px"}
          height={"50px"}
          text={"See more"}
          size={"18px"}
        />
      </div>
    </div>
  );
}

export default WorkHome;
