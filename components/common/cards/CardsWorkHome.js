import React from "react";

function CardsWorkHome({ title, message }) {
  return (
    <div
      className=" w-full flex flex-col items-center justify-end bg-auto bg-no-repeat bg-center bg-contain lg:w-96 lg:h-96 w-70 h-70 p-10 mb-20 lg:m-0 rounded"
      style={{ boxShadow: "rgba(0, 0, 0, 0.09) 0px 3px 12px" }}
    >
      <h1 className="text-2xl mb-4 text-center">{title}</h1>
      <p
        className="m-0 text-sm lg:text-center px-5"
        style={{ contain: "content" }}
      >
        {message}
      </p>
    </div>
  );
}

export default CardsWorkHome;
