import React from "react";
import { Box } from "@mui/material";

export const CenteredContainer = ({ children }) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column" }}
    >
      {children}
    </Box>
  );
};
