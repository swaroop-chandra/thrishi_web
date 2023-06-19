import React, { useEffect, useState } from "react";
import bg from "../../public/images/services/bg.png";
import LetsTalk from "../common/buttons/LetsTalk";
import { Carousel } from "react-responsive-carousel";

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
          </p> */}
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
          </p> */}
        </div>
        {/* <div>
          <img src={"/images/services/bg.png"} />
          <p className="legend">Legend 3</p>
        </div> */}
      </Carousel>
    </div>
  );
}

export default Landing;
