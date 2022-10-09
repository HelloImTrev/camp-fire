import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  TextField,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfrimRef = useRef();
  const { signUp, setDisplayName } = useAuth();
  const [accountInfo, setAccountInfo] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: ".",
    confirmPassword: "",
    passwordsMatch: false,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkPasswords();
  }, [
    accountInfo.password,
    accountInfo.confirmPassword,
    accountInfo.email,
    accountInfo.firstName,
    accountInfo.lastName,
  ]);

  const handleClick = async (e) => {
    try {
      setLoading(true);
      await signUp(accountInfo.email, accountInfo.password);
      await setDisplayName(accountInfo.firstName, accountInfo.lastName);
    } catch (e) {
      console.log(e);
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    setAccountInfo({
      ...accountInfo,
      [e.target.name]: e.target.value,
    });
  };

  const checkPasswords = () => {
    if (
      accountInfo.email &&
      accountInfo.firstName &&
      accountInfo.lastName &&
      accountInfo.password.length > 5 &&
      accountInfo.password === accountInfo.confirmPassword
    ) {
      setAccountInfo({
        ...accountInfo,
        passwordsMatch: true,
      });
    } else {
      setAccountInfo({
        ...accountInfo,
        passwordsMatch: false,
      });
    }
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
            <h1>Sign up</h1>
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
              name="firstName"
              className="signup-field"
              label="First Name"
              variant="outlined"
              type="text"
              onChange={handleChange}
              
            />
            <TextField
              name="lastName"
              className="signup-field"
              label="Last Name"
              variant="outlined"
              type="text"
              onChange={handleChange}
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
            <TextField
              name="confirmPassword"
              className="signup-field"
              label="Confirm Password"
              variant="outlined"
              type="password"
              onChange={handleChange}
              ref={passwordConfrimRef}
            />
            {accountInfo.passwordsMatch ? (
              <Button type="button" variant="contained" onClick={handleClick}>
                Create Account
              </Button>
            ) : (
              <>
                {loading ? (
                  <LoadingButton loading variant="contained">
                    Submit
                  </LoadingButton>
                ) : (
                  <Button variant="contained" disabled>
                    Create Account
                  </Button>
                )}
              </>
            )}
          </Box>
        </CardContent>
      </Card>
      <Box sx={{ marginTop: "1rem" }}>
        <Typography>
          Already have an account? <Link to="/login" style={{textDecoration:"underline"}}>Sign in</Link>
        </Typography>
      </Box>
    </Box>
  );
};
