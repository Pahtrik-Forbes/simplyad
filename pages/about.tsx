import Head from "next/head";
import AboutPage from "../components/about";
export default function About() {
  return (
    <div>
      <Head>
        <title>Simply Ad - About Us</title>
        <meta name="description" content="Advertise with us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutPage/>
    </div>
  );
}
