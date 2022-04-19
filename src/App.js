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
import ChatUser from "./seller/screens/ChatUser"
import AddStore from "./seller/screens/AddStore"
import AddProduct from "./seller/screens/AddProduct"
import EditProduct from "./seller/screens/EditProduct"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SellerLayout>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="sales" element={<Sales />} />
          <Route path="stores" element={<Stores />} />
          <Route path="addStore" element={<AddStore />} />
          <Route path="addProduct" element={<AddProduct />}/>
          <Route path="editProduct" element={<EditProduct />}/>
          <Route path="stores/:name" element={<Store />} />
          <Route path="customers" element={<Customers />} />
          <Route path="chat" element={<Chat />}>
            <Route path=":name" element={<ChatUser />} />
          </Route>
        </Routes>
      </SellerLayout>
    </ThemeProvider>
  )
}

export default App
