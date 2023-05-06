import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Typography } from "@mui/material";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";
import Image from "next/image";

export default function Swiper2() {
  return (
    <>
      <Swiper
        autoplay={true}
        loop={true}
        slidesPerView={4}
        spaceBetween={30}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper .swiper-wrapper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
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
                  style={{ objectFit: "cover" }}
                  src={item.logo}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
              </Box>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <Swiper
        style={{ marginTop: "20px" }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={4}
        spaceBetween={30}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
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
                  style={{ objectFit: "cover" }}
                  src={item.img}
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />
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
    img: require("../../assets/1.png"),
    logo: require("../../assets/partner1.png"),
  },
  {
    id: 2,
    img: require("../../assets/2.png"),
    logo: require("../../assets/partner2.png"),
  },
  {
    id: 3,
    img: require("../../assets/3.png"),
    logo: require("../../assets/partner3.png"),
  },
  {
    id: 4,
    img: require("../../assets/4.png"),
    logo: require("../../assets/partner4.png"),
  },
  {
    id: 5,
    img: require("../../assets/1.png"),
    logo: require("../../assets/partner1.png"),
  },
];
