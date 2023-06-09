import React from "react";
import LetsTalk from "../common/buttons/LetsTalk";
import { motion } from "framer-motion";

function HomeAboutUs() {
  return (
    <div className="flex lg:flex-row flex-col h-[46rem] lg:h-screen">
      <div className="lg:w-1/2 w-full  h-[22rem] lg:h-screen flex items-center justify-center m-auto">
        <div className="mb-8  lg:mb-0 w-3/4 md:w-4/5 lg:w-3/4 text-center">
          <h1 className="text-xl lg:text-5xl md:text-3xl leading-10 mb-8">
            About Us
          </h1>
          <p className="text-xs lg:text-base md:text-base text-left mb-8">
            Thishi is a start up where we provide opportunities for people with
            creative and technical skills, Freelancers, individual contributors
            or someone who wants a side hustle to be a part of a social occasion
            or a personalized events for our end user or customer base.
          </p>
          <LetsTalk
            width={"160px"}
            height={"50px"}
            text={"Know more"}
            size={"18px"}
          />
        </div>
      </div>
      <div className="lg:w-1/2 w-full  h-[22rem] lg:h-screem flex  items-center justify-center  w-3/4 md:w-2/3 m-auto">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/home/Group2.png"
            alt="bg"
            className="h-48 lg:h-96 md:h-80"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default HomeAboutUs;
