import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const features = [
  "Full API Integration",
  "Merged Audience",
  "Smart Budgeting",
  "Ads Design Templates",
  "Efficient Analytics",
  "Digest e-mails",
];
function FeaturesSection() {
  return (
    <Box sx={{ mb: 3, bgcolor: "white", textAlign: "center" }}>
      <Container>
        <section>
          <h3>Our Features</h3>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {features.map((_, index) => (
              <Grid item xs={12} sm={4} md={4} key={index}>
                <h4>{_}</h4>
                <p style={{ textAlign: "start" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  varius efficitur leo. Nullam efficitur ex at libero elementum
                  pharetra. Nunc hendrerit eu diam id volutpat.
                </p>
              </Grid>
            ))}
          </Grid>
        </section>
        <Button
          variant="contained"
          sx={{ bgcolor: "black", alignSelf: "center" }}
        >
          Join Now
        </Button>
      </Container>
    </Box>
  );
}

export default FeaturesSection;
