import Head from "next/head";
import AboutEvent from "../components/digital/AboutEvent";
import GalleryEvent from "../components/digital/GalleryEvent";
import Landing from "../components/digital/Landing";
import Eclips from "../components/services/Eclips";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Thishi | Digital Marketing</title>
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
