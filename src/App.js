import Dashboard from "./screens/seller/dashboard/Dashboard"
import theme from "./styles/SellerStyles"
import { ThemeProvider } from "@mui/material/styles"
import { Route, Routes } from "react-router-dom"
import Profile from "./screens/seller/profile/Profile"
import Sales from "./screens/seller/sales/Sales"
import Stores from "./screens/seller/store/Stores"
import Customers from "./screens/seller/customers/Customers"
import Chat from "./screens/seller/chat/Chat"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App
