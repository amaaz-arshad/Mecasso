import { Grid, TextField, Avatar } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportIcon from "@mui/icons-material/Support";
import "./contact.css";

export default function Contact(props) {
  return (
    <div className="container mb-5">
      <Grid marginTop={8}>
        <div className="row g-5">
          <div className="col-md-6">
            <Grid marginBottom={4}>
              <h4>Information About us</h4>
              <p className="contact-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                elit neque, congue ut bibendum et, sagittis sed libero. Praesent
                vestibulum nec tortor nec gravida. In vitae eleifend enim, a
                ullamcorper velit.
              </p>
            </Grid>

            <h4>Contact Way</h4>
            <div className="row g-4 mt-2">
              <div className="col-md-6">
                <Grid container alignItems="center">
                  <Avatar sx={{ bgcolor: "#58b484", marginRight: 2 }}>
                    <PhoneIcon />
                  </Avatar>
                  <Grid>
                    <span>Tel: 0900-78601</span>
                    <br />
                    <span>Email: shop@mecasso.com</span>
                  </Grid>
                </Grid>
              </div>
              <div className="col-md-6">
                <Grid container alignItems="center">
                  <Avatar sx={{ bgcolor: "#58b484", marginRight: 2 }}>
                    <SupportIcon />
                  </Avatar>
                  <Grid>
                    <span>Support Forum</span>
                    <br />
                    <span>for over 24 hours</span>
                  </Grid>
                </Grid>
              </div>
              <div className="col-md-6">
                <Grid container alignItems="center">
                  <Avatar sx={{ bgcolor: "#58b484", marginRight: 2 }}>
                    <HomeIcon />
                  </Avatar>
                  <Grid>
                    <span>20 Margaret st, Karachi</span>
                    <br />
                    <span>Abc Area, House 124</span>
                  </Grid>
                </Grid>
              </div>
              <div className="col-md-6">
                <Grid container alignItems="center">
                  <Avatar sx={{ bgcolor: "#58b484", marginRight: 2 }}>
                    <LocalShippingIcon />
                  </Avatar>
                  <Grid>
                    <span>Free standard shipping </span>
                    <br />
                    <span>on all orders</span>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact">
              <h4>Get in Touch</h4>
              <Grid marginTop={3}>
                <div className="row">
                  <div class="col-md-6 mb-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Your name"
                    />
                  </div>
                  <div class="col-md-6 mb-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div class="mb-4">
                  <textarea
                    class="form-control"
                    placeholder="Type your message"
                    rows="5"
                  ></textarea>
                </div>
                <div class="mb-2">
                  <button type="button" class="btn btn-success">
                    Send Message
                  </button>
                </div>
              </Grid>
            </div>
          </div>
        </div>
      </Grid>
    </div>
  );
}
