import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function Header() {
  return (
    <>
      <div className="shadow-sm">
        <div className="header container">
          <div>
            <h2 className="logo">MECASSO</h2>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/stores">Stores</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/authentication">Auth</Link>
              </li>
            </ul>
          </div>
          <div>
            <Link to="/login" className="navicons">
              <PersonOutlineOutlinedIcon
                sx={{ fontSize: "30px", marginRight: 1 }}
              />
            </Link>
            <Link to="/cart" className="navicons">
              <ShoppingCartOutlinedIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
