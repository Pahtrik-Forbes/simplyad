import React from "react";
import Box from "@mui/material/Box";
import styles from "../../styles/Home.module.css";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ContactForm from "./contactForm";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
function ContactUs() {
  const Div = (child: any) => (
    <div style={{ height: 350, background: "yellow" }}>{child.children}</div>
  );
  return (
    <Box
      id="contact"
      component={"div"}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      className={styles.gradientsection}
    >
      <Container component={"div"} sx={{ textAlign: "center" }}>
        <Typography variant="h4">Contact Us</Typography>
        <Typography>
          Drop us a line with any questions, inquiries or business proposals.
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} sm={4} md={4}>
              <ContactForm />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Div>{<Typography>Map</Typography>}</Div>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <LocationOnIcon /> 21 Connolley Avenue, Kingston 4
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <EmailIcon /> sales@simplyad.net
              </Typography>
              <Typography
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <CallIcon /> 1 (876) 453-9077
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default ContactUs;
