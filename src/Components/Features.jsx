import React, { useEffect } from "react";
import plane from "../assets/plane.png";
import { ProductsData } from "../data/products";
import { useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addedToCart } from "../Redux/CartSlice";
import addToCartIcon from "../assets/addtocart.png";

function Features() {
  let dispatch = useDispatch()
  let featuresProducts = ProductsData;
  const [all, setAll] = useState(true);
  const [skinCare, setSkinCare] = useState(false);
  const [conditioners, setConditioners] = useState(false);
  const [foundation, setFoundation] = useState(false);

  function skinCareClicked() {
    setSkinCare(true);
    setAll(false);
    setConditioners(false);
    setFoundation(false);
  }

  function conditionersClicked() {
    setSkinCare(false);
    setAll(false);
    setConditioners(true);
    setFoundation(false);
  }

  function foundationClicked() {
    setSkinCare(false);
    setAll(false);
    setConditioners(false);
    setFoundation(true);
  }

  function allClicked() {
    setSkinCare(false);
    setAll(true);
    setConditioners(false);
    setFoundation(false);
  }

  const typeToFilter =
    foundation === true
      ? "foundation"
      : conditioners === true
      ? "conditioner"
      : skinCare === true
      ? "skin care"
      : "all";

  const filteredObjects = featuresProducts.filter(
    (item) => item.type === typeToFilter
  );

  let animationsVariants = {
    startUp: {
      x: 1,
      transition: {
        type: "spring",
        stiffness: 30.25,
      },
    },
    startUpInitial: {
      x: "-1000vw",
    },
  };

  function cartClicked(item){
    dispatch(addedToCart(item))
  }
 useEffect(() => {
   const cartedItems = localStorage.getItem("cartItems");
   try {
     if (cartedItems.length > 1) {
       const parsedItems = JSON.parse(...cartedItems);
       dispatch(addedToCart(parsedItems));
     }else{null}
   } catch (error) {
     console.log(error);
   }
 }, []);


  return (
    <section
      className="w-[90%] mx-[auto] flex flex-col my-[100px] 
    gap-[2rem]"
    >
      <div className="relative ">
        <img
          src={plane}
          alt="plane"
          className=" absolute md:left-[28%] left-[18%] md:w-[8rem] w-[5rem]
           top-[-2.6rem] md:top-[-4rem]"
        />
        <h1 className=" text-center text-[2rem]  font-bold">
          Our Feature Products
        </h1>
      </div>
      <div className="flex md:flex-row flex-col gap-[2rem] md:w-full w-[90%] mx-auto ">
        <div className=" ">
          <ul
            className="flex md:flex-col flex-wrap md:w-[18rem] w-auto text-[1.3rem] 
          gap-[0.7rem] md:gap-[2rem] font-[500] cursor-pointer"
          >
            <li
              onClick={allClicked}
              className="hover:text-[#fe956f]"
              style={{ color: `${all ? "#fe956f" : "black"}` }}
            >
              All
            </li>
            <li
              onClick={skinCareClicked}
              className="hover:text-[#fe956f]"
              style={{ color: `${skinCare ? "#fe956f" : "black"}` }}
            >
              Skin Care
            </li>
            <li
              onClick={conditionersClicked}
              className="hover:text-[#fe956f]"
              style={{ color: `${conditioners ? "#fe956f" : "black"}` }}
            >
              Conditioner
            </li>
            <li
              onClick={foundationClicked}
              className="hover:text-[#fe956f]"
              style={{ color: `${foundation ? "#fe956f" : "black"}` }}
            >
              Foundation
            </li>
          </ul>
        </div>
        <div
          className="flex flex-wrap md:gap-[2rem] gap-4  md:h-[425px] h-[430px]
         w-[100%] overflow-y-scroll "
        >
          {all &&
            featuresProducts.map((item) => (
              <motion.div
                variants={animationsVariants}
                initial="startUpInitial"
                animate="startUp"
                key={item.img}
                className="flex h-[12rem] items-center bg-white rounded-[10px] 
                      p-[1rem] overflow-hidden relative md:w-[210px] w-[75%]"
              >
                <div className="">
                  <h1 className="font-[600] text-[1.4rem]">{item.name.toUpperCase()}</h1>
                  <p className="text-[0.7rem]">{item.detail}</p>
                  <h2 className="font-bold text-[2rem]">${item.price}</h2>

                  <motion.img
                    onClick={() => cartClicked(item)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    src={addToCartIcon}
                    alt="addToCartIcon"
                    className="font-[0.6rem] border-solid border-black border-[2px]
                         py-[5px] px-[10px] mt-2 rounded-[15px] h-[40px] hover:cursor-pointer"
                  />
                </div>
                <div className="">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-[100%] w-[40%] transform rotate-[-20deg] absolute right-0 
                    bottom-[-20%]"
                  />
                </div>
              </motion.div>
            ))}

          {!all &&
            filteredObjects.map((item) => (
              <motion.div
                variants={animationsVariants}
                initial="startUpInitial"
                animate="startUp"
                key={item.img}
                className="flex h-[12rem] items-center bg-white rounded-[10px] 
                      p-[1rem] overflow-hidden relative md:w-[210px] w-[75%]"
              >
                <div className="">
                  <h1 className="font-[600] text-[1.4rem]">{item.name.toUpperCase()}</h1>
                  <p className="text-[0.7rem]">{item.detail}</p>
                  <h2 className="font-bold text-[2rem]">${item.price}</h2>

                  <motion.img
                    onClick={() => cartClicked(item)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    src={addToCartIcon}
                    alt="addToCartIcon"
                    className="font-[0.6rem] border-solid border-black border-[2px]
                         py-[5px] px-[10px] mt-2 rounded-[15px] h-[40px] hover:cursor-pointer"
                  />
                </div>
                <div className="">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-[100%] w-[40%] transform rotate-[-20deg] absolute right-0 
                    bottom-[-20%]"
                  />
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
