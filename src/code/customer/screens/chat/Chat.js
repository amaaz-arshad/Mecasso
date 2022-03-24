import React from "react";
import { useState } from "react";
import { Grid, TextField, Avatar, InputAdornment } from "@mui/material";
import "./chat.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import ChatBubbleOutlineRoundedIcon from "@mui/icons-material/ChatBubbleOutlineRounded";
import ChatRoundedIcon from "@mui/icons-material/ChatRounded";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";

function Chat(props) {
  const [displayChat, setDisplayChat] = useState("none");
  const [displayMsg, setDisplayMsg] = useState("none");

  const showMessage = () => {
    console.log("Message showed");
    setDisplayMsg("block");
  };

  const hideMessage = () => {
    console.log("Message hided");
    setDisplayMsg("none");
  };

  const showChat = () => {
    console.log("chat showed");
    setDisplayChat("block");
  };

  const hideChat = () => {
    console.log("chat hided");
    setDisplayChat("none");
    setDisplayMsg("none");
  };

  return (
    <>
      <div onClick={showChat}>
        <Avatar
          sx={{
            bgcolor: "#58b484",
            position: "fixed",
            right: 15,
            bottom: 20,
            cursor: "pointer",
          }}
        >
          {/* <MessageRoundedIcon /> */}
          <ChatRoundedIcon />
        </Avatar>
      </div>

      {/* chats */}

      <div className="chat" style={{ display: displayChat }}>
        <div class="chatcard shadow">
          <div class="cardHeader">
            {/* <Grid container alignItems="center" justifyContent="space-between">
              <Grid item container alignItems="center">
                <Avatar sx={{ bgcolor: "skyblue", marginRight: 2 }}>A</Avatar>
                <Grid>
                  <span>
                    <b>Messages</b>
                  </span>
                </Grid>
              </Grid>
              <Grid item>
                <CloseRoundedIcon />
              </Grid>
            </Grid> */}
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid>
                <b>Messages</b>
              </Grid>
              <Grid>
                <CloseRoundedIcon
                  sx={{ cursor: "pointer" }}
                  onClick={hideChat}
                />
              </Grid>
            </Grid>
          </div>
          <div class="cardBody">
            <Grid marginBottom={3}>
              <TextField
                fullWidth
                label="Search"
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <div onClick={showMessage} className="msgBlock">
              <Grid container alignItems="center">
                <Avatar sx={{ bgcolor: "green", marginRight: 2 }}>S</Avatar>
                <Grid>
                  <div className="name">Name</div>
                  <div className="msg">This is my message</div>
                </Grid>
              </Grid>
            </div>

            <hr />

            <Grid container alignItems="center">
              <Avatar sx={{ bgcolor: "purple", marginRight: 2 }}>M</Avatar>
              <Grid>
                <div className="name">Name</div>
                <div className="msg">This is my message</div>
              </Grid>
            </Grid>

            <hr />

            <Grid container alignItems="center">
              <Avatar sx={{ bgcolor: "chocolate", marginRight: 2 }}>T</Avatar>
              <Grid>
                <div className="name">Name</div>
                <div className="msg">This is my message</div>
              </Grid>
            </Grid>

            <hr />

            <Grid container alignItems="center">
              <Avatar sx={{ bgcolor: "#58b484", marginRight: 2 }}>A</Avatar>
              <Grid>
                <div className="name">Name</div>
                <div className="msg">This is my message</div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

      {/* personal message block */}

      <div className="messaging" style={{ display: displayMsg }}>
        <div class="card shadow-lg">
          <div class="cardHeader">
            <Grid container alignItems="center" justifyContent="sp">
              <Avatar sx={{ bgcolor: "green", marginRight: 2 }}>S</Avatar>
              <Grid>
                <span>
                  <b>John Doe</b>
                </span>
              </Grid>
              <Grid style={{ position: "absolute", right: 15 }}>
                <CloseRoundedIcon
                  sx={{ cursor: "pointer" }}
                  onClick={hideMessage}
                />
              </Grid>
            </Grid>
          </div>
          <div class="msgCardBody">
            <div className="messages-section">
              <div className="seller">
                <div className="my-3">
                  <span className="sellerMsg shadow-sm">
                    This is my message
                  </span>
                </div>
                <div className="my-3">
                  <span className="sellerMsg shadow-sm">
                    Lorem Ipsum is simply dummy text of the printing.{" "}
                  </span>
                </div>
              </div>

              <div className="customer">
                <div className="my-3">
                  <span className="customerMsg shadow-sm">Ok sure</span>
                </div>
                <div className="my-3">
                  <span className="customerMsg shadow-sm">I will do that</span>
                </div>
              </div>

              <div className="seller">
                <div className="my-3">
                  <span className="sellerMsg shadow-sm">Thanks alot</span>
                </div>
              </div>
            </div>
            <div className="msg-group-input">
              <div style={{ width: "100%" }}>
                <input
                  className="msgInput shadow-sm"
                  type="text"
                  placeholder="Type message here..."
                />
              </div>
              <div className="search-btn">
                <BsFillArrowRightCircleFill
                  style={{ fontSize: "28px", color: "#58b484" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
