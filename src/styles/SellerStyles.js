import { createTheme } from "@mui/material/styles"

// colors
const Colors = {
  primary: "#5BC08A",
  lightPrimary: "#EEFFF3",
  secondary: "#fff",
  lightGrey: "#E1E1E1",
  grey: "#A1A1A1",
  extraLightGrey: "#F2F2F2",
}

// palette
const theme = createTheme({
  palette: {
    primary: { main: Colors.primary,light:Colors.lightPrimary },
    secondary: { main: Colors.secondary },
    grey: { main: Colors.grey, light: Colors.lightGrey , extraLight: Colors.extraLightGrey},
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

// customer chat message: 
export const chatCustomerMessageStyle = {
  backgroundColor: "grey.extraLight",
  borderRadius: "0.5rem",
  marginY: "1rem",
  padding: "1rem",
  width: "max-content",
  maxWidth: "70%"
}

export const chatSellerMessageStyle = {
  backgroundColor: "primary.light",
  borderRadius: "0.5rem",
  marginY: "1rem",
  marginLeft: "auto",
  marginRight: "0",
  padding: "1rem",
  width: "max-content",
  maxWidth: "70%"
}

export default theme
