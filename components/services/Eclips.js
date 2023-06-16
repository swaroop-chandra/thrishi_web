import React, { useEffect, useState } from "react";
import bg from "../../public/images/services/eclips.jpg";
import logo1 from "../../public/images/services/block1.png";
import logo2 from "../../public/images/services/block2.png";
import LetsTalk from "../common/buttons/LetsTalk";
import EclipsCard from "../common/cards/EclipsCard";

function Eclips() {
  const ObjectData = [
    {
      logo: logo1,
      title: "Corporate Events",
      message:
        "At Thishi Events, we have extensive experience in planning, organising, and executing successful corporate events such as product launches, conferences, and networking events. We work end-to-end and ensure that your attendees have an unforgettable experience.      ",
    },
    {
      logo: logo2,
      title: "Social Parties",
      message:
        "From your birthdays, weddings, anniversaries,  bachelorette, baby showers, intimate gatherings, and other important events of your life. We work closely in understanding your requirements and craft an event that reflects your style and personality, keeping your guests feel warm and engaged throughout the event.",
    },
    {
      logo: logo1,
      title: "Event Marketing",
      message:
        "With our deep expertise in hosting live events, we have an equally experienced digital marketing team that can promote your event through customised campaigns  social media, web, and other digital channels.       ",
    },
  ];

  return (
    <div
      className="h-[32rem] w-screen bg-contain bg-local bg-cover lg:h-[105rem] bg-white bg-no-repeat flex items-start justify-end lg:pb-40 mt-0 lg:px-20 p-10 "
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "contain",
      }}
    >
      <h1 className="lg:text-7xl text-4xl mb-6 w-6/12 text-white sticky top-0 mt-2/3">
        <div className="m-52"></div>
        <p>sample</p>
      </h1>
      <div className="w-6/12 flex flex-col justify-between h-full ">
        <EclipsCard
          imag={ObjectData[0].logo}
          title={ObjectData[0].title}
          message={ObjectData[0].message}
        />
        <EclipsCard
          imag={ObjectData[1].logo}
          title={ObjectData[1].title}
          message={ObjectData[1].message}
        />
        <EclipsCard
          imag={ObjectData[2].logo}
          title={ObjectData[2].title}
          message={ObjectData[2].message}
        />
      </div>
    </div>
  );
}

export default Eclips;
