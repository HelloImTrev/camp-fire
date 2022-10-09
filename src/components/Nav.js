import { Box, Button } from "@mui/material";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { UserMenu } from "./UserMenu";

export const Nav = () => {
  const { currentUser } = useAuth();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };

  console.log(currentUser);
  return (
    <Box className="nav-bar">
      <Box sx={{ width: "50%", display: "flex" }}>Logo</Box>
      <Box sx={{ width: "50%", display: "flex", justifyContent: "flex-end" }}>
        {currentUser && <UserMenu handleLogout={handleLogout} />}
        {!currentUser && (
          <Link to="/login">
            <Button variant="outlined" color="secondary" disableElevations={true} sx={{marginRight: "1rem"}}>
              Login
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
};
