import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
function GreySection() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        bgcolor: "lightgrey",
        p: 1,
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
            {Array.from(Array(3)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Box
                  component="div"
                  sx={{ height: 200, bgcolor: "teal" }}
                ></Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}

export default GreySection;
