import React from "react";
import { Button, makeStyles, Typography, withTheme } from "@material-ui/core";
import Container from "@mui/material/Container";
import Product from "../../sharedComponents/product/Product";

// import Footer from "../../sharedComponents/footer/Footer";
import StoreImg from "../../../../images/store_img.jpg";

const useStyles = makeStyles((theme) => ({
  heading: {
    width: "100%",
    height: "300px",
    backgroundImage: `url(${StoreImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    marginBottom: "45px",
  },
  button: {
    background: "#56B280",
    fontFamily: "Roboto",
    fontStyle: "normal",
    color: "white",
  },
  //***************products *******
  products: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

export default function Stores(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.heading}>
        <h1> Store Name</h1>
      </div>
      {/* **********************top categories************8 */}
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "45px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Categories
        </Typography>

        <Container className={classes.products}>
          <Product />
          <Product />
          <Product />
          <Product />
        </Container>
      </Container>
      {/* **********************Products************8 */}
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "45px",
          maxWidth: "80%",
        }}
      >
        <Typography variant="h4">Featured Products</Typography>

        <Typography style={{ color: "#5E6E89", marginBottom: "15px" }}>
          Order it for you or for your beloved ones
        </Typography>

        <Container className={classes.products}>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Container>
      </Container>
      {/* **********************popular************8 */}
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "45px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Popular
        </Typography>
        <Typography style={{ color: "#5E6E89", marginBottom: "15px" }}>
          Our top selling product that you may like
        </Typography>
        <Container className={classes.products}>
          <Product />
          <Product />
          <Product />
          <Product />
        </Container>
      </Container>
      {/* **********************top categories************8 */}
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "45px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Other Stores
        </Typography>

        <Container className={classes.products}>
          <Product />
          <Product />
          <Product />
          <Product />
        </Container>
      </Container>
    </div>
  );
}
