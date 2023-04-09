import Head from "next/head";
import AboutThishi from "../components/about_us/AboutThishi";
import Landing from "../components/about_us/Landing";
import Services from "../components/about_us/Services";
import WorkCulture from "../components/about_us/WorkCulture";

export default function About() {
  return (
    <div>
      <Head>
        <title>Thishi | About Us</title>

        <meta
          name="description"
          content="Meta description for the About page"
        />
      </Head>
      <div>
        <Landing />
        <AboutThishi />
        <WorkCulture />
        <Services />
      </div>
    </div>
  );
}
