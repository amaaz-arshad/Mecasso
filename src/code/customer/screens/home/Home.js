import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import Container from "@mui/material/Container";
import Product from "../../sharedComponents/product/Product";
import ReviewCard from "../../sharedComponents/reviewCard/ReviewCard";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
// import Footer from "../../sharedComponents/footer/Footer";
import soywax from "../../../../images/soywax.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  main: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  heading: {
    width: "100%",
    height: "780px",
    backgroundImage: `url(${"https://ombodyhealth.com/wp-content/uploads/2021/02/noelle-australia-6ElnH17iD-8-unsplash-scaled.jpg"})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "45px",
  },

  card: {
    position: "absolute",
    width: "730px",
    height: "349px",
    background: "rgba(247, 248, 250, 0.8)",
    backdropFilter: "blur(24px)",
    borderRadius: "2px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "346px",
      height: "371px",
    },
  },

  title: {
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: 500,
    //fontSize: "40px",
    //line-height: 58px;
  },

  description: {
    fontFfamily: "Abel",
    fontStyle: "normal",
    fontWeight: 400,

    //fontSize: "18px",
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

  //***************soy wax *******
  soywax: {
    display: "flex",
    justifyContent: "space-evenly",
    padding: "80px",
    maxHeight: "800px",
    backgroundColor: "#F7F8FA",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  left: {},
  desktopimg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobileimg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  textlines: {
    display: "flex",
    marginBottom: "3px",
  },

  //*************** testiuomnals *******
  testimonal: {
    //height: "370px",
    background: "rgba(86, 178, 128, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px",
    marginBottom: "20px",
  },
  reviewcards: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
}));

function Home(props) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {/* **********************heading picture************8 */}
      <div className={classes.heading}>
        <div className={classes.card}>
          <h1>🌱</h1>
          <h1 className={classes.title}> The nature candle</h1>
          <p className={classes.description}>
            All handmade with natural soy wax, Candleaf is a companion for all
            your pleasure moments.
          </p>
          <Button className={classes.button}>Discovery our collection</Button>
        </div>
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
          Top Categories
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
        <Typography variant="h4">Products</Typography>

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
      {/* **********************Soy wax section************8 */}

      <div className={classes.soywax}>
        <div className={classes.left}>
          <Typography variant="h4">Clean and fragrant soy wax</Typography>
          <Typography style={{ color: "green", marginBottom: "25px" }}>
            Made for your home and for your wellness
          </Typography>
          <div className={classes.mobileimg}>
            <img style={{ width: "330" }} src={soywax}></img>
          </div>
          <div className={classes.textlines}>
            <CheckCircleOutlineIcon fontSize="small" />
            <Typography>
              Eco-sustainable:All recyclable materials, 0% CO2 emissions
            </Typography>
          </div>
          <div className={classes.textlines}>
            <CheckCircleOutlineIcon fontSize="small" />
            <Typography>
              Hyphoallergenic: 100% natural, human friendly ingredients
            </Typography>
          </div>
          <div className={classes.textlines}>
            <CheckCircleOutlineIcon fontSize="small" />
            <Typography>
              Handmade: All candles are craftly made with love.
            </Typography>
          </div>
          <div className={classes.textlines} style={{ marginBottom: "33px" }}>
            <CheckCircleOutlineIcon fontSize="small" />
            <Typography>
              Long burning: No more waste. Created for last long.
            </Typography>
          </div>

          <Button className={classes.button}>Learn More</Button>
        </div>
        <div className={classes.desktopimg}>
          <img style={{ width: "330" }} src={soywax}></img>
        </div>
      </div>

      {/* **********************testimonal section************8 */}
      <div className={classes.testimonal}>
        <Typography variant="h4">Testimonals</Typography>

        <Typography style={{ color: "#5E6E89", marginBottom: "15px" }}>
          Some quotes from our happy customers
        </Typography>
        <div className={classes.reviewcards}>
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
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
    </div>
  );
}

export default Home;
