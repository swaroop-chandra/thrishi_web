import Head from "next/head";
import ClientHome from "../components/home/ClientHome";
import CReviewHome from "../components/home/CReviewHome";
import HomeAboutUs from "../components/home/HomeAboutUs";
import HomeWhy from "../components/home/HomeWhy";
import Landing from "../components/home/Landing";
import ServicesHome from "../components/home/ServicesHome";
import VideoHome from "../components/home/VideoHome";
import WorkHome from "../components/home/WorkHome";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thishi | Home</title>

        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <div>
        <Landing />
        <HomeAboutUs />
        <HomeWhy />
        <VideoHome />
        <ServicesHome />
        <ClientHome />
        <WorkHome />
        <CReviewHome />
      </div>
    </div>
  );
}
