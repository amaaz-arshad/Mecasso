import React from "react"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Chart from "../components/dashboard/Chart"
import SalesSummary from "../components/sales/SalesSummary"
import SalesProducts from "../components/sales/SalesProducts"
import Title from "../components/sharedComponent/Title"

const Sales = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 2 }}>
        <Title>Sales</Title>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <SalesSummary />
        </Grid>

        <Grid item xs={12} md={9}>
          <SalesProducts />
        </Grid>

        <Grid item xs={12} md={6}>
          <Chart title={"Customers Increase"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Chart title={"Products Sold"} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Sales
