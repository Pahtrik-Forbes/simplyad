import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PricingCard from "./pricingCard";
import styles from "../../styles/Pricing.module.css";
import Button from "@mui/material/Button";
import pd from "../../statics/prdef.webp";
import pru from "../../statics/pruniq.webp";
function PackageSection() {
  const advertPackages = [
    {
      recommended: false,
      imageUrl: pd,
      features: [
        "One (1) outdoor sign.",
        "Two (2) indoor signs.",
      ],
      numOfAds: "One (1) Week",
      price: 23000.00,
    },
    {
      recommended: true,
      imageUrl: pru,
      features: [
        "One (1) outdoor sign.",
        "Two (2) indoor signs.",
      ],
      numOfAds: "One (1) Month",
      price: 55000.00,
    },
    {
      recommended: false,
      imageUrl: pd,
      features: [
        "One (1) outdoor sign.",
        "Two (2) indoor signs.",
      ],
      numOfAds: "Six (6) Months",
      price: 45000.00,
    },
    {
      recommended: false,
      imageUrl: pd,
      features: [
        "One (1) outdoor sign.",
        "Two (2) indoor signs.",
      ],
      numOfAds: "Twelve (12) Months",
      price: 38000.00,
    },
  ];
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
        <h2>Our Pricing Packages</h2>
        <p>Join us for these amazing benefits.</p>
        <Container>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {advertPackages.map((_, index) => (
              <Grid
                //sx={{ display: "flex", alignItems: "stretch" }}
                item
                xs={12}
                sm={6}
                md={3}
                key={index}
              >
                {/* _.recommended ? (
                  <Box component={"div"} className={styles.badge}>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "black", borderRadius: 0 }}
                    >
                      Recommended
                    </Button>
                  </Box>
                ) : null */}
                {
                  <PricingCard
                    recommended={_.recommended}
                    imageUrl={_.imageUrl}
                    features={_.features}
                    numOfAds={_.numOfAds}
                    price={_.price}
                  />
                }
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}

export default PackageSection;
