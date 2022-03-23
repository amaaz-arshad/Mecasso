import React from "react"
import { paperStyle, smallImageStyle } from "../../../styles/SellerStyles"
import Title from "../layout/Title"

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
    <div>
      <Title>Recent Sales</Title>
      {data.map(({ id, image, name, time, price }) => (
        <div key={id}>
          <img src="" sx={smallImageStyle} alt="" />
          <div sx={paperStyle}>
            {name}
            {time}
          </div>
          {price}
        </div>
      ))}
    </div>
  )
}

export default RecentSales
