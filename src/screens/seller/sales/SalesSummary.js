import React from 'react'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart"
import SalesCount from '../sharedComponent/SalesCount'
import Grid from "@mui/material/Grid"



const SalesSummary = () => {
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
    
  return (
    <Grid container spacing={3}>
      {/* sale */}
      {data.map(({ id, icon, title, value }, index) => (
        <SalesCount icon={icon} title={title} value={value} columns={12} />
      ))}
     
    </Grid>
  )
}

export default SalesSummary