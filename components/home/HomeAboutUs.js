import React from "react";
import LetsTalk from "../common/buttons/LetsTalk";
import { motion } from "framer-motion";
import { Parallax, Background } from "react-parallax";

function HomeAboutUs() {
  return (
    <div className="flex lg:flex-row flex-col h-[46rem] lg:h-screen">
      <div className="lg:w-1/2 w-full  h-[30rem] lg:h-screen flex items-center justify-center m-auto">
        <div className="mb-8  lg:mb-0 w-3/4 md:w-4/5 lg:w-3/4 text-center">
          <h1 className="text-xl lg:text-5xl md:text-3xl leading-10 mb-8">
            About Us
          </h1>
          <p className="text-xs lg:text-base md:text-base text-left mb-8">
            Welcome to Thishi, an innovative and dynamic event management and
            digital marketing company. At Thishi, we strongly believe in
            providing unique and personalised events and digital experiences to
            our customers. We offer a wide range of services which include event
            planning, digital marketing, branding and design. We believe that it
            is important for brands to stay ahead of digital trends and events
            that can become powerful tools and can unleash your brand’s full
            potential and transform your brand’s connection with your target
            audience
          </p>
          <LetsTalk
            width={"160px"}
            height={"50px"}
            text={"Know more"}
            size={"18px"}
            link={"/about_us"}
          />
        </div>
      </div>
      <div className="lg:w-1/2 w-full  h-[22rem] lg:h-screem flex  items-center justify-center  w-3/4 md:w-2/3 m-auto">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 4 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/home/Group2.png"
            alt="bg"
            className="h-48 lg:h-[30rem] md:h-80"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default HomeAboutUs;
