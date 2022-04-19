import React, { useEffect, useState } from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Title from "../components/sharedComponent/Title"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import MuiPhoneNumber from "material-ui-phone-number"
import Button from "@mui/material/Button"
import Paper from "@mui/material/Paper"

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)
  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage))
    }
  }, [selectedImage])
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 2 }}>
        <Title>Profile</Title>
        <Paper sx={{ padding: "1rem" }}>
          <Grid container spacing={2}>
            <Grid item sx={12} md={3}>
              {imageUrl && selectedImage ? (
                <Box mt={2} textAlign="center">
                  <img
                    src={imageUrl}
                    alt={selectedImage.name}
                    style={{
                      borderRadius: "100%",
                      objectFit: "cover",
                      width: "12rem",
                      height: "12rem",
                    }}
                  />
                </Box>
              ) : (
                <Box mt={2} textAlign="center">
                  <img
                    src="/u1.png"
                    alt="profile"
                    style={{
                      borderRadius: "100%",
                      objectFit: "cover",
                      width: "12rem",
                      height: "12rem",
                    }}
                  />
                </Box>
              )}
              <Box mt={2} textAlign="center">
                <input
                  accept="image/*"
                  type="file"
                  style={{ display: "none" }}
                  id="select-image"
                  onChange={(e) => setSelectedImage(e.target.files[0])}
                />
                <label htmlFor="select-image">
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    sx={{ my: 3 }}
                  >
                    <Typography color="secondary">
                      Change Profile Image
                    </Typography>
                  </Button>
                </label>
              </Box>
            </Grid>
            <Grid item sx={12} md={9}>
              {/* input fields */}
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Typography color="primary">First Name</Typography>
                    <TextField
                      required
                      id="outlined-required"
                      // label="Required"
                      defaultValue="Harry"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography color="primary">Last Name</Typography>
                    <TextField
                      required
                      id="outlined-required"
                      // label="Required"
                      defaultValue="Harry"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography color="primary">Phone Number</Typography>
                    <MuiPhoneNumber
                      variant="outlined"
                      name="phone"
                      data-cy="user-phone"
                      defaultCountry={"us"}
                      value="+12 23454234312"
                      // onChange={()=>handlePhoneChange()}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography color="primary">Email</Typography>
                    <TextField
                      required
                      id="outlined-required"
                      // label="Required"
                      defaultValue="abc123@email.com"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography color="primary">Country</Typography>
                    <TextField
                      required
                      id="outlined-required"
                      // label="Required"
                      defaultValue="USA"
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Typography color="primary">Postal Code</Typography>
                    <TextField
                      required
                      id="outlined-required"
                      // label="Required"
                      defaultValue="123456"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography color="primary">Address</Typography>
                    <TextField
                      required
                      id="outlined-required"
                      // label="Required"
                      defaultValue="New York City"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography color="primary">About</Typography>
                    <TextField
                      placeholder="Tell us about yourself"
                      defaultValue="Lorem ipsum dolor sit amet consectetur dipisicing elit. Maxime mollitia,molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga raesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquamnihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit"
                      multiline
                      rows={4}
                      maxRows={6}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginX: "auto", marginY: "1rem" }}
            >
              <Typography color="secondary">Update</Typography>
            </Button>
          </Grid>
        </Paper>
      </Box>
    </Container>
  )
}

export default Profile
