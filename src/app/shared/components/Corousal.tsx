"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";


const images = [
  "/images/naruto1.jpg",
  "/images/naruto2.jpg",
  "/images/naruto3.jpg",
  "/images/naruto4.jpg",
  "/images/naruto5.jpg",
  "/images/naruto6.jpg",
  "/images/naruto7.jpg",
  "/images/naruto8.jpg",
  "/images/naruto9.jpg",
];

const Corousal = () => {
  useEffect(() => {
    console.log("Pagination element:", document.querySelector(".custom-pagination"));
  }, []);

  return (
    <div className="w-full relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-xl"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="relative">
            {/* Background Image */}
           <div className="relative w-full h-[400px]">
            <Image
              src={src}
              alt={`Naruto ${index + 1}`}
              fill
              className="object-cover rounded-xl"
            />
          </div>
            {/* Overlay content */}
            <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-6 text-white">
              {/* Center Title */}
              <h1 className="text-5xl sm:text-7xl font-bold sm:text-center mt-30 ">
                WAN 2.2
              </h1>

              <div className="sm:flex justify-between items-end w-full">
                {/* Left Bottom Text */}
                <div>
                  <h2 className="text-lg sm:xl md:text-2xl font-semibold">
                    WAN 2.2 Image generation
                  </h2>
                  <p className="text-sm md:text-base max-w-sm">
                    Generate complex images with the brand new and powerful WAN 2.2 model. Exceptional prompt adherance and ultra-realistic textures.
                  </p>
                </div>

                {/* Right Bottom Button */}
                <button className="cursor-pointer px-2 sm:px-4 py-2 sm:py-3 bg-white text-black rounded-full font-semibold shadow-md hover:bg-gray-200 transition mt-4 sm:mt-0">
                  Try WAN 2.2
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* external pagination container */}
      <div className="absolute -bottom-4 right-3 flex justify-end w-full z-10">
        <div className="custom-pagination flex gap-2"></div>
      </div>

      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background: #ccc;
          opacity: 0.6;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background: #000;
          opacity: 1;
        }
      `}</style>

    </div>
  );
};

export default Corousal;
