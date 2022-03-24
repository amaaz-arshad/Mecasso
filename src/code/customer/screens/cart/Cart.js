import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Cart(props) {
  return (
    <div className="container my-5">
      <h3 className="text-center">Your cart items</h3>
      <div className="text-center mt-4">
        <Link to="/" className="backtocart">
          <span>Back to shopping</span>
        </Link>
      </div>

      <div className="row mt-5">
        <div className="col-sm-6">
          <b>Product</b>
        </div>
        <div className="col-sm-6">
          <div className="row text-end">
            <div className="col-sm-4">
              <b>Price</b>
            </div>
            <div className="col-sm-4">
              <b>Quantity</b>
            </div>
            <div className="col-sm-4">
              <b>Total</b>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ color: "silver" }} />

      <div className="row align-items-center">
        <div className="col-sm-6">
          <div className="row align-items-center">
            <div className="col-sm-4 col-md-3 col-lg-2">
              <img
                src="https://static-01.daraz.pk/p/ded03d58e4f35bf0e1bb368682e54d06.jpg"
                alt="..."
                width="100%"
              />
            </div>
            <div className="col-sm-8 col-md-9 col-lg-10">
              <span>T-shirt for men</span>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row text-end">
            <div className="col-sm-4">
              <span>$ 9.99</span>
            </div>
            <div className="col-sm-4">
              <span>1</span>
            </div>
            <div className="col-sm-4">
              <span>$ 9.99</span>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ color: "silver" }} />

      <div className="text-end mt-4">
        <b className="me-5">Subtotal</b>
        <span className="me-5">$ 9.99</span>
        <Link className="btn btn-success checkout" to="/shipping">
          Checkout
        </Link>
      </div>

      <h3 className="text-center my-5">Related Products</h3>
      <div className="row gy-5">
        <div className="col-sm-6 col-md-3">
          <Card>
            <CardMedia
              component="img"
              //   height="140"
              image="https://pyxis.nymag.com/v1/imgs/75d/76b/df203888c3a6c962e0d3e35b59dda85c47-mens-long-sleeve-t-lede.rsquare.w700.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                T-shirt for men
              </Typography>
              <Typography variant="h5" color="#58b484" textAlign="right">
                $ 9.99
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
        </div>
        <div className="col-sm-6 col-md-3">
          <Card>
            <CardMedia
              component="img"
              //   height="140"
              image="https://ae01.alicdn.com/kf/HTB1OL0qMXXXXXaJaXXXq6xXFXXXV/100-Cotton-Brand-Clothing-Shirt-Mens-Clothes-Slim-Fit-Young-Man-Dress-Shirts-Fashion-Long-Sleeve.jpg_Q90.jpg_.webp"
              alt="..."
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                T-shirt for men
              </Typography>
              <Typography variant="h5" color="#58b484" textAlign="right">
                $ 9.99
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
        </div>
        <div className="col-sm-6 col-md-3">
          <Card>
            <CardMedia
              component="img"
              //   height="140"
              image="https://www.dhresource.com/0x0/f2/albu/g6/M01/57/55/rBVaR1pe7pyAViJwAAk-FvpwPPU371.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                T-shirt for men
              </Typography>
              <Typography variant="h5" color="#58b484" textAlign="right">
                $ 9.99
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
        </div>
        <div className="col-sm-6 col-md-3">
          <Card>
            <CardMedia
              component="img"
              //   height="140"
              image="https://ae01.alicdn.com/kf/Hf2176b3150f04514ae1811772cbb3f18n.jpg?width=800&height=800&hash=1600"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                T-shirt for men
              </Typography>
              <Typography variant="h5" color="#58b484" textAlign="right">
                $ 9.99
              </Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Cart;
