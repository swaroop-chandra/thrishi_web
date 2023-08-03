import React, { useEffect, useState } from "react";
import bg from "../../public/images/services/bg.jpeg";
import LetsTalk from "../common/buttons/LetsTalk";

function Landing() {
  const [wordIndex, setWordIndex] = useState(0);
  const words = [
    ` Memorable events, unforgettable experiences `,
    `Your event, your way - Thishi is here to make it happen. `,
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
