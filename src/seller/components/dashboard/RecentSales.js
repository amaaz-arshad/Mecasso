import React from "react"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { smallImageStyle } from "../../../styles/SellerStyles"
import Title from "../sharedComponent/Title"

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
    <Paper>
      <Box p={2} overflow="auto" height={400}>
        <Title>Recent Sales</Title>
        {data.map(({ id, image, name, time, price }) => (
          <Box
            key={id}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <img src="/u1.png" style={smallImageStyle} alt="" />
            <Box>
              <Typography color="">{name}</Typography>
              <Typography color="gray">{time}</Typography>
            </Box>
            <Typography color="primary">{price}</Typography>
          </Box>
        ))}
      </Box>
    </Paper>
  )
}

export default RecentSales
