import { Box, TextField, Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../Context/AuthContext";

export const UpdatePassword = () => {
  const passwordRef = useRef();
  const confirmRef = useRef();
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
    passwordsMatch: false,
  });
  const { changePassword } = useAuth();

  useEffect(() => {
    checkPasswords();
  }, [password.password, password.confirmPassword]);

  const checkPasswords = () => {
    if (
      password.password.length > 5 &&
      password.password === password.confirmPassword
    ) {
      setPassword({
        ...password,
        passwordsMatch: true,
      });
    } else {
      setPassword({
        ...password,
        passwordsMatch: false,
      });
    }
  };

  const handleChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async () => {
    try {
      await changePassword(password.password);
    } catch (e) {
      console.log(e);
    }

    setPassword({
      password: "",
      confirmPassword: "",
      passwordsMatch: false,
    });
  };

  return (
    <Box>
      <h1>Change Password</h1>

      <TextField
        name="password"
        className="signup-field"
        label="Password"
        variant="outlined"
        type="password"
        value={password.password}
        onChange={handleChange}
        ref={passwordRef}
      />
      <TextField
        name="confirmPassword"
        className="signup-field"
        label="Confirm Password"
        variant="outlined"
        type="password"
        value={password.confirmPassword}
        onChange={handleChange}
        ref={confirmRef}
      />
      {password.passwordsMatch ? (
        <Button type="button" variant="contained" onClick={handleClick}>
          Save Password
        </Button>
      ) : (
        <Button variant="contained" disabled>
          Save Password
        </Button>
      )}
    </Box>
  );
};
