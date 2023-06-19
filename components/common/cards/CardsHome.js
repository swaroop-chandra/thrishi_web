import React from "react";

function CardsHome({ title, message, logo }) {
  return (
    <div className="rounded-md bg-white shadow-md p-6 h-[21rem]">
      <div className="grid-flow-col">
        <div className="flex gap-3 items-center">
          <div className="rounded-full bg-gray-300 w-12 h-12 mb-4">
            <img src={!logo ? "" : `/images/home/${logo}`} alt="" />
          </div>
          <div className="text-xl font-semibold mb-4">{title}</div>
        </div>
        <p className="text-sm text-gray-500 mt-3 font-extralight">{message}</p>
      </div>
    </div>
  );
}

export default CardsHome;
