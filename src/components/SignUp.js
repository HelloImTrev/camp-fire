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

export const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfrimRef = useRef();
  const { signUp } = useAuth();
  const [accountInfo, setAccountInfo] = useState({
    email: "",
    password: ".",
    confirmPassword: "",
    passwordsMatch: false,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkPasswords();
  }, [accountInfo.password, accountInfo.confirmPassword, accountInfo.email]);

  const handleClick = async (e) => {
    try {
      setLoading(true);
      await signUp(accountInfo.email, accountInfo.password);
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
      accountInfo.password.length > 5 &&
      accountInfo.password === accountInfo.confirmPassword
    ) {
      emailRef.current.value = accountInfo.email;
      passwordRef.current.value = accountInfo.email;
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
    <Card sx={{ width: "450px" }}>
      <CardContent sx={{ textAlign: "center" }}>
        <Box component="div" sx={{ display: "flex", flexDirection: "column" }}>
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
                  <Button disabled>Create Account</Button>
                )}
              </>
            )}
        </Box>
        <Box>
          <Typography>Already have an account? Sign in</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
