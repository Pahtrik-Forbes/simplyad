import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AD1 from "../../statics/ad1.webp";
import AD2 from "../../statics/ad2.webp";
import AD3 from "../../statics/ad3.webp";
import Image from "next/image";
const adImages = [AD1, AD2, AD3];
function GreySection() {
  return (
    <Box
      sx={{
        bgcolor: "lightgrey",
        p: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        width: "100%",
      }}
      component={"div"}
    >
      <Container component={"div"}>
        <h3>Unlimited Advertising, One Place</h3>
        <h1>
          Spotlight your merchandise, to capture customer&apos;s attention both
          indoors and outdoors with SimplyAD.
        </h1>
        <Button variant="contained" sx={{ bgcolor: "black" }}>
          Learn More
        </Button>
        <Container sx={{ mt: 3 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {adImages.map((_, index) => (
              <Grid item xs={12} sm={4} md={4} key={index}>
                <Box sx={{ position: "relative", height: 250 }}>
                  <Image fill alt="" src={_} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}

export default GreySection;
