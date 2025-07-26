"use client";

import { Pagination, Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import { DetailsData } from "@/utils/Data";
import DetailItem from "./DetailItem";

export function DetailItemWrapper() {
  return (
    <Swiper
      modules={[Pagination, Scrollbar, Autoplay]}
      pagination={{ clickable: true }}
      className="my-swiper"
      spaceBetween={30}
      autoplay={{ delay: 4000 }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        992: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 2, // tablet
        },
        480: {
          slidesPerView: 1, // mobil
        },
      }}
    >
      {DetailsData.map((item, index) => (
        <SwiperSlide key={index} className="py-2">
          <DetailItem item={item} />
        </SwiperSlide>
      ))}
      <div className="deneme"></div>
    </Swiper>
  );
}
