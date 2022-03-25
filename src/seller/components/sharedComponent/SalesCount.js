import React from 'react'
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import { paperStyle } from '../../../styles/SellerStyles'

const SalesCount = ({icon,title,value,columns}) => {
  return (
    <Grid item xs={12} md={columns}>
      <Paper sx={paperStyle}>
        {icon}
        <Typography color="gray">{title}</Typography>
        <Typography variant="h6">{value}</Typography>
      </Paper>
    </Grid>
  )
}

export default SalesCount