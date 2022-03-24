import React from "react"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import { paperStyle } from "../../../styles/SellerStyles"
import Chart from "./Chart"
import Box from "@mui/material/Box"

const data = [
  {
    id: 1,
    icon: <ShoppingCartIcon color="primary" />,
    title: "Total Sales",
    value: "$1,234,567",
  },
  {
    id: 2,
    icon: <AddShoppingCartIcon color="primary" />,
    title: "Purchases",
    value: "$1,234,567",
  },
  {
    id: 3,
    icon: <RemoveShoppingCartIcon color="primary" />,
    title: "Returns",
    value: "$1,234,567",
  },
]

const Deposits = () => {
  return (
    <Grid container spacing={3}>
      {/* sale */}
      {data.map(({ id, icon, title, value }, index) => (
        <Grid item xs={12} md={4}>
          <Paper sx={paperStyle}>
            {icon}
            <Typography color="gray">{title}</Typography>
            <Typography variant="h6">{value}</Typography>
          </Paper>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Paper sx={{
          height: 215, padding:"1rem"}}>
          <Chart />
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Deposits
