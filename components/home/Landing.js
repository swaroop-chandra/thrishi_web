import React from "react";
import LetsTalk from "../common/buttons/LetsTalk";
import bg from "../../public/images/home/background.jpg";

//style={{ height: "88vh" }}
function Landing() {
  return (
    <div className="flex lg:flex-row flex-col h-[44rem] lg:h-screen">
      <div
        className="lg:w-3/5 w-full flex items-center justify-center col-start-1 col-end-4 bg-auto bg-no-repeat bg-center h-[23rem] lg:h-screen"
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
            Discover the <br /> best place <br /> for <br />{" "}
            <span>Event Management</span>
          </h1>
          <LetsTalk
            width={"160px"}
            height={"50px"}
            text={"Let's Talk"}
            size={"18px"}
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
          style={
            {
              // height: "65vh",
            }
          }
          className="h-64 lg:h-96 md:h-80"
        />
      </div>
    </div>
  );
}

export default Landing;
