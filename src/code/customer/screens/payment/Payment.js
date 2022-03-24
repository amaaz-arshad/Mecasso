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
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Card from "@mui/material/Card";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { InputAdornment } from "@mui/material";
import { Link } from "react-router-dom";
import LockIcon from "@mui/icons-material/Lock";
import InfoIcon from "@mui/icons-material/Info";
import "./payment.css";
import { BsCreditCardFill } from "react-icons/bs";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const theme = createTheme();

export default function Payment() {
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
                  <Link to="/shipping" className="backBtn">
                    Shipping
                  </Link>{" "}
                  <ChevronRightOutlinedIcon sx={{ color: "silver" }} />{" "}
                  <span style={{ fontWeight: "bold" }}>Payment</span>{" "}
                  <ChevronRightOutlinedIcon sx={{ color: "silver" }} />{" "}
                  <span>Confirmation</span>
                </p>

                <div className="mt-5">
                  <div class="card">
                    <div class="card-body">
                      <Grid container>
                        <Grid item xs={2}>
                          <span style={{ color: "silver" }}>Contact</span>
                        </Grid>
                        <Grid item xs={8}>
                          <span>09007860128</span>
                        </Grid>
                        <Grid item xs={2} textAlign="right" paddingRight={1}>
                          <Link to="" className="backtocart">
                            <span>Edit</span>
                          </Link>
                        </Grid>
                      </Grid>

                      <hr />

                      <Grid container>
                        <Grid item xs={2}>
                          <span style={{ color: "silver" }}>Ship to</span>
                        </Grid>
                        <Grid item xs={8}>
                          <span>House ABC, Street 123, Xyz Area</span>
                        </Grid>
                        <Grid item xs={2} textAlign="right" paddingRight={1}>
                          <Link to="" className="backtocart">
                            <span>Edit</span>
                          </Link>
                        </Grid>
                      </Grid>

                      <hr style={{ height: "0.5px" }} />

                      <Grid container>
                        <Grid item xs={2}>
                          <span style={{ color: "silver" }}>Method</span>
                        </Grid>
                        <Grid item xs={8}>
                          <span>Standard Shipping- FREE</span>
                        </Grid>
                        <Grid item xs={2} textAlign="right" paddingRight={1}>
                          <Link to="" className="backtocart">
                            <span>Edit</span>
                          </Link>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </div>
                <Grid marginTop={4}>
                  <Grid marginBottom={2}>
                    <h5>Payment Method</h5>
                  </Grid>

                  <div class="card">
                    <div class="card-header">
                      <BsCreditCardFill
                        style={{ fontSize: 25, marginRight: 15 }}
                      />
                      Credit Card
                    </div>
                    <div class="card-body">
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Card Number"
                            size="small"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment>
                                  <LockIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            label="Holder Name"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="Expiry Date (MM/YY)"
                            size="small"
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <TextField
                            fullWidth
                            label="CVC"
                            size="small"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment>
                                  <InfoIcon />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                      </Grid>
                    </div>
                  </div>

                  <Grid marginBottom={2} marginTop={4}>
                    <h5>Tax informations</h5>
                  </Grid>

                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="VAT number (optional)"
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="PEC (optional)"
                        size="small"
                      />
                    </Grid>
                  </Grid>

                  <Grid marginBottom={2} marginTop={4}>
                    <h5>Billing Address</h5>
                  </Grid>

                  <div class="card">
                    <div class="card-body">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          checked
                        />
                        <label
                          class="form-check-label ms-2"
                          for="flexRadioDefault1"
                        >
                          Same as the shipping address
                        </label>
                      </div>

                      <hr style={{ height: "0.5px", width: "100%" }} />

                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        />
                        <label
                          class="form-check-label ms-2"
                          for="flexRadioDefault2"
                        >
                          Use a different address for billing
                        </label>
                      </div>
                    </div>
                  </div>

                  <Grid container marginTop={5}>
                    <Grid item xs>
                      <Link to="/shipping" className="backtocart">
                        <span>Back to shipping</span>
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link to="/confirmation" className="shipbtn">
                        <span>Pay Now</span>
                      </Link>
                    </Grid>
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
