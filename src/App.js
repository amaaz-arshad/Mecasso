import theme from "./styles/SellerStyles"
import "./App.css"
import { ThemeProvider } from "@mui/material/styles"
import { Route, Routes } from "react-router-dom"
import SellerLayout from "./layout/SellerLayout"
import Dashboard from "./seller/screens/Dashboard"
import Profile from "./seller/screens/Profile"
import Sales from "./seller/screens/Sales"
import Customers from "./seller/screens/Customers"
import Chat from "./seller/screens/Chat"
import Store from "./seller/screens/store/Store"
import Stores from "./seller/screens/store/Stores"



function App() {
  return (
    <ThemeProvider theme={theme}>
      <SellerLayout>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/stores/:name" element={<Store />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </SellerLayout>
    </ThemeProvider>
  )
}

export default App
