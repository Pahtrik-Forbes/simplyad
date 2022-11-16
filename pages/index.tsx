import Head from "next/head";
//import styles from "../styles/Home.module.css";
import Box from "@mui/material/Box";
import HomePage from "../components/home";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Simply Ad</title>
        <meta name="description" content="Advertise with us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage/>
    </div>
  );
}
