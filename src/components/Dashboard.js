import { Box, Typography } from "@mui/material";
import React from "react";
import { Folders } from "./Folders";

export const Dashboard = () => {
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <Box
        sx={{ width: "300px", height: "92.5vh", backgroundColor: "lightgray" }}
      ></Box>
      <Box sx={{ marginLeft: "1rem", marginTop: "1rem", height: "100%" }}>
        <Box>
          <Typography variant="campHeading">My CampSite</Typography>
        </Box>
        <Box>
          <Folders />
        </Box>
      </Box>
    </Box>
  );
};
