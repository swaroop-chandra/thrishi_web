import Head from "next/head";
import ClientHome from "../components/home/ClientHome";
import CReviewHome from "../components/home/CReviewHome";
import HomeAboutUs from "../components/home/HomeAboutUs";
import HomeWhy from "../components/home/HomeWhy";
import Landing from "../components/home/Landing";
import ServicesHome from "../components/home/ServicesHome";
import VideoHome from "../components/home/VideoHome";
import WorkHome from "../components/home/WorkHome";

import { InView } from "react-intersection-observer";
import { useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const render = (e) => {
    if (!isVisible) {
      setIsVisible(e);
    }
  };
  const render1 = (e) => {
    if (!isVisible1) {
      setIsVisible1(e);
    }
  };
  const render2 = (e) => {
    if (!isVisible2) {
      setIsVisible2(e);
    }
  };

  return (
    <div>
      <Head>
        <title>Thishi | Home</title>

        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <div>
        <Landing />
        <InView onChange={(e) => render(e)}>
          {isVisible && <HomeAboutUs />}
        </InView>
        {/* <HomeAboutUs id="about-us" /> */}
        <div className="mt-20"></div>
        <InView onChange={(e) => render2(e)}>
          {isVisible2 && <HomeWhy />}
        </InView>

        <VideoHome />
        <InView onChange={(e) => render1(e)}>
          {isVisible1 && <ServicesHome />}
        </InView>
        <ClientHome />
        <WorkHome />
        <CReviewHome />
      </div>
    </div>
  );
}
