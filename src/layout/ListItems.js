import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import DashboardIcon from "@mui/icons-material/Dashboard"
import PeopleIcon from "@mui/icons-material/People"
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle"
import StoreMallDirectoryIcon from "@mui/icons-material/StoreMallDirectory"
import ChatIcon from "@mui/icons-material/Chat"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"
import { ThemeProvider } from "@mui/material"
import theme, {
  iconStyle,
  iconStyleSelected,
  menuBackground,
} from "../styles/SellerStyles"
import { useState } from "react"
import { Link } from "react-router-dom"

const sidebarMenu = [
  { text: "Dashboard", icon: <DashboardIcon />, url: "" },
  { text: "Profile", icon: <PeopleIcon />, url: "profile" },
  { text: "Sales", icon: <AccountBalanceWalletIcon />, url: "sales" },
  { text: "Stores", icon: <StoreMallDirectoryIcon />, url: "stores" },
  { text: "Customers", icon: <SupervisedUserCircleIcon />, url: "customers" },
  { text: "Chat", icon: <ChatIcon />, url: "chat" },
]
const ListItems = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <ThemeProvider theme={theme}>
      {sidebarMenu.map(({ text, icon, url }, index) => (
        <Link to={url}>
          <ListItemButton
            key={index}
            sx={[
              { margin: "0.5rem", borderRadius: "0.5rem" },
              selectedIndex === index && menuBackground,
            ]}
            onClick={() => setSelectedIndex(index)}
          >
            <ListItemIcon
              sx={selectedIndex === index ? iconStyleSelected : iconStyle}
            >
              {icon}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </Link>
      ))}
    </ThemeProvider>
  )
}

export default ListItems
