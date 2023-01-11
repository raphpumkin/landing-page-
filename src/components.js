import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const Myheader = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export const Circle = styled(Box)({
  borderRadius: "50%",
});

export const GrayText = styled(Typography)({
  color: "rgb(50, 52, 51)",
});

export const OutinedBox = styled(Box)({
  border: "3px solid black",
});

export const Center = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const MyBtn = styled(Box)({

  width: "100px",
  height: "30px",
  borderRadius:"10px",
  diaplay:"flex",
  justifyContent:"center",
  textAlign:"center",
  alignItems:"center"
})
