import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import PricingCard from "./pricingCard";
import styles from "../../styles/Pricing.module.css";
import Button from "@mui/material/Button";
function PackageSection() {
  const advertPackages = [
    {
      recommended: false,
      imageUrl: "Image Section",
      features: [
        "Your Ad is displayed at least 2,800 times on our network.",
        " Ad cannot be changed.",
      ],
      numOfAds: "One (1)",
      price: 9600,
    },
    {
      recommended: true,
      imageUrl: "Image Section",
      features: [
        "Your Ad is displayed at least 2,800 times on our network.",
        " Ad cannot be changed.",
      ],
      numOfAds: "One (1)",
      price: 9600,
    },
    {
      recommended: false,
      imageUrl: "Image Section",
      features: [
        "Your Ad is displayed at least 2,800 times on our network.",
        " Ad cannot be changed.",
      ],
      numOfAds: "One (1)",
      price: 9600,
    },
    {
      recommended: false,
      imageUrl: "Image Section",
      features: [
        "Your Ad is displayed at least 2,800 times on our network.",
        " Ad cannot be changed.",
      ],
      numOfAds: "One (1)",
      price: 9600,
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
