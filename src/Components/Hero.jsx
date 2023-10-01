import React from "react";
import cartIcon from "../assets/shopping_bag_FILL1_wght300_GRAD0_opsz48.png";
import arrowRight from "../assets/arrow_right_alt_FILL0_wght200_GRAD0_opsz48.png";
import heroImg from "../assets/hero.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      {/* Pc and Tab */}
      <section className="hidden md:grid lg:grid-cols-[1fr,3fr,1fr] 
      md:grid-cols-[1fr,3fr] px-[2rem]  ">
        <div className="flex flex-col ">
          <div className="h-[240px]">
            <h1 className="font-[600] text-[1.5rem] w-[50%]">
              SKIN PROTECTION CREAM
            </h1>
          </div>
          <div className="h-[240px]">
            <h1 className="font-[800] text-[2rem]">Trendy Collection</h1>
            <p>
              Seedily say has suitable disposal and boy. Exercise joy man
              children rejoiced.
            </p>
          </div>
        </div>

        <div className=" relative flex items-baseline justify-center h-[400px]">
          <div className="w-[50%] mx-auto h-full">
            <motion.div
              initial={{ bottom: "-1.5rem" }}
              whileInView={{ bottom: "-4rem" }}
              transition={{ duration: 3, type: "spring" }}
              className="h-[29rem] w-[30rem]  rounded-full z-[0] absolute left-0
               right-0 mx-auto 
           bg-lightPurple"
            ></motion.div>
            <motion.img
              initial={{ bottom: "-8rem" }}
              whileInView={{ bottom: "-5rem" }}
              transition={{ duration: 3, type: "spring" }}
              src={heroImg}
              alt="heroImg"
              className="w-[30rem] absolute bg-transparent z-[1] left-0 right-0 mx-auto  "
            />
          </div>

          <motion.div
            initial={{ right: "7%" }}
            whileInView={{ right: "2%" }}
            transition={{ duration: 3, type: "spring" }}
            className="absolute flex gap-[1rem] bottom-[2rem] right-[0.5rem] bg-transparent z-20"
          >
            <div
              className="bg-white border-black border-solid border-[6px] rounded-full
            w-[55px] h-[55px] flex items-center justify-center"
            >
              <img
                src={cartIcon}
                alt="cartIcon"
                className=" bg-white rounded-full w-[30px]"
              />
            </div>
            <div
              className=" bg-white flex gap-[1rem] p-[10px] text-[0.8rem] rounded-[15px] 
          items-center shadow-shadowOne"
            >
              <p className=" bg-white w-[6rem]">Best Signup Offers</p>
              <div
                className="flex items-center justify-center h-[30px] bg-white rounded-full
             w-[30px] border-lightPurple border-solid border-[1px] cursor-pointer"
              >
                <img
                  src={arrowRight}
                  alt="arrowRight"
                  className=" bg-white rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <section className="text-right z-10 md:col-span-3 lg:col-span-1  lg:block md:flex
         md:justify-around ">
          <div className="lg:h-[240px] h-[100px] ">
            <h1 className="text-[2.5rem] font-[800] bg-inherit">1.5m </h1>
            <p className="text-[15px] bg-inherit">Monthly traffic</p>
          </div>
          <div className="lg:h-[240px] h-[100px]">
            <h1 className="text-[2.5rem] font-[800] bg-inherit">100k</h1>
            <p className="text-[15px] bg-inherit">Happy Customers</p>
          </div>
        </section>
      </section>

      {/* MOBILE */}
      <section className=" md:hidden grid  grid-cols-[3fr] px-[2rem] gap-[1.5rem] ">
        <div className=" relative flex items-baseline justify-center h-[280px] mb-[3rem] col-span-3">
          <div className="w-[80%] mx-auto h-full">
            <motion.div
              initial={{ bottom: "-1.5rem" }}
              whileInView={{ bottom: "-4rem" }}
              transition={{ duration: 3, type: "spring" }}
              className="h-[100%] w-[100%] max-w-[300px] max-h-[300px] rounded-full z-[0] absolute 
           bg-lightPurple left-0 right-0 mx-auto "
            ></motion.div>
            <motion.img
              initial={{ bottom: "-8rem" }}
              whileInView={{ bottom: "-5rem" }}
              transition={{ duration: 3, type: "spring" }}
              src={heroImg}
              alt="heroImg"
              className="h-[100%] w-[100%] max-w-[300px] max-h-[300px]   z-[0] absolute 
             left-0 right-0 mx-auto "
            />
          </div>

          <motion.div
            initial={{ right: "7%" }}
            whileInView={{ right: "2%" }}
            transition={{ duration: 3, type: "spring" }}
            className="absolute flex gap-[1rem] bottom-[-2rem] right-[0.5rem] bg-transparent z-20"
          >
            <div
              className="bg-white border-black border-solid border-[6px] rounded-full
            w-[45px] h-[45px] flex items-center justify-center"
            >
              <img
                src={cartIcon}
                alt="cartIcon"
                className=" bg-white rounded-full w-[20px]"
              />
            </div>
            <div
              className=" bg-white flex gap-[1rem] p-[10px] text-[0.8rem] rounded-[15px] 
          items-center shadow-shadowOne"
            >
              <p className=" bg-white w-[3rem] text-[0.5rem] ">
                Best Signup Offers
              </p>
              <div
                className="flex items-center justify-center  bg-white rounded-full
              border-lightPurple border-solid border-[1px] cursor-pointer w-[20px] h-[20px]"
              >
                <img
                  src={arrowRight}
                  alt="arrowRight"
                  className=" bg-white rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex justify-between col-span-4 mt-[5rem]">
          <div className="h-[auto]">
            <h1 className="font-[600] text-[1rem] w-[50%]">
              SKIN PROTECTION CREAM
            </h1>
          </div>
          <div className="h-[auto] w-[50%]">
            <h1 className="font-[800] text-[1rem]">Trendy Collection</h1>
            <p className="text-[0.6rem]">
              Seedily say has suitable disposal and boy. Exercise joy man
              children rejoiced.
            </p>
          </div>
        </div>

        <div className=" text-center z-10 flex col-span-3 justify-between">
          <div className="w-[50%]">
            <h1 className="text-[1rem] font-[800] bg-inherit">1.5m </h1>
            <p className="text-[15px] bg-inherit">Monthly traffic</p>
          </div>
          <div className="w-[50%]">
            <h1 className="text-[1rem] font-[800] bg-inherit">100k</h1>
            <p className="text-[15px] bg-inherit">Happy Customers</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
