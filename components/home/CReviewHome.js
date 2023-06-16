import React, { useState } from "react";
import ClientReviewCard from "../common/cards/ClientReviewCard";

function CReviewHome() {
  const [idData, setIdData] = useState("slide1");
  console.log(idData, "idData");

  const objectData = [
    {
      message: `I had the pleasure of being a health and wellness panelist on Thishi's
      Meet and Greet Season 2, and I must say, I was thoroughly impressed with
      their event management skills. From coordinating with the other
      panellists to organising the logistics, Thishi handled everything with
      the utmost professionalism and attention to detail. I would highly
      recommend Thishi to anyone looking for top-notch event management
      services.`,
      author: "Dr. Priyadarshini, Health and Wellness Panelist",
    },
    {
      message: `We worked with  Thishi for the launch of Nexa's new showroom in Mangalore, and I must say, they exceeded our expectations. The team at Thishi created a memorable launch event that perfectly reflected our brand's values. Their attention to detail, design, setup, coordination, execution and creative flair truly made the event stand out. Thishi handled everything flawlessly. I would highly recommend Thishi to anyone looking for exceptional event management services.`,
      author: "Nexa Team",
    },
    {
      message: `We worked with Thishi for our bridal dressing and attire event, and I must say, I was blown away by their level of professionalism and expertise. The team took care of everything, from planning and design to execution and management, allowing us to focus on what we do best – makeup and styling. We received so much positive feedback from our guests, and I know we couldn't have done it without Thishi's incredible support. I highly recommend Thishi for all your event management needs.`,
      author: "Suhana, Suhana Makeup Studio",
    },
  ];
  return (
    <div className="flex lg:flex-row flex-col lg:h-screen lg:px-20 mt-20 lg:mt-0">
      <div className="lg:w-1/2 w-full  lg:h-[22rem] lg:h-screen flex items-center justify-center m-auto">
        <div className="mb-8  lg:mb-0 w-3/4 md:w-4/5 lg:w-3/4">
          {/* <h1 className="text-base mb-2 text-gray-400">
          Here’s What Our Clients Have To Say About Us
          </h1> */}
          <h1 className="text-xl lg:text-5xl md:text-3xl leading-10 lg:mb-8 mb-4">
            Here’s What Our Clients Have To Say About Us
          </h1>
          <p className="text-xs lg:text-base md:text-base text-left mb-8">
            The proof isn’t in the pudding, but in the praise! Don’t take our
            word for it - see why brands love Thishi!
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 w-fit md:w-2/3  lg:h-[22rem] flex  items-center justify-center   lg:m-auto m-5 lg:border-t-2 lg:border-l-2 p-0 lg:p-10 ">
        <div>
          <div className="carousel w-full">
            <div
              id="slide1"
              className={`carousel-item  w-full ${
                idData == "slide1" ? "relative" : "hidden"
              }`}
            >
              <ClientReviewCard
                message={objectData[0].message}
                author={objectData[0].author}
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  className="btn btn-circle"
                  onClick={() => setIdData("slide3")}
                >
                  ❮
                </a>
                <a
                  className="btn btn-circle"
                  onClick={() => setIdData("slide2")}
                >
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide2"
              className={`carousel-item  w-full ${
                idData == "slide2" ? "relative" : "hidden"
              }`}
            >
              <ClientReviewCard
                message={objectData[1].message}
                author={objectData[1].author}
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  className="btn btn-circle"
                  onClick={() => setIdData("slide1")}
                >
                  ❮
                </a>
                <a
                  className="btn btn-circle"
                  onClick={() => setIdData("slide3")}
                >
                  ❯
                </a>
              </div>
            </div>
            <div
              id="slide3"
              className={`carousel-item  w-full ${
                idData == "slide3" ? "relative" : "hidden"
              }`}
            >
              <ClientReviewCard
                message={objectData[2].message}
                author={objectData[2].author}
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  className="btn btn-circle"
                  onClick={() => setIdData("slide2")}
                >
                  ❮
                </a>
                <a
                  className="btn btn-circle"
                  onClick={() => setIdData("slide1")}
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CReviewHome;
