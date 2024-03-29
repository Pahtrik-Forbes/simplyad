import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../../styles/Pricing.module.css";
import Advert from "../../utils";
import Image from "next/image";

const CardInner = (props: Advert) => (
  <React.Fragment>
    <CardContent>
      <Image
        height={80}
        src={props?.imageUrl}
        alt="box"
      />
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {props.numOfAds}
      </Typography>
      <Typography variant="h5" component="div">
        ${props.price.toLocaleString()}
      </Typography>
      <Typography>/{props.price < 30000 ? 'week' : 'month'}</Typography>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button variant="contained" size="small">
          Select
        </Button>
      </CardActions>
      <ul style={{ textAlign: "start" }}>
        {props.features.map((feature) => (
          <li key={feature}>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {feature}
            </Typography>
          </li>
        ))}
      </ul>
    </CardContent>
  </React.Fragment>
);

export default function PricingCard(props: Advert) {
  const { price, features, numOfAds, imageUrl, recommended } = props;
  return (
    <Box
      sx={{
        width: 240,
        margin: "auto",
      }}
    >
      <div>
        {/* {recommended ? (
          <div className={styles.badge}>
            <Button
              variant="contained"
              sx={{ bgcolor: "black", borderRadius: 0 }}
            >
              Recommended
            </Button>
          </div>
        ) : null} */}
        <Card sx={{ p: 2 }} variant="outlined">
          <CardInner
            price={price}
            features={features}
            numOfAds={numOfAds}
            imageUrl={imageUrl}
            recommended={recommended}
          />
        </Card>
      </div>
    </Box>
  );
}
