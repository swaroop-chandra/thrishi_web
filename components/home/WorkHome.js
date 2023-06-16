import React from "react";
import CardsWorkHome from "../common/cards/CardsWorkHome";
import LetsTalk from "../common/buttons/LetsTalk";

function WorkHome() {
  const objectData = [
    {
      title: "Hangyotsav 2023",
      message:
        "Hangyostav 2023, conducted by Thishi, an event management and digital marketing company, is an annual celebratory event conducted by Hangyo Ice Creams in Mysuru, India. The event witnessed an exclusive performance of the band Mysore Express, it was a sweet celebration indeed.",
    },
    {
      title: "Burger King launches in Mangalore!",
      message:
        "Burger King spread its wings to Mangalore and we’re here to take them higher. Thishi, an event management and digital marketing company, conducted a launch event, giveaways, and online promotion for the brand in the bustling city of Mangalore! We got the Whopper back home!",
    },
    {
      title: "The Grand Vitara Grandeur",
      message:
        "The highly anticipated launch of Grand Vitara in Mangalore, was made even more grand with Thishi, an event management and digital marketing company as the official partner. The launch featured the most highly regarded SUV’s in the market. ",
    },
  ];
  return (
    <div className="h-full p-5">
      <h1 className="text-4xl h-40 flex items-end justify-center">
        Take A Look At Thishi In Action
      </h1>
      <div className="flex lg:flex-row flex-col mt-16">
        <div className="basis-1/3 flex justify-center ">
          <CardsWorkHome
            title={objectData[0].title}
            message={objectData[0].message}
          />
        </div>
        <div className="basis-1/3 flex justify-center">
          <CardsWorkHome
            title={objectData[1].title}
            message={objectData[1].message}
          />
        </div>
        <div className="basis-1/3 flex justify-center">
          <CardsWorkHome
            title={objectData[2].title}
            message={objectData[2].message}
          />
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
