import Head from "next/head";
import Landing from "../components/lets_talk/Landing";
import Map from "../components/lets_talk/Map";
// Initialization for ES Users

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Thishi | Let's Talk</title>
        <script src="https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/leaflet.js"></script>

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
