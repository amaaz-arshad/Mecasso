import React from 'react'
import SellerLayout from "../layout/SellerLayout"
import Container from "@mui/material/Container"

const Store = () => {
  return (
    <SellerLayout>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        store
      </Container>
    </SellerLayout>
  )
}

export default Store