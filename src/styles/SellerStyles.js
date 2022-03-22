import { createTheme } from "@mui/material/styles"

const Colors = { primary: "#5BC08A" }

const theme = createTheme({
  palette: {
    primary: { main: Colors.primary },
  },
})

export default theme
