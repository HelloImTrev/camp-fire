import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  TextField,
  Alert,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [accountInfo, setAccountInfo] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {}, [accountInfo.password, accountInfo.email]);

  const handleClick = async (e) => {
    try {
      setError(false);
      await login(accountInfo.email, accountInfo.password);
      navigate("/dashboard");
    } catch (e) {
      setError(true);
    }
  };

  const handleChange = (e) => {
    setAccountInfo({
      ...accountInfo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Card sx={{ width: "450px" }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Box
            component="div"
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <h1>login</h1>
            {error && (
              <Alert severity="error" sx={{ marginBottom: "1rem" }}>
                Invalid username or password
              </Alert>
            )}
            <TextField
              name="email"
              className="signup-field"
              label="Email"
              variant="outlined"
              type="email"
              onChange={handleChange}
              ref={emailRef}
            />
            <TextField
              name="password"
              className="signup-field"
              label="Password"
              variant="outlined"
              type="password"
              onChange={handleChange}
              ref={passwordRef}
            />

            <Button
              type="button"
              disableElevation={true}
              variant="contained"
              onClick={handleClick}
            >
              Login
            </Button>
          </Box>
        </CardContent>
      </Card>
      <Box>
        <Typography sx={{ marginTop: "1rem" }}>
          Don't have an account?{" "}
          <Link to="/signup" style={{ textDecoration: "underline" }}>
            Sign up
          </Link>{" "}
           | <Link style={{ textDecoration: "underline" }}>Forgot Password</Link>
        </Typography>
      </Box>
    </Box>
  );
};
