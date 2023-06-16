import React from "react";

function ClientReviewCard({ message, author }) {
  return (
    <div className="lg:text-center bg-stone-200 h-full lg:flex flex-col justify-center items-center rounded-md lg:p-10 p-5 md:p-5">
      <div
        className="lg:flex justify-between absolute w-[32rem] hidden"
        style={{ height: "220px" }}
      >
        <h2 className="text-4xl">"</h2>
        <h2 className="text-4xl">"</h2>
      </div>

      <p className="lg:text-sm text-xs py-5 contain">{message}</p>
      <div className="grid justify-items-end  w-full">
        <p className="lg:text-sm text-xs py-5 contain">
          - <span className="font-bold">{author}</span>
        </p>
      </div>
    </div>
  );
}

export default ClientReviewCard;
