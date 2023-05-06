import React from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Swipers from "../swiper";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});
export default function Section() {
  return (
    <>
      <Container>
        <Box sx={{ mt: 5 }}>
          <Typography
          
            sx={{
              fontWeight: 800,
              textAlign: "center",
              maxWidth: 800,
              m: "auto",
              typography: { md: 'h2', sm: 'h4', xs:"h5" }
            }}
          >
            Do you like Japanese educational center?
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              maxWidth: 500,
              m: "auto",
              pt: 1.5,
              pb: 4,
            }}
          >
            Hueman Studio is an award-winning studio that combines strategy,
            positioning, and people-centered design to create powerful brands,
            websites, and visuals that engage your audience and help you grow.
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderRadius="15px"
          >
            <ReactPlayer controls url="https://youtu.be/qmN1Gf8rRc8" />
          </Box>
        </Box>
        <Box>
          <Typography
            
            sx={{
              fontWeight: 800,
              textAlign: "center",
              maxWidth: 600,
              m: "auto",
              pt: 5,
              typography: { md: 'h2', sm: 'h4', xs:"h5" }
            }}
          >
            We’re the digital marketing team at Wednesday.
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Swipers />
          </Box>
        </Box>
      </Container>
    </>
  );
}
