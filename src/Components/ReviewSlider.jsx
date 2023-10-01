import React from "react";
import { TestimonialsData } from "../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Virtual } from "swiper/modules";
import { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function ReviewSlider() {
  let Testimonials = TestimonialsData;

  const [slidesPerView, setSlidesPerView] = useState(3);

  // Function to update the number of slides per view based on screen size
  const updateSlidesPerView = () => {
    if (window.innerWidth < 768) {
      setSlidesPerView(1);
    } else {
      setSlidesPerView(3);
    }
  };

  // Add event listener to update slidesPerView on window resize
  useEffect(() => {
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, [window.innerWidth]);

  return (
    <section className="mb-[10px] relative">
      <Swiper
        modules={[Navigation, Pagination, Virtual]}
        spaceBetween={20}
        slidesPerView={slidesPerView}
        loop={true}
        virtual
        className="cursor-pointer w-[90%] mx-auto  gap-4 
        h-[400px] pt-[30px] p-[2rem] "
      >
        {Testimonials.map((item, index) => (
          <SwiperSlide
            key={item.name}
            virtualIndex={index}
            className="relative w-[auto] p-[1rem] gap-4 rounded-[0.5rem] 
          bg-white flex flex-col items-center justify-center h-[auto] shadow-lg lg:h-[250px]"
          >
            <img
              src={item.image}
              alt={item.image}
              className=" absolute top-[-1.5rem]  w-[3rem] z-[1000]
              left-[0px] right-0 mx-auto "
            />
            <p className="text-center font-[0.8rem] tracking-[1px]">
              {item.comment}
            </p>
            <hr className=" h-[1px] w-[80%] mx-auto" />
            <h2 className="font-[500]">{item.name}</h2>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default ReviewSlider;
