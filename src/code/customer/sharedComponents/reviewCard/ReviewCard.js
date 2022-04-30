import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import img from "../../../../images/customer.png";
import "./ReviewCard.css";
export default function ReviewCard() {
  return (
    <>
      {/* <div className="testimonials">
        <div className="inner">
          <h1>Testimonials</h1>
          <div className="border"></div> */}

      {/* <div className="row">
        <div className="col"> */}
      <div className="testimonial">
        <img src={img} alt=""></img>
        <Stack spacing={1}>
          <Rating
            name="half-rating-read"
            defaultValue={2.5}
            precision={0.5}
            size="small"
            readOnly
            style={{ color: "#56B280", marginBottom: "4px" }}
          />
        </Stack>

        <div className="text">“I love it! No more air fresheners”</div>
        <div className="name">Fullname</div>
      </div>
      {/* </div>
      </div> */}
      {/* </div>
      </div> */}
    </>
  );
}
