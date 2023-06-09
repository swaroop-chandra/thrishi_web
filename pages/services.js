import Head from "next/head";
import AboutEvent from "../components/services/AboutEvent";
import GalleryEvent from "../components/services/GalleryEvent";
import Landing from "../components/services/Landing";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Thishi | Services</title>
        <meta
          name="description"
          content="Meta description for the Contact page"
        />
      </Head>
      <div>
        <Landing />
        <AboutEvent />
        <GalleryEvent />
      </div>
    </div>
  );
}
