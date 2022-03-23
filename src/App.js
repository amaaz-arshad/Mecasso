import Dashboard from "./screens/seller/dashboard/Dashboard"
import theme from "./styles/SellerStyles"
import {ThemeProvider } from "@mui/material/styles"


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  )
}

export default App
