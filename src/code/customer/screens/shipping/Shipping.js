import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import "./shipping.css";

const theme = createTheme();

export default function Shipping() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="main">
        <div className="row">
          <div className="col-md-6">
            <div className="container">
              <div className="details">
                <p>
                  <Link to="/cart" className="backBtn">
                    Cart
                  </Link>{" "}
                  <ChevronRightOutlinedIcon sx={{ color: "silver" }} />{" "}
                  <span style={{ fontWeight: "bold" }}>Shipping</span>{" "}
                  <ChevronRightOutlinedIcon sx={{ color: "silver" }} />{" "}
                  <span>Payment</span>{" "}
                  <ChevronRightOutlinedIcon sx={{ color: "silver" }} />{" "}
                  <span>Confirmation</span>
                </p>

                <div className="contact mt-5">
                  <Grid container marginBottom={1}>
                    <Grid item xs>
                      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                        Contact
                      </span>
                    </Grid>
                    <Grid item>
                      <span>
                        Do you have an account? <Link to="/login">Login</Link>
                      </span>
                    </Grid>
                  </Grid>
                  <TextField
                    fullWidth
                    label="Mobile number"
                    type="phone"
                    size="small"
                    autoFocus
                  />
                </div>
                <div className="shipping mt-4">
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 3 }}
                  >
                    <Grid marginBottom={1}>
                      <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                        Shipping Address
                      </span>
                    </Grid>
                    <Grid container spacing={2} marginBottom={1}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          autoComplete="given-name"
                          name="firstName"
                          fullWidth
                          id="firstName"
                          label="First Name"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="family-name"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField fullWidth label="Address" size="small" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Shipping note (optional)"
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField fullWidth label="City" size="small" />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField fullWidth label="Postal Code" size="small" />
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <TextField fullWidth label="Province" size="small" />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField fullWidth label="Country" size="small" />
                      </Grid>
                    </Grid>
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Save this information for a future fast checkout"
                    />
                    <Grid container marginTop={4}>
                      <Grid item xs>
                        <Link to="/cart" className="backtocart">
                          <span>Back to cart</span>
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link to="/payment" className="shipbtn">
                          <span>Proceed to Payment</span>
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </div>
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
                    <p style={{ fontWeight: "bold", color: "#58b484" }}>
                      $ 9.99
                    </p>
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
      </div>
    </ThemeProvider>
  );
}
