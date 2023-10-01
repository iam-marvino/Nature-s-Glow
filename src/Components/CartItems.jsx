import React, { useState } from "react";
import { motion } from "framer-motion";
import deleteIcon from "../assets/close_FILL0_wght400_GRAD0_opsz24.png";
import { useDispatch } from "react-redux";
import {
  emptyCart,
  removedFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../Redux/CartSlice";
import arrowUp from "../assets/arrowUp.png";
import arrowDown from "../assets/arrowDown.png";

function CartItems({ cart }) {
  let dispatch = useDispatch();
  let cartItem = cart;
  let total = cartItem.reduce(
    (total, current) => total + current.price * current.quantity,
    0
  );

  return (
    <section
      className="absolute md:top-[100px] md:right-[30px] w-[65vw]  md:w-[350px] md:h-[400px]
         bg-yellow-300 overflow-y-scroll scroll-smooth z-50 top-[40px] right-[70px]
         h-[330px] rounded-md max-w-[400px]"
    >
      {cart.length < 1 ? (
        <div className=" w-full h-full flex items-center justify-center">
          <h2 className=" font-bold">Cart is Empty</h2>
        </div>
      ) : (
        <div className=" relative flex gap-2 flex-col p-4 min-h-[390px]">
          <h2 className=" text-center font-bold text-xl mb-4">Shopping Cart</h2>
          {cart.map((item) => (
            <div className="flex  items-center gap-3" key={item.name + item.id}>
              <div
                key={item.img}
                className="flex h-[4rem] w-[60%] md:h-[8rem] items-center bg-white rounded-[10px] 
                      p-[1rem] overflow-hidden relative  md:w-[70%]"
              >
                <div className="">
                  <h1 className="font-[600] text-[0.65rem] md:text-[1.4rem]">
                    {item.name}
                  </h1>
                  <p className="text-[0.5rem] md:text-[0.7rem]">
                    {item.detail}
                  </p>
                  <h2 className="font-bold text-[0.65rem] md:text-[2rem]">
                    ${item.price}
                  </h2>
                </div>
                <div className="">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-[100%] w-[40%] transform rotate-[-20deg] absolute right-0 
                    bottom-[-20%]"
                  />
                </div>
              </div>
              <div className="flex flex-col  md:gap-1">
                {/* increase quantity button */}
                <motion.div
                  className="flex items-center justify-center hover:cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => dispatch(increaseQuantity(item))}
                >
                  <img
                    src={arrowUp}
                    alt="arrowUpIcon"
                    className=" h-[20px] md:h-[35px]"
                  />
                </motion.div>

                {/* quantity display */}
                <p className=" text-center text-xs md:text-xl">{item.quantity}</p>

                {/* decrease quantity button */}
                <motion.div
                  className="flex items-center justify-center hover:cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => dispatch(decreaseQuantity(item))}
                >
                  <img
                    src={arrowDown}
                    alt="arrowDownIcon"
                    className=" h-[20px] md:h-[35px]"
                  />
                </motion.div>
              </div>

              {/* onclick remove item */}
              <motion.div
                onClick={() => dispatch(removedFromCart(item))}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex justify-center items-center bg-yellow-100
                rounded-full p-2 hover:cursor-pointer"
              >
                <img
                  src={deleteIcon}
                  alt="removeFromCartIcon"
                  className=" md:w-[30px] md:h-[30px] w-[15px] h-[15px]"
                />
              </motion.div>
            </div>
          ))}

          {/* total & clear cart section */}
          <div className="mt-4">
            <p className="font-bold">Sub-total: $ {total} </p>
            <motion.div
              whileTap={{ scale: 0.9 }}
              className=" bg-white hover:bg-red-600 flex items-center 
              justify-center w-[7rem] mt-4 hover:text-white hover:transition-colors
              duration-300 ease-in delay-150 p-2 hover:cursor-pointer rounded-lg"
            >
              <p onClick={() => dispatch(emptyCart())}>Clear Cart</p>
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
}

export default CartItems;
