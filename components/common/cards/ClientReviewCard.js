import React from "react";

function ClientReviewCard() {
  return (
    <div className="lg:text-center bg-stone-200 h-full lg:flex flex-col justify-center items-center rounded-md p-10">
      <div
        className="bg-gray-100 rounded-full border-4 w-1/2 h-1/2 absolute hidden lg:block"
        style={{
          width: "10%",
          height: "18%",
          marginTop: "-13%",
          marginLeft: "-33%",
        }}
      ></div>
      <h1 className="text-2xl mb-4">Name</h1>
      <h2 className="text-xl mb-4">Event Details </h2>
      <div className="lg:flex justify-between absolute w-[32rem] hidden ">
        <h2 className="text-4xl">"</h2>
        <h2 className="text-4xl">"</h2>
      </div>

      <p className="text-sm py-5 contain">
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of typeLorem Ipsum has been
        the industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of
      </p>
    </div>
  );
}

export default ClientReviewCard;
