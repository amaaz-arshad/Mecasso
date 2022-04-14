import React from "react";
import "./footer.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container pb-5 pt-4">
        <hr style={{ color: "#fff", height: "1.5px" }} />
        <Grid container justifyContent="space-between">
          <Grid item xs={12} sm={4}>
            <h2>MECASSO</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </Grid>
          <Grid item xs={12} sm={7} md={6}>
            <Grid container>
              <Grid item xs={4} sm={4}>
                <p className="headings">Discovery</p>

                <Grid marginBottom={0.5}>New season</Grid>
                <Grid marginBottom={0.5}>Most searched</Grid>
                <Grid>Most selled</Grid>
              </Grid>
              <Grid item xs={4} sm={4}>
                <p className="headings">About</p>
                <Grid marginBottom={0.5}>Help</Grid>
                <Grid marginBottom={0.5}>Shipping</Grid>
                <Grid>Affiliate</Grid>
              </Grid>
              <Grid item xs={4} sm={4}>
                <p className="headings">Info</p>
                <Grid marginBottom={0.5}>Contact us</Grid>
                <Grid marginBottom={0.5}>Privacy Policies</Grid>
                <Grid>Terms & Conditions</Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
