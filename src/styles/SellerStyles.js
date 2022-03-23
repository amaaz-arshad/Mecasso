import { createTheme } from "@mui/material/styles"

// colors
const Colors = { primary: "#5BC08A", secondary: "#fff" }

// palette
const theme = createTheme({
  palette: {
    primary: { main: Colors.primary },
    secondary: { main: Colors.secondary },
  },
})

// icons style in side bar
export const iconStyle = {
  color: Colors.primary,
}

// selected icon style
export const iconStyleSelected = { color: Colors.secondary }

// background of selected item in sidebar
export const menuBackground = {
  backgroundColor: Colors.primary,
  color: Colors.secondary,
}

export const paperStyle = { padding: "1rem", maxHeight:290,minHeight:160,display: "flex",flexDirection: "column", justifyContent: "space-between" }

export const whiteBackground = { backgroundColor: Colors.secondary }

export const smallImageStyle = {
  width: "1rem", height: "1rem", backgroundColor: Colors.primary,borderRadius:"100%"}

export default theme
