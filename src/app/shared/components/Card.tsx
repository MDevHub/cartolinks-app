"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const cards = [
  { id: 1, title: "Card One", image: "/images/wine1.jpg" },
  { id: 2, title: "Card Two", image: "/images/wine2.jpg" },
  { id: 3, title: "Card Three", image: "/images/wine3.jpg" },
  { id: 4, title: "Card Four", image: "/images/wine4.jpg" },
  { id: 5, title: "Card Five", image: "/images/wine5.jpg" },
];

const Card = () => {
  return (
    <div className="w-full relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-xl"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl overflow-hidden relative">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <div className="absolute bottom-[-6] mt-1 right-3 flex gap-2 z-10">
        <button className="custom-prev w-6 h-6 flex items-center justify-center rounded-full border bg-gray-200 dark:bg-gray-800">
          <Icon icon="lucide:chevron-left" className="text-xl cursor-pointer" />
        </button>
        <button className="custom-next w-6 h-6 flex items-center justify-center rounded-full border bg-gray-200  dark:bg-gray-800 ">
          <Icon icon="lucide:chevron-right" className="text-xl cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Card;
