import Head from "next/head";
import PricingPage from "../components/pricing";
export default function Pricing() {
  return (
    <div>
      <Head>
        <title>Simply Ad - Pricing</title>
        <meta name="description" content="Advertise with us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PricingPage />
    </div>
  );
}
