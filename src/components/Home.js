import { Box, Typography } from "@mui/material";
import React from "react";
import camp from "../images/camp.gif";
import campNight from "../images/camp-night.gif";

export const Home = () => {
  return (
    <Box sx={{display:"block"}}>
      <Box sx={{display:"flex",justifyContent:"flex-start", width:"100%"}}>
        <Box sx={{backgroundColor: "#b9d9e8", height:"450px", width:"50%", zIndex:"1"}}>
          <Typography >
            Welcome to CampFire!
          </Typography>
        </Box>
        <Box className="title-box" sx={{zIndex:"0"}}>
          <img src={camp} style={{scale:"100%"}}/>
        </Box>
      </Box>
    </Box>
  );
};
