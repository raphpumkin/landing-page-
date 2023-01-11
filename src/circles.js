import { Box } from "@mui/material";
import React from "react";
import { Circle } from "./components";

const Doots = () => {
  return (
    <>
      <Box  sx={{ position: "relative" }}>
        <Circle
          
          sx={{
            position: "absolute",
            width: "15px",
            height: "15px",
            backgroundColor: "#0DB760",
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
            backgroundColor: "#0DB760",
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
            backgroundColor: "#0DB760",
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
            backgroundColor: "#0DB760",
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
            backgroundColor: "#FF0000",
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
            backgroundColor: "#0DB760",
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
            backgroundColor: "#0DB760",
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
            backgroundColor: "#0DB760",
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
            backgroundColor: "#0DB760",
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
            backgroundColor: "#0047FF",
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
