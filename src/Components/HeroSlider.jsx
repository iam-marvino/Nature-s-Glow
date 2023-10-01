import React from "react";
import { useEffect, useState } from "react";
import SliderProducts from "../data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Virtual } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function HeroSlider() {
  const products = SliderProducts;
  // const slides = Array.from({ length: 1000 }).map(
  //   (el, index) => `Slide ${index + 1}`
  // );

  const [slidesPerView, setSlidesPerView] = useState(3);

  // Function to update the number of slides per view based on screen size
  const updateSlidesPerView = () => {
    if (window.innerWidth < 768) {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(3);
    }
  };

  //  event listener to update slidesPerView on window resize
  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, [window.innerWidth]);

  return (
    <section className="relative max-w-screen-xl mx-[auto] md:mt-0 mt-[1rem]">
      <div className="swiper-button-next md:right-[5rem] right-[2%] "></div>
      <div className="swiper-button-prev md:left-[5rem] left-[2%]  "></div>
      <Swiper
        modules={[Navigation, Pagination, Virtual]}
        spaceBetween={40}
        slidesPerView={slidesPerView}
        loop={true}
        virtual
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="md:w-[70%] w-[80%] mx-auto"
      >
        {products.map((item, index) => (
          <SwiperSlide
            key={item.id}
            virtualIndex={index}
            className="flex h-[12rem] items-center bg-white rounded-[10px] p-[1rem] 
              overflow-hidden  relative md:w-[250px] w-[100%] z-40 "
          >
            <div className="">
              <h1 className="font-[600] text-[1.4rem]">{item.name.toUpperCase()}</h1>
              <p className="text-[0.7rem]">{item.detail}</p>
              <h2 className="font-bold text-[2rem]">${item.price}</h2>
              <p
                className="font-[0.6rem]  py-[5px]  rounded-[15px]"
              >
                On sale!!!
              </p>
            </div>
            <div className="">
              <img
                src={item.img}
                alt={item.name}
                className="h-[100%] w-[50%] transform rotate-[-20deg] absolute 
                right-0 bottom-[-20%]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSlider;
