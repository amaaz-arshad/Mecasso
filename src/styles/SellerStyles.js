import { createTheme } from "@mui/material/styles"

// colors
const Colors = { primary: "#5BC08A", secondary: "#fff" }

// palette
const theme = createTheme({
  palette: {
    primary: { main: Colors.primary },
    secondary: { main: Colors.secondary },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        disableRipple: true,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: `${Colors.primary} ${Colors.secondary}`,
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: Colors.secondary,
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: Colors.primary,
            minHeight: 24,
            border: `3px solid ${Colors.secondary}`,
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: Colors.primary,
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: Colors.primary,
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: Colors.primary,
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: Colors.secondary,
          },
        },
      },
    },
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
  textDecoration: "none",
}

export const paperStyle = {
  padding: "1rem",
  maxHeight: 290,
  minHeight: 160,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}

// header background
export const whiteBackground = { backgroundColor: "white" }

export const smallImageStyle = {
  width: "3rem",
  height: "3rem",
  backgroundColor: Colors.primary,
  borderRadius: "100%",
  margin: "0.25rem",
}

export default theme
