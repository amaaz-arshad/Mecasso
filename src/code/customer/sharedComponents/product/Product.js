import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import img from "../../../../images/product.png";

export default function Product() {
  return (
    <Card
      style={{
        maxWidth: "320px",
        height: "230px",
        margin: "8px",
      }}
    >
      <CardActionArea style={{ dispaly: "flex", flexDirection: "column" }}>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="product img"
          style={{ backgroundColor: "#f8f9fa", backgroundPosition: "center" }}
        />

        <CardContent style={{ width: "100%" }}>
          <Typography
            gutterBottom
            style={{
              textAlign: "center",
              backgroundColor: "white",
              fontFamily: "Poppins",
            }}
          >
            Spice Mint
          </Typography>
          <Typography
            gutterBottom
            style={{
              textAlign: "right",
              color: "red",
              fontFamily: "Roboto",
            }}
          >
            $9.99
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
