import React from "react";
import SwiperCore, {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper";
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
const slide_img1 = [
  ,
  ,
  "https://lavieestbelle.vn/image/cache/catalog/San%20Pham%20Chinh%20Thuc/Hoa%20Lan/z3993801903127_59c7e1160b47a8957e54cb7cc9bdf300-600x600.jpg",
  ,
];
export default function Home() {
  return (
    <main>
      <div>
        <Swiper
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
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
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper1"
        >
          <SwiperSlide>
            <img
              src={`https://lavieestbelle.vn/image/cache/catalog/San%20Pham%20Chinh%20Thuc/Hoa%20Hộp/05082022/DSCF3052-600x600.jpg`}
              style={{ width: "100%" }}
              alt=""
            />
            <div>
              <h3>FLower Box</h3>
              <a>BUY NOW</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://lavieestbelle.vn/image/cache/catalog/San%20Pham%20Chinh%20Thuc/Hoa%20Cuoi/04082022/486-600x600.jpg"
              style={{ width: "100%" }}
              alt=""
            />
            <div>
              <h3>FLower Box</h3>
              <a>BUY NOW</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://lavieestbelle.vn/image/cache/catalog/San%20Pham%20Chinh%20Thuc/Hoa%20Lan/z3993801903127_59c7e1160b47a8957e54cb7cc9bdf300-600x600.jpg"
              style={{ width: "100%" }}
              alt=""
            />
            <div>
              <h3>FLower Box</h3>
              <a>BUY NOW</a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://lavieestbelle.vn/image/cache/catalog/San%20Pham%20Chinh%20Thuc/Tulip/Tulip%201/DSCF1226-600x600.jpg"
              style={{ width: "100%" }}
              alt=""
            />
            <div>
              <h3>FLower Box</h3>
              <a>BUY NOW</a>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="tabs-product">
        <div className="block-title">
          <h3>Our Products</h3>
          <div className="tabs-style">
            <ul className="tab">
              <li>Style 1</li>
              <li>Style 2</li>
              <li>Style 3</li>
              <li>Style 4</li>
            </ul>
          </div>
        </div>
        <div className="Product">
          <img />
        </div>
      </div>
    </main>
  );
}
