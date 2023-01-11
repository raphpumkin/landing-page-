import { Box } from "@mui/material";
import React from "react";
import { Circle } from "./components";

const Doots = ({color}) => {
  return (
    <>
      <Box  sx={{ position: "relative" }}>
        <Circle
          
          sx={{
            position: "absolute",
            width: "15px",
            height: "15px",
            backgroundColor:color,
            top: -400,
            right: 30,
            left: 200,
            zIndex: "-1500",
          }}
        />
        <Circle
          sx={{
            position: "absolute",
            width: "30px",
            height: "30px",
            backgroundColor:color,
            top: -200,
            right: -30,
            left: -100,
            zIndex: "-1500",
          }}
        />
        <Box >
        <Circle
          sx={{
            position: "absolute",
            width: "20px",
            height: "20px",
            backgroundColor:color,
            top: 25,
            right: 30,
            left: -30,
            zIndex: "-1500",
          }}
        />

        <Circle
          sx={{
            position: "absolute",
            width: "15px",
            height: "15px",
            backgroundColor:color,
            top: 25,
            right: 30,
            left: 200,
            zIndex: "-1500",
          }}
        />
        <Circle
    
          sx={{
            position: "absolute",
            width: "5px",
            height: "5px",
            backgroundColor:color,
            top: -25,
            right: 30,
            left: 300,
            zIndex: "-1500",
          }}
        />
        <Circle
          sx={{
            position: "absolute",
            width: "10px",
            height: "10px",
            backgroundColor:color,
            top: 25,
            right: 30,
            left: -30,
            zIndex: "-1500",
          }}
        />
        </Box>

        <Circle
          sx={{
            position: "absolute",
            width: "20px",
            height: "20px",
            backgroundColor:color,
            top: 25,
            right: 30,
            left: 300,
            zIndex: "-1500",
          }}
        />

        <Circle
          sx={{
            position: "absolute",
            width: "15px",
            height: "15px",
            backgroundColor:color,
            top: 25,
            right: 30,
            left: 300,
            zIndex: "-1500",
          }}
        />
        <Circle
          sx={{
            position: "absolute",
            width: "5px",
            height: "5px",
            backgroundColor:color,
            top: -25,
            right: 30,
            left:60,
            zIndex: "-1500",
          }}
        />
        <Circle
          sx={{
            position: "absolute",
            width: "10px",
            height: "10px",
            backgroundColor:color,
            top: -245,
            right: 30,
            left: 300,
            zIndex: "-1500",
          }}
        />
     
      </Box>
    </>
  );
};

export default Doots;
