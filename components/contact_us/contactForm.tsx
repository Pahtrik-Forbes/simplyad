import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import React from "react";
import  Button  from "@mui/material/Button";

function ContactForm() {
  return (
    <Grid
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      container
    >
      <Grid xs={2} sm={6} md={6} item>
        <TextField label="First Name" variant="outlined" />
      </Grid>
      <Grid xs={2} sm={6} md={6} item>
        <TextField label="Last Name" variant="outlined" />
      </Grid>
      <Grid xs={2} sm={6} md={6} item>
        <TextField label="E-mail" variant="outlined" />
      </Grid>
      <Grid xs={12} sm={12} md={12} item>
        <Button variant="outlined">Contact Us</Button>
      </Grid>
    </Grid>
  );
}

export default ContactForm;
