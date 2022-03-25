import React from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Title from "../layout/Title"
import { Link, useParams } from "react-router-dom"

const Store = () => {
  const { name } = useParams()
  const products = [
    { id: 0, name: "Product Name", price: 256, quantity: 67 },
    { id: 1, name: "Product Name", price: 256, quantity: 67 },
    { id: 2, name: "Product Name", price: 256, quantity: 67 },
    { id: 3, name: "Product Name", price: 256, quantity: 67 },
    { id: 4, name: "Product Name", price: 256, quantity: 67 },
    { id: 5, name: "Product Name", price: 256, quantity: 67 },
  ]
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 2 ,display:"flex",justifyContent: "space-between"}}>
        <Title>{name} &#62; Products</Title>
        <Button variant="contained" color="primary">
          <Typography color="secondary">Add Product</Typography>
        </Button>
      </Box>
      <Grid container spacing={2}>
        {products.map(({ id, name, price, quantity }) => (
          <Grid item xs={12} md={4} lg={3} key={id}>
            {/* <Link to={`/stores/${name}`}> */}
            <Paper sx={{ padding: "1rem" }}>
              <img
                src="/product.png"
                width="100%"
                height="100%"
                sx={{ resizeMode: "contain", width: "" }}
                alt=""
              />
              <Typography>{name}</Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography color="gray">Quantity - {quantity}</Typography>
                <Typography align="right" color="primary">
                  ${price}
                </Typography>
              </Box>
            </Paper>
            {/* </Link> */}
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Store
