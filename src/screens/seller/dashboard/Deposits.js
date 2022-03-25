import React from "react"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Chart from "./Chart"
import SalesCount from "../sharedComponent/SalesCount"

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
        <SalesCount icon={icon} title={title} value={value} columns={4} />
      ))}
      <Grid item xs={12}>
        <Chart title={"Today"}/>
      </Grid>
    </Grid>
  )
}

export default Deposits
