import React, { useEffect, useState } from "react";
import bg from "../../public/images/services/eclips.jpg";
import logo1 from "../../public/images/services/block1.png";
import logo2 from "../../public/images/services/block2.png";
import LetsTalk from "../common/buttons/LetsTalk";
import EclipsCard from "../common/cards/EclipsCard";
import { useRouter } from "next/router";

function Eclips() {
  const router = useRouter();
  const pathname = router.pathname.slice(1);

  const digitalTitle = "Our Digital Marketing Services";
  const eventTitle = "Our Event Management Services";
  const ObjectData = [
    {
      logo: logo1,
      title: "Corporate Events",
      message:
        "At Thishi Events, we have extensive experience in planning, organising, and executing successful corporate events such as product launches, conferences, and networking events. We work end-to-end and ensure that your attendees have an unforgettable experience.      ",
    },
    {
      logo: logo2,
      title: "Social Parties",
      message:
        "From your birthdays, weddings, anniversaries,  bachelorette, baby showers, intimate gatherings, and other important events of your life. We work closely in understanding your requirements and craft an event that reflects your style and personality, keeping your guests feel warm and engaged throughout the event.",
    },
    {
      logo: logo1,
      title: "Event Marketing",
      message:
        "With our deep expertise in hosting live events, we have an equally experienced digital marketing team that can promote your event through customised campaigns  social media, web, and other digital channels.       ",
    },
  ];
  const ObjectData1 = [
    {
      logo: logo1,
      title: "Search Engine Optimization (SEO)",
      message:
        "SEO is the process of optimising your website to rank higher in search engine results pages (SERPs). Our team of experts will conduct a thorough analysis of your website and create a custom strategy to improve your rankings and drive more traffic to your site.",
    },
    {
      logo: logo2,
      title: "Social Media Marketing (SMM)",
      message:
        "Social media platforms offer a unique opportunity to connect with your target audience and build brand awareness. Our team of experts will create and manage your social media accounts, creating engaging content and targeted campaigns to help you reach your business goals.",
    },
    {
      logo: logo1,
      title: "Web Design and Development",
      message:
        "Your website is often the first impression that potential customers have of your business. Our team of experts will create a custom website that is visually appealing, user-friendly, and optimised for maximum conversions.",
    },
  ];

  return (
    <div
      className="h-[32rem] w-screen bg-contain bg-local bg-cover lg:h-[105rem] bg-white bg-no-repeat flex items-start justify-end lg:pb-40 mt-0 lg:px-20 p-10 "
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "contain",
      }}
    >
      <h1 className="lg:text-7xl text-4xl mb-6 w-6/12 text-white sticky top-0 mt-2/3">
        <div className="m-52"></div>
        <p className="w-8/12 leading-relaxed">
          {pathname == "digital_marketing" ? digitalTitle : eventTitle}
        </p>
      </h1>
      <div className="w-6/12 flex flex-col justify-between h-full ">
        <EclipsCard
          imag={
            pathname == "digital_marketing"
              ? ObjectData1[0].logo
              : ObjectData[0].logo
          }
          title={
            pathname == "digital_marketing"
              ? ObjectData1[0].title
              : ObjectData[0].title
          }
          message={
            pathname == "digital_marketing"
              ? ObjectData1[0].message
              : ObjectData[0].message
          }
        />
        <EclipsCard
          imag={
            pathname == "digital_marketing"
              ? ObjectData1[1].logo
              : ObjectData[1].logo
          }
          title={
            pathname == "digital_marketing"
              ? ObjectData1[1].title
              : ObjectData[1].title
          }
          message={
            pathname == "digital_marketing"
              ? ObjectData1[1].message
              : ObjectData[1].message
          }
        />
        <EclipsCard
          imag={
            pathname == "digital_marketing"
              ? ObjectData1[2].logo
              : ObjectData[2].logo
          }
          title={
            pathname == "digital_marketing"
              ? ObjectData1[2].title
              : ObjectData[2].title
          }
          message={
            pathname == "digital_marketing"
              ? ObjectData1[2].message
              : ObjectData[2].message
          }
        />
      </div>
    </div>
  );
}

export default Eclips;
