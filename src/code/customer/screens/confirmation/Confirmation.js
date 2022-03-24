import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { Link } from "react-router-dom";
import "./confirmation.css";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

const theme = createTheme();

export default function Confirmation() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="row">
        <div className="col-md-6">
          <div className="container">
            <div className="details">
              <p>
                <Link to="/cart" className="backBtn">
                  Cart
                </Link>{" "}
                <ChevronRightOutlinedIcon sx={{ color: "silver" }} />{" "}
                <Link to="/shipping" className="backBtn">
                  Shipping
                </Link>{" "}
                <ChevronRightOutlinedIcon sx={{ color: "silver" }} />{" "}
                <Link to="/payment" className="backBtn">
                  Payment
                </Link>{" "}
                <ChevronRightOutlinedIcon sx={{ color: "silver" }} />{" "}
                <span style={{ fontWeight: "bold" }}>Confirmation</span>
              </p>

              <Grid marginTop={5} textAlign="center">
                <Grid>
                  <CheckCircleOutlineRoundedIcon
                    sx={{ fontSize: 80, color: "#76ce9d" }}
                  />
                </Grid>
                <Grid marginTop={2}>
                  <h4>Payment Confirmed</h4>
                </Grid>
                <Grid marginTop={0}>
                  <p style={{ color: "#58b484" }}>ORDER # 2039</p>
                  <p>
                    Thankyou for shopping from our website. Your order is
                    confirmed and will be delivered within a week.
                  </p>
                </Grid>
                <Grid item marginTop={5}>
                  <Link to="/" className="shipbtn">
                    <span>Back to shopping</span>
                  </Link>
                </Grid>
                <Grid item marginTop={4}>
                  <Link to="" className="backtocart">
                    <span>Print Receipt</span>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className="col-md-6">
          <div className="rightHalf">
            <div className="container">
              <Grid container justifyContent="space-between" marginBottom={5}>
                <Grid item xs={5}>
                  <img
                    src="https://static-01.daraz.pk/p/ded03d58e4f35bf0e1bb368682e54d06.jpg"
                    class="rounded float-left"
                    alt="..."
                    width="100%"
                  />
                </Grid>
                <Grid item>
                  <p style={{ fontWeight: "bold" }}>Full Sleeves T-shirt</p>
                  <p style={{ fontWeight: "bold", color: "#58b484" }}>$ 9.99</p>
                </Grid>
              </Grid>
              <hr style={{ color: "silver" }} />
              <div class="input-group my-4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Coupon code"
                />
                <button class="btn btn-secondary">Add code</button>
              </div>
              <hr style={{ color: "silver", height: "1.5px" }} />
              <Grid container justifyContent="space-between">
                <Grid item>
                  <p>Subtotal</p>
                </Grid>
                <Grid item>
                  <p>$ 9.99</p>
                </Grid>
              </Grid>
              <Grid container justifyContent="space-between">
                <Grid>
                  <p>Shipping</p>
                </Grid>
                <Grid item>
                  <p>Calculated at next step</p>
                </Grid>
              </Grid>
              <hr style={{ color: "silver" }} />
              <Grid container justifyContent="space-between">
                <Grid>
                  <p>Total</p>
                </Grid>
                <Grid item>
                  <h4>$ 9.99</h4>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
