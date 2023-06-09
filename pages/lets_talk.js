import Head from "next/head";
import Landing from "../components/lets_talk/Landing";
import Map from "../components/lets_talk/Map";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Thishi | Let's Talk</title>

        <meta
          name="description"
          content="Meta description for the lets talk page"
        />
      </Head>
      <div>
        <Landing />
        <Map />
      </div>
    </div>
  );
}
