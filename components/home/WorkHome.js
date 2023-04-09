import React from "react";
import CardsWorkHome from "../common/cards/CardsWorkHome";

function WorkHome() {
  return (
    <div>
      <h1 className="text-4xl h-40 flex items-end justify-center">
        Recent work
      </h1>
      <CardsWorkHome />
    </div>
  );
}

export default WorkHome;
