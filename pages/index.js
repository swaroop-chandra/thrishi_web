import Head from "next/head";
import HomeAboutUs from "../components/home/HomeAboutUs";
import HomeWhy from "../components/home/HomeWhy";
import Landing from "../components/home/Landing";
import VideoHome from "../components/home/VideoHome";

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
      </div>
    </div>
  );
}
