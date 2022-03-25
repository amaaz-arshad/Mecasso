import React from "react"
import Container from "@mui/material/Container"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Box from "@mui/material/Box"
import Title from "../layout/Title"
import { Link } from "react-router-dom"
import { Typography } from "@mui/material"
import { smallImageStyle } from "../../../styles/SellerStyles"

function createData(id, name, phone, email, location, url) {
  return { id, name, phone, email, location, url }
}

const rows = [
  createData(
    0,
    "Harry Potter",
    "+99 123 456 76",
    "email123@gmail.com",
    "New York City",
    "url"
  ),
  createData(
    1,
    "Harry Potter",
    "+99 123 456 76",
    "email123@gmail.com",
    "New York City",
    "url"
  ),
  createData(
    2,
    "Harry Potter",
    "+99 123 456 76",
    "email123@gmail.com",
    "New York City",
    "url"
  ),
  createData(
    3,
    "Harry Potter",
    "+99 123 456 76",
    "email123@gmail.com",
    "New York City",
    "url"
  ),
  createData(
    4,
    "Harry Potter",
    "+99 123 456 76",
    "email123@gmail.com",
    "New York City",
    "url"
  ),
  createData(
    5,
    "Harry Potter",
    "+99 123 456 76",
    "email123@gmail.com",
    "New York City",
    "url"
  ),
  createData(
    6,
    "Harry Potter",
    "+99 123 456 76",
    "email123@gmail.com",
    "New York City",
    "url"
  ),
  createData(
    7,
    "Harry Potter",
    "+99 123 456 76",
    "email123@gmail.com",
    "New York City",
    "url"
  ),
  createData(
    8,
    "Harry Potter",
    "+99 123 456 76",
    "email123@gmail.com",
    "New York City",
    "url"
  ),
  createData(
    9,
    "Harry Potter",
    "+99 123 456 76",
    "email123@gmail.com",
    "New York City",
    "url"
  ),
  createData(
    10,
    "Harry Potter",
    "+99 123 456 76",
    "email123@gmail.com",
    "New York City",
    "url"
  ), createData(
    11,
    "Harry Potter",
    "+99 123 456 76",
    "email123@gmail.com",
    "New York City",
    "url"
  ), createData(
    12,
    "Harry Potter",
    "+99 123 456 76",
    "email123@gmail.com",
    "New York City",
    "url"
  ), createData(
    13,
    "Harry Potter",
    "+99 123 456 76",
    "email123@gmail.com",
    "New York City",
    "url"
  ), createData(
    14,
    "Harry Potter",
    "+99 123 456 76",
    "email123@gmail.com",
    "New York City",
    "url"
  ), createData(
    15,
    "Harry Potter",
    "+99 123 456 76",
    "email123@gmail.com",
    "New York City",
    "url"
  ),
]

const Customers = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ mb: 2 }}>
        <Title>Customers</Title>
      </Box>
      <Paper sx={{ padding: "1rem" }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(({ id, name, phone, email, location, url }) => (
              <TableRow key={id} sx={{ paddingY: "0.5rem" }}>
                <TableCell sx={{ display: "flex", alignItems: "center" }}>
                  <img src="/u1.png" style={smallImageStyle} alt="" />
                  <Typography
                    sx={{ fontSize: "inherit", marginLeft: "0.25rem" }}
                  >
                    {name}
                  </Typography>
                </TableCell>
                <TableCell>{phone}</TableCell>
                <TableCell>{email}</TableCell>
                <TableCell>{location}</TableCell>
                <TableCell>
                  <Link to="#">
                    <Typography color="primary" sx={{ fontSize: "inherit" }}>
                      Order History
                    </Typography>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  )
}

export default Customers
