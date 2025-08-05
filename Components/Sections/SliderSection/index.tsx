"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { SliderData } from "@/utils/Data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CustomSliderItem from "./CustomSliderItem";
export default function SliderSection() {
  return (
    <section className="relative block h-[calc(100vh-156px)] w-full p-0">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect="fade"
        navigation={{ nextEl: ".deneme", prevEl: ".deneme2" }}
        className="block h-full w-full"
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        loop={true}
      >
        {SliderData.map((item, index) => (
          <SwiperSlide className="relative block h-full w-full" key={index}>
            <CustomSliderItem item={item} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute top-[50%] z-10 flex w-full -translate-y-1/2">
        <div className="flex w-full items-center justify-between !p-0">
          <button className="prev-btn deneme cursor-pointer">
            <ChevronLeft
              className="text-blue-700"
              size={60}
              strokeWidth={1.2}
            />
          </button>
          <button className="next-btn deneme2 cursor-pointer">
            <ChevronRight
              className="font-thin text-blue-600"
              size={60}
              strokeWidth={1.2}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
