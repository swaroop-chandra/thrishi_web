import React from "react";

function EclipsCard({ imag = "", title = "", message = "" }) {
  console.log(imag, "imag");
  return (
    <div className="lg:text-center h-full lg:flex flex-col justify-start items-start text-white rounded-md lg:p-10 p-5 md:p-5">
      <img src={imag.src} alt="logo" width={100} height={100} />
      <h1 className="lg:text-4xl md:text-2xl text-lg mt-8">{title}</h1>
      <p className="mt-10 text-start">{message}</p>
    </div>
  );
}

export default EclipsCard;
