import React from "react";
import Container from "@mui/material/Container";
import about from "../../statics/about.jpg";
import Image from "next/image";
function AboutPage() {
  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>What to Know About SimplyAD</h2>
      <p style={{ fontSize: 20, color: "black" }}>
        Our Digital Ad network which consists of multiple screens across
        geographic locations and platforms, is a tool for harnessing new and
        emerging hardware and software to reach customers; You can increase
        brand awareness and influence consumer behavior in stores and It’s these
        kinds of innovations which are taking the technology in the marketing
        sector further; To such an extent that, combined with the right
        marketing strategy, cannot just attract, but also excite and amaze
        customers Who are in the end the most important part of the retail
        digital signage equation.
      </p>
      <Image src={about} alt="abt_im" />
    </Container>
  );
}

export default AboutPage;
