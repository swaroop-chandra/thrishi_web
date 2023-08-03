import React, { useEffect, useState } from "react";
import bg from "../../public/images/services/digital.jpeg";
import LetsTalk from "../common/buttons/LetsTalk";
import { Carousel } from "react-responsive-carousel";

function Landing() {
  const [wordIndex, setWordIndex] = useState(0);
  const words = [
    ` It’s time to take your business to the next-level digitally.`,
    `Drive growth and revenue in the online world, with Thishi’s digital
    marketing services.`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div
      className="h-[32rem] lg:h-screen bg-white bg-no-repeat flex flex-col items-start justify-end lg:pb-40 mt-0 lg:px-20 p-10 "
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "contain",
        marginTop: "-5px",
      }}
    >
      <h1 className="lg:text-7xl text-4xl mb-6 w-6/12">{words[wordIndex]}</h1>
      {/* <p className="lg:w-1/2 lg:pr-20 lg:text-base text-xs mb-10">
        Thishi is a start up where we provide opportunities for people with
        creative and technical skills, Freelancers, individual contributors or
        someone who wants a side hustle to be a part of a social occasion or a
        personalized events for our end user or customer base.
      </p> */}
      <LetsTalk
        width={"160px"}
        height={"50px"}
        text={"See more"}
        size={"18px"}
      />
    </div>
  );
}

export default Landing;

/*
<div className="flex" style={{ marginTop: "-20px" }}>
      <Carousel
        useKeyboardArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        emulateTouch={true}
        interval={3000}
        dynamicHeight={true}
      >
        <div>
          <img src={"/images/services/bg1.jpg"} />
          {/* <p
            className="absolute lg:text-6xl md:text-4xl"
            style={{
              height: "60%",
              background: "transparent",
              textAlign: "left",
              color: "black",
              width: "50%",
              opacity: 1,
              bottom: "40px",
              left: "50%",
              marginLeft: "-45%",
            }}
          >
            It’s time to take your business to the next-level digitally.
          </p> 
          </div>
          <div>
            <img src={"/images/services/bg2.jpg"} />
            {/* <p
              className="absolute lg:text-6xl md:text-4xl"
              style={{
                height: "60%",
                background: "transparent",
                textAlign: "left",
                color: "black",
                width: "50%",
                opacity: 1,
                bottom: "40px",
                left: "50%",
                marginLeft: "-45%",
              }}
            >
              Drive growth and revenue in the online world, with Thishi’s digital
              marketing services.
            </p>
          </div>
          {/* <div>
            <img src={"/images/services/bg.png"} />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
      */
