import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import logo from "../../images/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <AppBar position="static" className="app-bar">
      <Toolbar>
        <img src={logo} alt="Company Logo" />
        {/* <Typography variant="h6" className="header-title">
          EMPLOYEE DASHBOARD
        </Typography> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
