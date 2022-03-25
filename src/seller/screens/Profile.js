import React from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Title from "../components/sharedComponent/Title"

const Profile = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 2 }}>
        <Title>Profile</Title>
      </Box>
    </Container>
  )
}

export default Profile
