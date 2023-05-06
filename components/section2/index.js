import styled from "@emotion/styled";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Swiper2 from "./swiper/Swiper2";
const OutlinedButton = styled(Button)(({ theme }) => ({
  color: "#FFF",
  borderRadius: "50px",
  padding: "10px 10px",
  width: "125px",
  border: "1px solid #FFF",
  "&:hover": {
    border: "1px solid #FFF",
  },
  right: "10px",
}));
const FilledButton = styled(Button)(({ theme }) => ({
  color: "#000",
  borderRadius: "50px",
  width: "125px",
  backgroundColor: "#fff",
  padding: "10px 10px",
  marginLeft: 0,
  "&:hover": {
    backgroundColor: "#fff",
  },
  left: "10px",
}));

export default function Section2() {
  return (
    <Container maxWidth="xxl">
      <Box sx={{ mt: 7 }}>
        <Typography
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            maxWidth: 600,
            m: "auto",
            typography: { md: "h2", sm: "h4", xs: "h5" },
          }}
        >
          You have a chance start with us
        </Typography>
        <Typography
          sx={{
            opacity: ".5",
            maxWidth: 500,
            m: "auto",
            textAlign: "center",
            pt: 1,
          }}
          variant="body2"
        >
          Located in the heart of Tampere in the Tulli business area, Platform6
          opened its doors in October 2020 and it will be home to more than 50
          resident startups and a natural meeting place for the startup
          community.
        </Typography>
        <Box>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
          >
            {data.map((item) => (
              <>
                <Grid
                  key={item.id}
                  sx={{
                    m: 3,
                    p: 3,
                    width: "280px",
                    height: "280px",
                    backgroundColor: "#F5F7F9",
                    borderRadius: "34px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    src={item.logo}
                    width={55}
                    height={55}
                    alt="Picture of the author"
                  />
                  <Typography
                    sx={{
                      fontWeight: 800,
                      textAlign: "center",
                      maxWidth: 600,
                      pt: 2,
                    }}
                    variant="h5"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      opacity: ".8",
                      textAlign: "center",
                      maxWidth: 600,
                      pt: 0.5,
                    }}
                    variant="body1"
                  >
                    {item.comment}
                  </Typography>
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              maxWidth: 600,
              m: "auto",
              typography: { md: "h2", sm: "h4", xs: "h5" },
            }}
          >
            You have a chance start with us
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {data2.map((item, index) => {
              return (
                <Grid
                  key={`item-${index}`}
                  className="container"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 0,
                    height: "100%",
                    borderRadius: "34px",
                    padding: "20px",
                  }}
                >
                  <Image
                    src={item.backgroundImage}
                    width={320}
                    height={320}
                    alt="Picture of the author"
                  />
                  <Box
                    className="overlay"
                    sx={{
                      p: 0,
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Box
                      sx={{
                        background: "rgba(255, 255, 255, 0.3)",
                        backdropFilter: "blur(32px)",
                        borderRadius: "125px",
                        padding: "5px 10px",
                        position: "absolute",
                        width: "160px",
                        top: 30,
                        left: 30,
                      }}
                    >
                      <Typography variant="body2">
                        5 month 1000$ dollar
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        top: 80,
                        left: 30,
                        width: 250,
                        lineHeight: 1,
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 600,
                          lineHeight: "25px",
                          order: 1,
                          fontFamily: "'Poppins', sans-serif",
                        }}
                      >
                        Individual lessons with each child
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        position: "absolute",
                        top: 280,
                        left: 55,
                        width: 250,
                        lineHeight: 1,
                      }}
                    >
                      <OutlinedButton variant="outlined">
                        Darsga yozilish
                      </OutlinedButton>
                      <FilledButton variant="contained">Video</FilledButton>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Box>
          <Typography variant="h3" sx={{ textAlign: "center", mt: 5, mb: 4 }}>
            Happy students with us
          </Typography>
          <Swiper2 />
        </Box>
        <Box>
          <Typography
            variant="h3"
            sx={{
              pt: 7,
              pb: 3,
              textAlign: "center",
              width: { xs: 300, sm: 400 },
              m: "auto",
            }}
          >
            Reiwa Information about lessons
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {data3.map((item) => (
              <>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    width={300}
                    height={300}
                    style={{ objectFit: "cover" }}
                    alt=""
                    src={item.img}
                  />
                </Grid>
              </>
            ))}
          </Grid>
          <Typography
            sx={{
              color: "#D10700",
              textAlign: "center",
              pt: 8,
              textDecoration: "underline",
            }}
          >
            Barchasini ko`rish
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

const data = [
  {
    id: 1,
    logo: require("../../assets/redLogo1.png"),
    title: "Totally asynx",
    comment:
      "Don't like meetings. We don't either so that we've outlawed them completely",
  },
  {
    id: 2,
    logo: require("../../assets/redLogo2.png"),
    title: "TAll in active collab",
    comment:
      "Don't like meetings. We don't either so that we've outlawed them completely",
  },
  {
    id: 3,
    logo: require("../../assets/redLogo3.png"),
    title: "Want to become",
    comment:
      "Don't like meetings. We don't either so that we've outlawed them completely",
  },
  {
    id: 4,
    logo: require("../../assets/redLogo4.png"),
    title: "Start organizing your",
    comment:
      "Don't like meetings. We don't either so that we've outlawed them completely",
  },
];
const data2 = [
  {
    id: 1,

    backgroundImage: require("../../assets/img1.png"),
  },
  {
    id: 2,

    backgroundImage: require("../../assets/img2.png"),
  },
  {
    id: 3,

    backgroundImage: require("../../assets/img3.png"),
  },
  {
    id: 4,

    backgroundImage: require("../../assets/img4.png"),
  },
  {
    id: 5,

    backgroundImage: require("../../assets/img5.png"),
  },
];
const data3 = [
  {
    id: 1,
    img: require("../../assets/passport.png"),
  },
  {
    id: 2,
    img: require("../../assets/passport.png"),
  },
  {
    id: 3,
    img: require("../../assets/passport.png"),
  },
  {
    id: 4,
    img: require("../../assets/passport.png"),
  },
  {
    id: 5,
    img: require("../../assets/passport.png"),
  },
  {
    id: 6,
    img: require("../../assets/passport.png"),
  },
];
