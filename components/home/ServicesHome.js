import React from "react";
import LetsTalk from "../common/buttons/LetsTalk";
import { motion } from "framer-motion";

function ServicesHome() {
  return (
    <div className="p-10">
      <h1 className="text-4xl h-40 flex items-end justify-center">
        What We Do?
      </h1>
      {/* <div>
        <img
          src="/images/home/boxlight.png"
          alt="grey"
          className="absolute hidden lg:block"
          style={{ right: "35%", marginTop: "35%" }}
        />
      </div> */}
      <div className="grid lg:grid-cols-2">
        <motion.div
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 3 }}
        >
          <img
            src="/images/home/event.jpg"
            alt="grey"
            className="p-20 hidden lg:block rounded"
          />
        </motion.div>
        <div className="lg:p-20 lg:py-30">
          <h1 className="text-3xl lg:mb-6 mb-4 lg:mt-2 mt-12">
            Event Management Services
          </h1>
          <p className="text-sm mb-12 lg:w-5/6">
            At Thishi, we offer professional event management services that are
            sure to create memorable experiences for all types of events and
            celebrations. From product launches to private parties, Thishi
            offers a wide range of event management services that are executed
            in a seamless and efficient manner. We offer end-to-end event
            planning, management, design, decor, entertainment, and so much
            more. Our team of creators work closely with you, understand your
            requirements, preferences and create a customised event plan that
            gives you a day that is stress-free and a memorable for you and your
            loved ones.
          </p>
          <LetsTalk
            width={"160px"}
            height={"50px"}
            text={"Read More"}
            size={"15px"}
            link={""}
          />
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
        <div className="lg:p-20 lg:py-30">
          <h1 className="text-3xl lg:mb-6 mb-4 lg:mt-20 mt-12">
            Digital Marketing Services
          </h1>
          <p className="text-sm mb-12 lg:w-5/6">
            At Thishi, we offer professional digital marketing services that are
            targeted towards helping businesses grow their online presence,
            increase their brand reputation, and reach their target audience.
            Our digital marketing services include Search Engine Optimization
            (SEO), Social Media Marketing, Influencer Marketing, Paid Marketing,
            and so much more. With our industry experienced digital marketers,
            we help in improving the overall online presence of your brand and
            help your brand touch base with your potential target audience and
            thereby drive conversions. With our expertise in the field of
            digital marketing, we are sure to get you the best possible returns
            through our robust strategy and effective workflow.
          </p>
          <LetsTalk
            width={"160px"}
            height={"50px"}
            text={"Read More"}
            size={"15px"}
          />
        </div>
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 5 }}
        >
          <img
            src="/images/home/digital.jpg"
            alt="grey"
            className="p-20 hidden lg:block rounded"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default ServicesHome;
