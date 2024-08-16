import { Menu, MenuItem } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import "./NavBar.css";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleProfileClick = () => {
    navigate("/profile");
    handleMenuClose();
  };
  const handleLogoutClick = () => {
    logout();
    navigate("/");
    handleMenuClose();
  };
  return (
    <nav className="navbar">
      <Link to="/home" className="logoLink">
        <div className="logo">MedScape</div>
      </Link>
      <ul className="navLinks">
        <Link to="/home" className="navLink">
          <li className="navItem">Home</li>
        </Link>
        <Link to="/finddoctor" className="navLink">
          <li className="navItem">FindDoctors</li>
        </Link>
        <Link to="/bot" className="navLink">
          <li className="navItem">Med-Bot</li>
        </Link>
        <Link to="/donation" className="navLink">
          <li className="navItem">Donation</li>
        </Link>
        {user ? (
          <li className="navItem" onClick={handleMenuClick}>
            Hello {user} 👋
          </li>
        ) : (
          <Link to="/login" className="navLink">
            <li className="navItem">Sign In</li>
          </Link>
        )}
      </ul>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
    </nav>
  );
};
export default Navbar;