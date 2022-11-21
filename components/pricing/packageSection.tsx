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
        "Your Ad is displayed at least 2,800 times on our network.",
        "Ad cannot be changed.",
      ],
      numOfAds: "One (1)",
      price: 9600.00,
    },
    {
      recommended: true,
      imageUrl: pru,
      features: [
        "Your Ad is displayed at least 2,800 times on our network.",
        "Option to change ad up to two(2) times.",
      ],
      numOfAds: "One (1)",
      price: 14400.00,
    },
    {
      recommended: false,
      imageUrl: pd,
      features: [
        "Your Ads are displayed a combined 8,400 times on our network.",
        "Ads cannot be changed.",
      ],
      numOfAds: "Three (3)",
      price: 25200.00,
    },
    {
      recommended: false,
      imageUrl: pd,
      features: [
        "Your ads are displayed a combined 8,400 times on our network.",
        "Option to change each ad up to two(2) times.",
      ],
      numOfAds: "Three (3)",
      price: 39600.00,
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
                {_.recommended ? (
                  <Box component={"div"} className={styles.badge}>
                    <Button
                      variant="contained"
                      sx={{ bgcolor: "black", borderRadius: 0 }}
                    >
                      Recommended
                    </Button>
                  </Box>
                ) : null}
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
