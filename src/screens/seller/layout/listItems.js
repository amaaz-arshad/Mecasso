import * as React from "react"
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
import theme from "../../../styles/SellerStyles"

const sidebarMenu = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "Profile", icon: <PeopleIcon /> },
  { text: "Sales", icon: <AccountBalanceWalletIcon /> },
  { text: "Stores", icon: <StoreMallDirectoryIcon /> },
  { text: "Customers", icon: <SupervisedUserCircleIcon /> },
  { text: "Chat", icon: <ChatIcon /> },
]

export const mainListItems = (
  <React.Fragment>
    <ThemeProvider theme={theme}>
      {sidebarMenu.map(({ text, icon }, index) => (
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      ))}
    </ThemeProvider>
  </React.Fragment>
)
