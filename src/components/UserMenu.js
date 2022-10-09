import { Button, Menu, MenuItem, IconButton, Box } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import React from "react";
import { Link } from "react-router-dom";

export const UserMenu = ({ handleLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{marginRight: "1rem"}}>
      <IconButton
        id="account-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        color="secondary"
        onClick={handleClick}
      >
        <AccountBoxIcon fontSize="inherit" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link to="/manageprofile"><MenuItem onClick={handleClose}>Manage Profile</MenuItem></Link>
        <Link to="/dashboard"><MenuItem onClick={handleClose}>Dashboard</MenuItem></Link>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
};
