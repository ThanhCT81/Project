import React from "react";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./Home.css";
SwiperCore.use([Autoplay, EffectCoverflow, Pagination]);
// if you want to use array
const slide_img = [
  "https://lavieestbelle.vn/image/cache/catalog/slider/DSCF6208-web-min-1400x700.jpg",
  "https://lavieestbelle.vn/image/cache/catalog/slider/DSCF0034-min-1400x700.jpg",
  "https://lavieestbelle.vn/image/cache/catalog/slider/DSCF1267web-1400x700.jpg",
  "https://lavieestbelle.vn/image/cache/catalog/slider/DSCF0031-cover-web-min-1400x700.jpg",
];

export default function Home() {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        className="mySwiper"
        modules={[EffectCoverflow, Pagination, Autoplay]}
      >
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} style={{ width: "100%" }} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
