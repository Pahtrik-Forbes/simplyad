import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import styles from "../../styles/Home.module.css";
function GradientSection() {
  return (
    <Box
      component={"div"}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      className={styles.gradientsection}
    >
      <Container sx={{ textAlign: "center" }} component="div">
        <section>
          <h3>Why SimplyAd</h3>
          <p>Advertising Made simple, with SimplyAd</p>
        </section>
        <Grid container sx={{ mb: 3 }} spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={4} md={4}>
            <div style={{ background: "blue", height: 150 }}>pic1</div>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <div style={{ textAlign: "start" }}>
              <h1>Top Notch Customer Service</h1>
              <p>
                Our courteous and professional staff will guide you through the
                setup and installation process.
              </p>
            </div>
          </Grid>
        </Grid>
        <Grid container sx={{ mb: 3 }} spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={8} md={8}>
            <div>
              <div style={{ textAlign: "start" }}>
                <h1>Plug and Play</h1>
                <p>One time installation of pre configured hardware.</p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div style={{ background: "red", height: 150 }}>pic2</div>
          </Grid>
        </Grid>
        <Grid container sx={{ mb: 3 }} spacing={{ xs: 1, md: 3 }}>
          <Grid item xs={12} sm={4} md={4}>
            <div style={{ background: "green", height: 150 }}>pic3</div>
          </Grid>
          <Grid item xs={12} sm={8} md={8}>
            <div>
              <div style={{ textAlign: "start" }}>
                <h1>Remote Support</h1>
                <p>
                  Get hassle free troubleshooting through our remote access tech
                  support.
                </p>
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid container sx={{ mb: 3 }} spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} sm={8} md={8}>
            <div>
              <div style={{ textAlign: "start" }}>
                <h1>Affordable prices</h1>
                <p>
                  Extremely affordable pricing models based on the role you play
                  in the network
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4} md={4}>
            <div style={{ background: "orangered", height: 150 }}>pic4</div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default GradientSection;
