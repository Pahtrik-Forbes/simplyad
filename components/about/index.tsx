import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import about from "../../statics/about.jpg";
import Image from "next/image";
import Typography from "@mui/material/Typography";
function AboutPage() {
  return (
    <Box>
      <Container>
        <Typography variant={"h2"} sx={{ textAlign: "center" }}>
          What to Know About SimplyAD
        </Typography>
        <Typography variant={"body1"} style={{ fontSize: 20}}>
          Our Digital Ad network which consists of multiple screens across
          geographic locations and platforms, is a tool for harnessing new and
          emerging hardware and software to reach customers; You can increase
          brand awareness and influence consumer behavior in stores and It’s
          these kinds of innovations which are taking the technology in the
          marketing sector further; To such an extent that, combined with the
          right marketing strategy, cannot just attract, but also excite and
          amaze customers Who are in the end the most important part of the
          retail digital signage equation.
        </Typography>
      </Container>
      <Box sx={{ height: 350, position: "relative" }} component={"div"}>
        <Image fill src={about} alt="abt_image" />
      </Box>
    </Box>
  );
}

export default AboutPage;
