import "./App.css";
import Box from "@mui/material/Box";
import guy from "./image 206.png";
import { ReactComponent as Logo } from "./Logo.svg";
import { Button, CardMedia, Grid, Stack, Typography } from "@mui/material";
import {
  Center,
  Circle,
  GrayText,
  MyBtn,
  Myheader,
  OutinedBox,
} from "./components";
import { Container } from "@mui/system";

import Dot from "./circles";
import Doots from "./circles";
import { useEffect } from "react";
import Diamond from "./diamond";
import School from "./school";
import Pulse from "./pulse";
import logo from "./logo192.png";
function App() {
  const mainColor = "#F28500";
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          // entry.target.classList.remove("show");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    const hiddenElement = document.querySelectorAll(".hidden2");
    const fadeinElement = document.querySelectorAll(".fadeIn");
    const boxElement = document.querySelectorAll(".boxAnimation");
    const shoeElement = document.querySelectorAll(".shoeAnimation");
    hiddenElements.forEach((el) => observer.observe(el));
    hiddenElement.forEach((el) => observer.observe(el));
    fadeinElement.forEach((el) => observer.observe(el));
    boxElement.forEach((el) => observer.observe(el));
    shoeElement.forEach((el) => observer.observe(el));
  }, []);
  return (
    <>
      <Container>
        <Box pt={2}>
          <Myheader>
            <Stack      direction="row" spacing={2}>
              <CardMedia
                sx={{ width: "50px", height: "50px" }}
                component="img"
                image={logo}
                alt="green iguana"
              />
              <Box sx={{ display:"flex", alignItems:"center", justifyContent:"center"}}>
              <Typography sx={{fontWeight:"bold"}}>Fingertipps</Typography>

              </Box>
            
            </Stack>

            <Stack
              mt={2}
              direction="row"
              spacing={2}
              sx={{ display: { lg: "flex", sm: "flex", xs: "none" } }}
            >
              <Typography>About</Typography>
              <Typography>Skills</Typography>
              <Typography>Portfolio</Typography>
              <Typography>Testimonial</Typography>
            </Stack>
            <Button 
              size="small"
              sx={{ border: `1px solid ${mainColor}` }}
              variant="outlined"
            >
              <Typography sx={{ textDecoration: "none", color: "black", fontSize:"10px" }}>
                Dowload CV
              </Typography>
            </Button>
          </Myheader>
        </Box>
        <Box mt={10} p={3}>
          <Grid container>
            <Grid item lg={6} sm={6} className="fadeIn">
              <Stack spacing={3}>
                <Circle maxWidth={61} sx={{ border: `1px solid ${mainColor}` }}>
                  <Typography sx={{ color: mainColor }}>Wecome</Typography>
                </Circle>
                <Typography variant="h2" fontWeight="bold">
                  I have{" "}
                  <span style={{ color: mainColor }}>Creative Design</span>{" "}
                  Experience
                </Typography>
                <GrayText variant="p">
                  I’m Tanvir, a creative Product Designer. I’ve been helping
                  businesses to solve their problems with my design for 2 years.
                </GrayText>

                <Stack direction="row" spacing={3}>
                  <MyBtn
                    p={0.2}
                    pt={1}
                    sx={{
                      backgroundColor: mainColor,
                    }}
                  >
                    <Typography sx={{ color: "white", fontSize: "13px" }}>
                      Contact me
                    </Typography>
                  </MyBtn>

                  {/* <Stack mt={2} direction="row">
                    <Typography>View Porfolio</Typography>
                  </Stack> */}
                </Stack>
                <Doots color={mainColor} />
              </Stack>
            </Grid>
            <Grid item lg={6} sm={6}>
              <Box
                className="hidden"
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <OutinedBox
                  p={2}
                  sx={{
                    width: "250px",
                    height: "250px",
                    position: "relative",
                    // zIndex: "1500"
                  }}
                >
                  <CardMedia
                    className="hidden2"
                    sx={{
                      position: "absolute",
                      top: -91,
                      right: 35,
                      left: 27,
                      zIndex: "1500",
                    }}
                    component="img"
                    image={guy}
                    title="green iguana"
                  />
                  <Box
                    p={2}
                    sx={{
                      backgroundColor: mainColor,
                      width: "250px",
                      height: "250px",
                      position: "absolute",
                      top: -25,
                      right: 30,
                      left: 15,
                      zIndex: "-1500",
                    }}
                  ></Box>
                </OutinedBox>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Grid container spacing={6} className="logo hidden2">
            <Grid item lg={4} xs={4}>
              <Box p={2} >
                <Stack
                  spacing={2}
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: mainColor, fontWeight: "bold" }}
                  >
                    80+
                  </Typography>
                  <Typography>Satisfied client</Typography>
                </Stack>
              </Box>
            </Grid>
            <Grid item lg={4} xs={4} className="logo hidden2">
              <Center
                p={2}
                sx={{
                  borderRight: `1px solid ${mainColor}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderLeft: `1px solid ${mainColor}`
                }}
              >
                <Stack spacing={2} sx={{  }}>
                  <Typography
                    variant="h5"
                    sx={{ color: mainColor, fontWeight: "bold" }}
                  >
                    80+
                  </Typography>
                  <Typography>Satisfied client</Typography>
                </Stack>
              </Center>
            </Grid>
            <Grid item lg={4} xs={4} className="logo hidden2">
              <Box p={2} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Stack
                  spacing={2}
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: mainColor, fontWeight: "bold" }}
                  >
                    80+
                  </Typography>
                  <Typography>Satisfied client</Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box mt={10}>
          <Grid container spacing={2}>
            <Grid item lg={6} xs={12} className="fadeIn">
              <Stack p={3} spacing={2}>
                <Circle maxWidth={61} sx={{ border: `1px solid ${mainColor}` }}>
                  <Typography sx={{ color: mainColor }}>Skills</Typography>
                </Circle>
                <Typography variant="h3" fontWeight="bold">
                  Why Hire Me for Your Next
                  <span style={{ color: mainColor }}> Project</span>
                </Typography>
                <Typography>
                  I’m specialist in UI/UX Designe. My passion is designing &
                  solving problems through user experience and research.
                </Typography>

                <MyBtn
                  p={0.5}
                  pt={1}
                  pb={1}
                  sx={{
                    backgroundColor: mainColor,
                  }}
                >
                  <Typography sx={{ color: "white" }}>Hire me</Typography>
                </MyBtn>
              </Stack>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Box p={3} fullWith>
                <Stack maxWidth={200} className="logo hidden">
                  <Diamond color={mainColor} />
                  <Typography sx={{ fontWeight: "bold" }}>
                    visual Design
                  </Typography>
                  <Typography>
                    Create user interface design with unique & modern ideas
                  </Typography>
                </Stack>
                <Stack className="logo hidden2">
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Stack maxWidth={200}>
                      <Pulse color={mainColor} />

                      <Typography sx={{ fontWeight: "bold" }}>
                        visual Design
                      </Typography>
                      <Typography>
                        Create user interface design with unique & modern ideas
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>

                <Stack maxWidth={200} className="logo hidden2">
                  <School color={mainColor} />
                  <Typography sx={{ fontWeight: "bold" }}>
                    visual Design
                  </Typography>
                  <Typography>
                    Create user interface design with unique & modern ideas
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default App;
