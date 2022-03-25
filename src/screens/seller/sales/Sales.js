import React from "react"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Deposits from "../dashboard/Deposits"
import Orders from "../dashboard/Orders"
import Chart from "../dashboard/Chart"
import SalesSummary from "./SalesSummary"
import SalesProducts from "./SalesProducts"

const Sales = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <SalesSummary />
        </Grid>

        <Grid item xs={12} md={9}>
          <SalesProducts />
        </Grid>

        <Grid item xs={12} md={6}>
          <Chart title={ "Customers Increase"}/>
        </Grid>
        <Grid item xs={12} md={6}>
          <Chart title={ "Products Sold"}/>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Sales
