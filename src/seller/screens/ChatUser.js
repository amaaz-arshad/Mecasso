import React from "react"
import { useParams } from "react-router-dom"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import SendIcon from "@mui/icons-material/Send"
import Button from "@mui/material/Button"
import {
  chatCustomerMessageStyle,
  chatSellerMessageStyle,
} from "../../styles/SellerStyles"

const ChatUser = () => {
  const { name } = useParams()
  const chatMessage = [
    { id: 1, name: "Elza", message: "Hello" },
    { id: 2, name: "u", message: "Hello asdjasd asjdkhsd adnjashdu" },
    { id: 3, name: "u", message: "Hello" },
    {
      id: 4,
      name: "Elza",
      message:
        "Helloasdk asdjmkokok kpokkpk kok sfdasnfkjdadsd asdfnaskjfjaskf sdaskjd kokpokok oadjisd ",
    },
    {
      id: 5,
      name: "Elza",
      message: "Hellosadaskjjdoia  asdjoisjd ijsdjaisjda",
    },
    { id: 6, name: "u", message: "Helloasdasc adad a af f sdf  fs" },
    {
      id: 7,
      name: "u",
      message: "Helloasdasc adad a af f sfasfafc dADA SFDHG sdf  fs",
    },
    {
      id: 8,
      name: "Elza",
      message: "Hellosfa ew dq fsdsfasf sdfgs q d fffffs "
    },
    { id: 9, name: "u", message: "Helloasdasc adad a af f sfasfafc dADA SFDHG sdf  fs" },
    { id: 10, name: "u", message: "Helloasdasc adad a af f sfasfafc dADA SFDHG sdf  fs" },
    { id: 11, name: "Elza", message: "Helloasdasc adad a af f sfasfafc dADA SFDHG sdf  fs" },
  ]
  return (
    <Paper>
      <Paper sx={{ display: "flex", alignItems: "center" }}>
        <img src="/u1.png" alt="" style={{ margin: "0.75rem" }} />
        <Typography variant="h6">{name}</Typography>
      </Paper>
      <Box height={600} overflow="auto" p={3}>
        {chatMessage.map(({ id, name, message }) => (
          <>
            {name === "u" ? (
              <Box sx={chatSellerMessageStyle}>{message}</Box>
            ) : (
              <Box sx={chatCustomerMessageStyle}>{message}</Box>
            )}
          </>
        ))}
      </Box>
      <Paper sx={{ display: "flex", alignItems: "center", padding: "0.75rem" }}>
        <TextField
          fullWidth
          id="outlined-basic"
          // label="Search Chat"
          placeholder="Type a message..."
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ borderRadius: "100%", height: "4rem", margin: 1 }}
        >
          <SendIcon color="secondary" />
        </Button>
      </Paper>
    </Paper>
  )
}

export default ChatUser
