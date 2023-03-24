import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - TitleMetaNextjs</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </div>
  );
}
