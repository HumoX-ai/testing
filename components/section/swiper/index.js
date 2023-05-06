import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css";
import { FreeMode, Pagination } from "swiper";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";


const ColorButton = styled(Button)(({ theme }) => ({
  color: "#000000",
  borderRadius: "50px",
  border: "1px solid #000000",
  width: "100%",
}));

export default function Swipers() {
  return (
    <div>
      <Swiper
        slidesPerView={3}
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
            spaceBetween: 30,
          },
        }}
      >
        {data.map((item) => (
          <div key={item.id}>
            <SwiperSlide>
              <Card
                sx={{ maxWidth: 345 }}
                style={{ border: "none", boxShadow: "none" }}
              >
                <CardMedia
                  sx={{ height: 280 }}
                  style={{ borderRadius: "30px" }}
                  image={item.img}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Subscribe and get your personal Trello board for the tasks.
                  </Typography>
                </CardContent>
                <CardActions>
                  <ColorButton>View more</ColorButton>
                </CardActions>
              </Card>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
}

const data = [
  {
    id: 1,
    img: "https://plus.unsplash.com/premium_photo-1661887296283-2c481abe778c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8amFwYW4lMjBuYXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    title: "In Winter",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1590212799463-4edf3611a768?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGphcGFuJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    title: "In Spring",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1549548284-28057f92c497?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8amFwYW4lMjBuYXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
    title: "In Summer",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1581931527820-5cb00fef30ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGphcGFuJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    title: "In Autumn",
  },
];
