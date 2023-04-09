import React from "react";
import CardsWorkHome from "../common/cards/CardsWorkHome";

function WorkHome() {
  return (
    <div>
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
    </div>
  );
}

export default WorkHome;
