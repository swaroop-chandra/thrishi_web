import React from "react";
import LetsTalk from "../common/buttons/LetsTalk";
import bg from "../../public/images/home/background.jpg";
import Link from "next/link";

//style={{ height: "88vh" }}
function Landing() {
  return (
    <div className="flex lg:flex-row flex-col h-[48rem] lg:h-screen">
      <div
        className="lg:w-3/5 w-full flex items-center justify-center col-start-1 col-end-4 bg-auto bg-no-repeat bg-center h-[36rem] lg:h-screen"
        style={{
          backgroundImage: `url(${bg.src})`,
          // width: " 60vw",
          // height: "75vh",
          wordSpacing: "12px",
          position: "sticky",
          zIndex: "-3",
        }}
      >
        <div className="mb-8  lg:mb-0 w-3/4 md:w-4/5 lg:w-3/4">
          <h1 className="text-3xl lg:text-7xl md:text-5xl leading-10 mb-8">
            Unleash. Transform. Streamline.
          </h1>

          <p className="mb-10">
            Thishi, your one-stop solution for digital marketing and event
            management. We help boost and elevate your business through our
            tailored and comprehensive event management and digital marketing
            services.
          </p>
          <LetsTalk
            width={"160px"}
            height={"50px"}
            text={"Let's Talks"}
            size={"18px"}
            link={"/lets_talk"}
          />
        </div>
      </div>
      <div
        className="lg:w-2/5 flex  items-center justify-center  w-full col-start-4 col-end-7 bg-no-repeat bg-center h-[25rem] lg:h-screen"
        style={{
          backgroundImage: `url(${bg.src})`,
          // width: " 40vw",
          position: "sticky",
          zIndex: "-3",
        }}
      >
        <img
          src="/images/home/Group1.png"
          alt="bg"
          className="h-64 lg:h-96 md:h-80"
        />
      </div>
    </div>
  );
}

export default Landing;
