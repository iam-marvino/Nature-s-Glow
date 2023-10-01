import React from "react";
import shade from "../assets/shade.png";
import before from "../assets/before.png";
import after from "../assets/after.png";
import ReactCompareImage from "react-compare-image";

function Virtual() {
  return (
    <section>
      <div
        className=" my-[6rem] w-[80%] mx-[auto] flex md:flex md:flex-row flex-col 
      md:justify-between md:items-center lg:max-w-screen-2xl h-auto"
      >
        <div className=" flex flex-col gap-[2rem] relative md:mb-[0rem] mb-[2rem]">
          <h1 className=" text-[2rem] font-[700]">VIRTUAL TRY-ON</h1>
          <h2 className=" text-[1.6rem] lg:w-[20rem] w-full">
            NEVER BUY THE WRONG{" "}
            <span className=" text-center">SHADE AGAIN!</span>
          </h2>
          <p className="text-[2rem] font-[700]">Try Now!</p>
          <img
            src={shade}
            alt="shade"
            className="md:w-[10rem] w-[7rem]  absolute bottom-[-1.5rem]"
          />
        </div>
        <div className="">
          <div className="md:w-[30rem] w-90% mx-auto">
            <ReactCompareImage leftImage={before} rightImage={after} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Virtual;
