import React from "react";
import LetsTalk from "../common/buttons/LetsTalk";
import CardsHome from "../common/cards/CardsHome";
import bg from "../../public/images/home/whyBackground.png";
import { motion } from "framer-motion";

function HomeWhy() {
  const objectData = [
    {
      title: "Attention To Detail ",
      logo: "attent.png",
      message:
        "At Thishi, we strongly believe that the key to delivering top-notch event management and digital marketing services is having meticulous attention to detail. Our team of experienced creators understand the smallest detail and make a significant impact on the success of a campaign to achieve desired results.",
    },
    {
      title: "Innovative Approach",
      logo: "innovating.png",

      message:
        "We at Thishi, always approach a task with a fresh and innovative mindset. Thishi’s team of creators and innovators constantly explore new and creative strategies that help us deliver and bring to your brand exceptional results.",
    },
    {
      title: "Seamless Experience",
      logo: "seamless.png",

      message:
        "We take great pride in providing a hassle-free and seamless experience. From understanding your brand to delivering to your goals, we work with your brand closely, and keep you informed every step of the way.",
    },
    {
      title: "Empowering Innovators",
      logo: "empower.png",

      message:
        "At Thishi, we strongly believe in empowering innovators, creators and freelancers to unleash their full potential. We understand our creator’s passion and empower them to create a lasting impact on the industry. At Thishi, we highly value creativity, authenticity, innovation, and leadership that helps us provide successful outcomes and achieve their goals.",
    },
  ];
  return (
    <div
      className="flex lg:flex-row flex-col lg:min-h-[80rem] lg:h-screen bg-contain	py-40"
      style={{
        backgroundImage: `url(${bg.src})`,
        wordSpacing: "12px",
      }}
    >
      <div className="lg:w-1/3 lg:h-[45rem]  w-full h-full flex items-center justify-center ">
        <div className="mb-8  lg:mb-0 w-3/4 md:w-4/5 lg:w-3/4">
          <h1 className="text-sm lg:text-lg md:text-base leading-10 mb-6 text-gray-400">
            Why thishi
          </h1>
          <h1 className="text-3xl lg:text-8xl md:text-5xl leading-10 mb-10 text-white">
            Why you should <br /> choose us
          </h1>
        </div>
      </div>
      <div className="lg:w-2/3 w-full h-full lg:h-[22rem] lg:h-screem col  items-center justify-center md:w-2/3">
        <div className="lg:grid grid-rows-3 grid-flow-col gap-x-12 mx-12 ">
          <div className="row-end-3 row-span-2 lg:m-0 mb-12">
            <motion.div
              initial={{ y: "100vw" }}
              animate={{ y: 0 }}
              transition={{ duration: 3 }}
            >
              <CardsHome
                title={objectData[0].title}
                message={objectData[0].message}
                logo={objectData[0].logo}
              />
            </motion.div>
          </div>
          <div className="row-start-2 row-span-2 lg:m-0 mb-12">
            <motion.div
              initial={{ y: "100vw" }}
              animate={{ y: 0 }}
              transition={{ duration: 3 }}
            >
              <CardsHome
                title={objectData[1].title}
                message={objectData[1].message}
                logo={objectData[1].logo}
              />
            </motion.div>
          </div>
        </div>
        <div className="lg:grid grid-rows-3 grid-flow-col gap-x-12 mx-12">
          <div className="row-end-3 row-span-2 lg:m-0 mb-12">
            <motion.div
              initial={{ y: "100vw" }}
              animate={{ y: 0 }}
              transition={{ duration: 5 }}
            >
              <CardsHome
                title={objectData[2].title}
                message={objectData[2].message}
                logo={objectData[2].logo}
              />
            </motion.div>
          </div>
          <div className="row-start-2 row-span-2 lg:m-0 mb-12 ">
            <motion.div
              initial={{ y: "100vw" }}
              animate={{ y: 0 }}
              transition={{ duration: 5 }}
            >
              <CardsHome
                title={objectData[3].title}
                message={objectData[3].message}
                logo={objectData[3].logo}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeWhy;
