import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <title>About - TitleMetaNextjs</title>
        <meta
          name="description"
          content="Meta description for the About page"
        />
      </Head>
      <div>
        <h1>This is About page</h1>
      </div>
    </div>
  );
}
