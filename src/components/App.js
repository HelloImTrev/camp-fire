import { Box } from "@mui/material";
import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";
import { Dashboard } from "./Dashboard";
import { Login } from "./Login";
import { Nav } from "./Nav";
import { SignUp } from "./SignUp";
import { Home } from "./Home";
import { ManageProfile } from "./ManageProfile";
import { PrivateRoute } from "./PrivateRoute";
import { CenteredContainer } from "./CenteredContainer";

const App = () => {
  return (
    <Box>
      <AuthProvider>
        <Nav />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Private Routes */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/manageprofile"
            element={
              <PrivateRoute>
                <ManageProfile />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Box>
  );
};

export default App;
