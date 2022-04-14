import React from "react";
import { Button, makeStyles, Typography, withTheme } from "@material-ui/core";
import Container from "@mui/material/Container";
import Product from "../../sharedComponents/product/Product";
import ProductImage from "../../../../images/product.png";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Footer from "../../sharedComponents/footer/Footer";

const useStyles = makeStyles((theme) => ({
  img: {
    backgroundColor: "#F7F8FA",
    height: "300px",
    width: "100%",
    backgroundImage: `url(${ProductImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginBottom: "10px",
  },
  reviewSection: {
    backgroundColor: "#F7F8FA",
    height: "541px",
    paddingLeft: "180px",
    paddingRight: "180px",
    paddingTop: "80px",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  //***************products *******
  products: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  //   padding: theme.spacing(1),
  textAlign: "start",
  boxShadow: "none",
  color: theme.palette.text.secondary,
}));

function Store(props) {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Grid container spacing={3} justifyContent="center" sx={{ mb: 4 }}>
        <Grid item xs={10} md={3}>
          <Item>
            <div className={classes.img} style={{}}></div>
            <div style={{ backgroundColor: "white" }}>
              <Typography
                variant="body1"
                gutterBottom
                style={{ textAlign: "center" }}
              >
                All hand-made with natural soy wax, Candleaf is made for your
                pleasure moments.
              </Typography>
              <Typography
                variant="body2"
                style={{ color: "#56B280", textAlign: "center" }}
              >
                🚚 FREE SHIPPING.
              </Typography>
            </div>
          </Item>
        </Grid>
        {/* jjjjjjjjjjjjjjj  right grid jjjjjjjjjjjjjjjj */}
        <Grid item md={4} xs={10}>
          <Item>
            <Typography variant="h6" gutterBottom style={{ color: "#272727" }}>
              Spiced Mint Candleaf®
            </Typography>
            <Stack spacing={0}>
              <Rating name="read-only" value={3} size="small" readOnly />
            </Stack>
            {/* jjjjj  price and radio jjjjjj */}
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item md={4}>
                <Item>
                  <Typography
                    variant="h6"
                    gutterBottom
                    style={{ color: "#56B280", marginBottom: "15px" }}
                  >
                    $9.99
                  </Typography>
                  <Typography variant="body1" style={{ marginBottom: "3px" }}>
                    Quantity
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      border: "1px solid #56B280",
                      maxWidth: "70px",
                      marginBottom: "100px",
                    }}
                  >
                    <AddIcon fontSize="small" />
                    1
                    <RemoveIcon fontSize="small" />
                  </div>
                </Item>
              </Grid>
              <Grid item md={8}>
                <Item>
                  <RadioGroup defaultValue="oneTime" sx={{ mb: 2 }}>
                    <FormControlLabel
                      value="oneTime"
                      control={<Radio size="small" />}
                      label="one time purchase"
                      sx={{ color: "black", paddingLeft: "14px" }}
                    />
                    <div
                      style={{
                        border: "0.5px solid #A9ACC6",
                        borderRadius: "8px",
                        paddingLeft: "14px",
                        paddingTop: "4px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <FormControlLabel
                          value="subscribe"
                          control={<Radio size="small" />}
                          label="subscribe and delivery for every"
                          sx={{ color: "black" }}
                        />
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                          <InputLabel id="demo-select-small">
                            Select weeks
                          </InputLabel>
                          <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            // value={age}
                            // label="Age"
                            // onChange={handleChange}
                          >
                            <MenuItem value="">None</MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      <Typography variant="body1">
                        Subscribe now and get the 10% of discount on every
                        recurring order. The discount will be applied at
                        checkout.{" "}
                        <span style={{ color: "blue" }}>See details</span>
                      </Typography>
                    </div>
                  </RadioGroup>

                  <Button
                    style={{
                      backgroundColor: "#56B280",
                      color: "white",
                      width: "100%",
                      marginBottom: "10px",
                      //height: "25px",
                    }}
                  >
                    <ShoppingCartOutlinedIcon />+ Add to cart
                  </Button>
                </Item>
              </Grid>
            </Grid>

            {/* jjjjjjjjjjj */}
            <div
              style={{
                border: "0.5px solid #A9ACC6",
                borderRadius: "8px",
                padding: "5px",
              }}
            >
              <Typography variant="body2">
                <span style={{ color: "black" }}>Wax: </span>Top grade Soy wax
                that delivers a smoke less, consistent burn
              </Typography>
              <Typography variant="body2">
                <span style={{ color: "black" }}> Fragrance: </span>Premium
                quality ingredients with natural essential oils
              </Typography>
              <Typography variant="body2">
                <span style={{ color: "black" }}> Fragrance: </span>Premium
                quality ingredients with natural essential oils
              </Typography>
              <Typography variant="body2">
                <span style={{ color: "black" }}>Wax: </span>Top grade Soy wax
                that delivers a smoke less, consistent burn
              </Typography>
            </div>
          </Item>
        </Grid>
      </Grid>

      {/* kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk review section kkkkkkkkkkkkkkkkkkk */}
      <div className={classes.reviewSection}>
        <div style={{ display: "flex" }}>
          <Button style={{ fontSize: "25px", paddingRight: "100px" }}>
            Description
          </Button>
          <Button style={{ fontSize: "25px", paddingRight: "100px" }}>
            Question and Answers{" "}
          </Button>
          <Button style={{ fontSize: "25px" }}>Reviews</Button>
        </div>
        <Typography style={{ color: "#A9ACC6", marginBottom: "40px" }}>
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
          ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
          varius ac est bibendum. Scelerisque a, risus ac ante. Velit
          consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
          consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
          tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
          lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
          massa viverr .
        </Typography>
        <Typography variant="h5" gutterBottom>
          More Details
        </Typography>
        <div style={{ display: "flex" }}>
          <ArrowForwardIcon fontSize="small" />
          <Typography style={{ color: "#A9ACC6", marginBottom: "7px" }}>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <ArrowForwardIcon fontSize="small" />
          <Typography style={{ color: "#A9ACC6", marginBottom: "7px" }}>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <ArrowForwardIcon fontSize="small" />
          <Typography style={{ color: "#A9ACC6", marginBottom: "7px" }}>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </Typography>
        </div>
        <div style={{ display: "flex" }}>
          <ArrowForwardIcon fontSize="small" />
          <Typography style={{ color: "#A9ACC6", marginBottom: "7px" }}>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam
            arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
            nec. Dui, massa viverr .
          </Typography>
        </div>
      </div>
      {/* kkkkkkkkkkkkkkkkkkkkkkkkkkkkkk related product section kkkkkkkkkkkkkkkkkkk */}
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "45px",
          marginTop: "45px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Related Products
        </Typography>
        <Typography style={{ color: "#5E6E89", marginBottom: "15px" }}>
          you may like
        </Typography>
        <Container className={classes.products}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Container>
      </Container>
      <Footer />
    </Box>
  );
}

export default Store;
