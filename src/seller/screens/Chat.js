import React from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import Title from "../components/sharedComponent/Title"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import { Link, Outlet, useParams } from "react-router-dom"

const Chat = () => {
  const { name } = useParams()
  const chat = [
    {
      id: 1,
      name: "Harry Potter",
      image: "u1.png",
      message: "Hello, how are you?",
    },
    {
      id: 2,
      name: "Lord of the Rings",
      image: "u1.png",
      message: "Hello, how are you?",
    },
    {
      id: 3,
      name: "Sid",
      image: "u1.png",
      message: "Hello, how are you?",
    },
    {
      id: 4,
      name: "Elza",
      image: "u1.png",
      message: "Hello, how are you?",
    },
    {
      id: 5,
      name: "Martin",
      image: "u1.png",
      message: "Hello, how are you?",
    },
    {
      id: 6,
      name: "Cindrella",
      image: "u1.png",
      message: "Hello, how are you?",
    },
    {
      id: 7,
      name: "Snow White",
      image: "u1.png",
      message: "Hello, how are you?",
    },
    {
      id: 8,
      name: "Rapunzel",
      image: "u1.png",
      message: "Hello, how are you?",
    },
    {
      id: 9,
      name: "Bella",
      image: "u1.png",
      message: "Hello, how are you?",
    },
  ]
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      {/* <Title>{name}</Title> */}
      <Paper sx={{ padding: "1rem", height: 800 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={
              name
                ? { display: { xs: "none", sm: "block" } }
                : { display: "block" }
            }
            sm={5}
            // md={4}
          >
            <Title>All Messages</Title>

            <Paper sx={{ padding: "1rem" }}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Search Chat"
                variant="outlined"
              />
              <Grid
                container
                xs={12}
                spacing={2}
                marginY={1}
                height={620}
                overflow="auto"
              >
                {chat.map(({ id, name, image, message }) => (
                  <Grid item xs={12} key={id}>
                    <Link to={`${name}`}>
                      {/* <Link to={`${id}`}> */}
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        sx={{
                          borderBottom: 1,
                          borderColor: "grey.light",
                          padding: "1rem",
                          cursor: "pointer",
                        }}
                      >
                        <div>
                          <Typography>{name}</Typography>
                          <Typography color="grey.main">{message}</Typography>
                        </div>
                        <Typography color="primary">
                          <ArrowForwardIosIcon />
                        </Typography>
                      </Box>
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid
            item
            xs={12}
            sx={`${
              name
                ? { display: "block" }
                : { display: { xs: "none", md: "block" } }
            }`}
            sm={7}
          >
            <Outlet />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default Chat
