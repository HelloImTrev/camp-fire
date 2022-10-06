import { Box } from "@mui/material";
import React from "react";
import { Router, Route, Routes,  } from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";
import { Login } from "./Login";
import { SignUp } from "./SignUp";

const App = () => {
  return (
    <Box>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </AuthProvider>
    </Box>
  );
};

export default App;
