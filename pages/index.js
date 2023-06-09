import Head from "next/head";
import ClientHome from "../components/home/ClientHome";
import CReviewHome from "../components/home/CReviewHome";
import HomeAboutUs from "../components/home/HomeAboutUs";
import HomeWhy from "../components/home/HomeWhy";
import Landing from "../components/home/Landing";
import ServicesHome from "../components/home/ServicesHome";
import VideoHome from "../components/home/VideoHome";
import WorkHome from "../components/home/WorkHome";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import dynamic from "next/dynamic";

const LazyComponent1 = dynamic(() => import("../components/home/HomeAboutUs"), {
  loading: () => <p>Loading component 1...</p>,
});

const LazyComponent2 = dynamic(
  () => import("../components/home/ServicesHome"),
  {
    loading: () => <p>Loading component 2...</p>,
  }
);

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    threshold: 1,
  });

  useEffect(() => {
    if (inView1) {
      setIsVisible(true);
    }
  }, [inView1]);

  console.log(inView2, "inView2");

  useEffect(() => {
    if (inView2) {
      setIsVisible1(true);
    }
  }, [inView2]);

  return (
    <div>
      <Head>
        <title>Thishi | Home</title>

        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <div>
        <Landing />
        {/* <div ref={ref}>{isVisible && <Landing />}</div> */}
        <div ref={ref1}>{isVisible && <LazyComponent1 />}</div>
        <div ref={ref1}>{isVisible && <HomeWhy />}</div>
        <div ref={ref1}>{isVisible && <VideoHome />}</div>
        <div ref={ref2}>{isVisible1 && <LazyComponent2 />}</div>
        <div ref={ref1}>{isVisible && <ClientHome />}</div>
        <div ref={ref1}>{isVisible && <WorkHome />}</div>
        <div ref={ref1}>{isVisible && <CReviewHome />}</div>
      </div>
    </div>
  );
}
