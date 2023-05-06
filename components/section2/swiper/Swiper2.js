import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography } from "@mui/material";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import Image from "next/image";

export default function Swiper2() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1300: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
      >
        {data.map((item, index) => (
          <div key={item.id}>
            <SwiperSlide>
              <Box
                key={`item-${index}`}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Image
                  className="container"
                  style={{ objectFit: "cover", borderRadius: "34px" }}
                  src={item.img}
                  width={360}
                  height={490}
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
                      display: "flex",
                      gap: 1,
                      position: "absolute",
                      top: 50,
                      left: "25%",
                      
                      width: 250,
                      lineHeight: 1,
                    }}
                  >
                    <Image
                      src={require("../../../assets/logo.png")}
                      alt="Made in HumoX"
                      sizes="(max-width: 768px) 90vw,
              (max-width: 1200px) 30vw,
              30vw"
                    />
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        lineHeight: "25px",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      REIWA
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 350,
                      left: "25%",
                      width: 250,
                      lineHeight: 1,
                      width: 100,
                    }}
                  >
                    <Typography variant="h5">Abdurasul Mamadaliyev</Typography>
                  </Box>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 420,
                      left: "25%",
                      width: 250,
                      lineHeight: 1,
                      width: 200,
                    }}
                  >
                    <Typography variant="body1">
                      Japanese digital univerities`s student
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </>
  );
}

const data = [
  {
    id: 1,
    img: require("../../../assets/swiper1.png"),
    logo: require("../../../assets/logo.png"),
  },
  {
    id: 2,
    img: require("../../../assets/swiper2.png"),
    logo: require("../../../assets/logo.png"),
  },
  {
    id: 3,
    img: require("../../../assets/swiper3.png"),
    logo: require("../../../assets/logo.png"),
  },
  {
    id: 4,
    img: require("../../../assets/swiper4.png"),
    logo: require("../../../assets/logo.png"),
  },
  {
    id: 5,
    img: require("../../../assets/swiper4.png"),
    logo: require("../../../assets/logo.png"),
  },
  {
    id: 6,
    img: require("../../../assets/swiper4.png"),
    logo: require("../../../assets/logo.png"),
  },
];
