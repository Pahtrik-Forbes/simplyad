import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";

function Notes() {
  return (
    <Container sx={{ display: "flex", justifyContent: "center", p: 3 }}>
      <section>
        <Typography sx={{ textAlign: "center" }} variant="h4">
          Package Notes
        </Typography>
        <ul>
          <li>
            Changes to correct grammatical errors, or misaligned content will
            always be allowed.
          </li>
          <li>
            Restricted changes involve changes to the presentation or content of
            an existing ad.
          </li>
          <li>
            Swapping out and existing ad for a completely new ad is not allowed.
          </li>
        </ul>
      </section>
    </Container>
  );
}

export default Notes;
