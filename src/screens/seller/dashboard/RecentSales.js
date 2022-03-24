import React from "react"
import { smallImageStyle } from "../../../styles/SellerStyles"
import Title from "../layout/Title"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"

const data = [
  { id: 0, image: "", name: "Amna Ahmed", time: "1 day", price: "$100" },
  { id: 1, image: "", name: "Amna Ahmed", time: "1 day", price: "$100" },
  { id: 2, image: "", name: "Amna Ahmed", time: "1 day", price: "$100" },
  { id: 3, image: "", name: "Amna Ahmed", time: "1 day", price: "$100" },
  { id: 4, image: "", name: "Amna Ahmed", time: "1 day", price: "$100" },
  { id: 5, image: "", name: "Amna Ahmed", time: "1 day", price: "$100" },
  { id: 6, image: "", name: "Amna Ahmed", time: "1 day", price: "$100" },
]

const RecentSales = () => {
  return (
    <Box p={2} overflow="auto" height={400}>
      <Title>Recent Sales</Title>
      {data.map(({ id, image, name, time, price }) => (
        <Box key={id} sx={{ display: "flex",justifyContent:"space-between",width: "100%" }}>
          <img src="/u1.png" style={smallImageStyle} alt="" />
          <Box>
            <Typography color="">{name}</Typography>
            <Typography color="gray">{time}</Typography>
          </Box>
          <Typography color="primary">{price}</Typography>
        </Box>
      ))}
    </Box>
  )
}

export default RecentSales
