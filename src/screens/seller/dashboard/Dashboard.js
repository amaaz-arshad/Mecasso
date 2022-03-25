import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Link from "@mui/material/Link"
import Deposits from "./Deposits"
import Orders from "./Orders"
import RecentSales from "./RecentSales"

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Mecasso
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={2}>
        {/* grid 1 */}
        <Grid item xs={12} md={8}>
          <Deposits />
        </Grid>

        <Grid item xs={12} md={4}>
          {/* recent sales */}
          <RecentSales />
        </Grid>

        {/* grid 2 */}
        <Grid item xs={12}>
          {/* latest invoices */}
          <Orders />
        </Grid>
      </Grid>
      <Copyright sx={{ pt: 4 }} />
    </Container>
  )
}

export default Dashboard
