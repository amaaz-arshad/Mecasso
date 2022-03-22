import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../customer/screens/login_signup/Login";
import Signup from "../customer/screens/login_signup/Signup";
import Contact from "../customer/screens/contact/Contact";
import Home from "../customer/screens/home/Home";
import Header from "../customer/sharedComponents/header/Header";
import Stores from "../customer/screens/stores/Stores";
import Footer from "../customer/sharedComponents/footer/Footer";
import Authentication from "../customer/screens/authentication/Authentication";

function Navigation(props) {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/authentication" element={<Authentication />} />
      </Routes>
    </>
  );
}

export default Navigation;
