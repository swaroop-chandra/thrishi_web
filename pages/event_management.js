import Head from "next/head";
import AboutEvent from "../components/services/AboutEvent";
import GalleryEvent from "../components/services/GalleryEvent";
import Landing from "../components/services/Landing";
import Eclips from "../components/services/Eclips";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Thishi | Event Management</title>
        <meta
          name="description"
          content="Meta description for the Contact page"
        />
      </Head>
      <div>
        <Landing />
        <AboutEvent />
        <Eclips />
        <GalleryEvent />
      </div>
    </div>
  );
}
