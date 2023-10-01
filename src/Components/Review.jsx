import React from "react";
import ReviewImg from "../assets/testimonialHero.png";

function Review() {
  return (
    <section className="flex flex-col">
      <div className="flex md:flex-row flex-col w-[95%] mx-[auto]">
        <div className="flex flex-col justify-end flex-1 gap-[1rem] ">
          <h1 className="font-[700] text-[2rem] text-center md:text-left">
            TOP RATED
          </h1>
          <p className="text-[0.8rem] md:w-[70%] w-full text-center md:text-left">
            SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY. EXERCISE JOY MAN CHILDREN
            REJOICED.
          </p>
        </div>

        <div className=" w-[80%] mx-auto  md:w-[25rem] md:flex-2">
          <img src={ReviewImg} alt="ReviewImg" className=" w-full" />
        </div>

        <div className=" flex-1 flex flex-col justify-center items-center md:justify-end
         md:items-end gap-[1rem]">
          <h1 className="font-[700] text-[2rem] ">100K</h1>
          <p className="text-[0.8rem]">HAPPY CUSTOMERS WITH US</p>
        </div>
      </div>

      <div className="text-center ">
        <h1 className=" font-[700] text-[2rem]">REVIEWS</h1>
      </div>
    </section>
  );
}

export default Review;
