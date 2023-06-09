import React, { useState } from "react";
import LetsTalk from "../common/buttons/LetsTalk";

function Landing() {
  const [object, setObject] = useState({});

  const SubmitHandle = (e) => {
    e.preventDefault();
    console.log(object, "asdfghgtrew");
  };

  return (
    <div className="flex flex-col h-[22rem] lg:h-screen ">
      <div className="text-center p-6">
        <h1 className="lg:text-2xl my-4 mt-16 text-lg">
          You can reach out the premises between 10:00 AM to 08:30 PM
        </h1>
        <h3 className="lg:text-md text-sm my-4">
          Bunts Hostel Road Near Jyothi Circle, Mangalore 575003 India
        </h3>
      </div>
      <div>
        <img
          src="/images/lets_talk/map.jpg"
          alt="grey"
          className=" lg:block "
        />
      </div>
    </div>
  );
}

export default Landing;
