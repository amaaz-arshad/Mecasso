import React from "react"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Title from "../layout/Title"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { Link } from "react-router-dom"

const Stores = () => {
  const stores = [
    { id: 0, name: "Store Name", followers: 256 },
    { id: 1, name: "Store Name", followers: 256 },
    { id: 2, name: "Store Name", followers: 256 },
    { id: 3, name: "Store Name", followers: 256 },
    { id: 4, name: "Store Name", followers: 256 },
    { id: 5, name: "Store Name", followers: 256 },
  ]
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box
        marginY={4}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Title>Stores</Title>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography color="gray" marginX={4}>
            Total Followers - 450
          </Typography>
          <Button variant="contained">
            <Typography color="secondary">Add Store</Typography>
          </Button>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {stores.map(({ id, name, followers }) => (
          <Grid item xs={12} md={4} lg={3} key={id}>
            <Link to={`/stores/${name}`}>
              <Paper sx={{ padding: "1rem" }}>
                <img
                  src="/product.png"
                  width="100%"
                  height="100%"
                  sx={{ resizeMode: "contain", width: "" }}
                  alt=""
                />
                <Typography>{name}</Typography>
                <Typography align="right" color="primary">
                  {followers} Followers
                </Typography>
              </Paper>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Stores
