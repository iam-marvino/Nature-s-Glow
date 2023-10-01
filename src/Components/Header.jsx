import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logoIcon from "../assets/logo.png";
import cartIcon from "../assets/shopping_bag_FILL0_wght300_GRAD0_opsz40.png";
import profileIcon from "../assets/person_FILL0_wght400_GRAD0_opsz48.png";
import menuIcon from "..//assets/menu_FILL0_wght300_GRAD0_opsz48.png";
import { Auth, GoogleProvider } from "../firebase";
import { signOut, signInWithPopup } from "firebase/auth";
import { SIGNEDIn, SIGNEDOut } from "../Redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";

function Header() {
  // this menu-state is for mobile only, to open and close hamburger menu on click
  let [menu, setMenu] = useState(false);

  let cart = useSelector((store) => store.cart.cartItems);

  // both the intentToSignIn and intentToSignOut state serves same purpose, when profile icon is clicked
  // it profiles either e sign-in or sign-out button, and when sign in or sign out is complete it return
  //  the state to its default
  const [intentToSignIn, setIntentToSignIn] = useState(false);
  const [intentToSignOut, setIntentToSignOut] = useState(false);

  let user = useSelector((store) => store.user);

  let dispatch = useDispatch();

  async function signInUser() {
    try {
      await signInWithPopup(Auth, GoogleProvider);
      dispatch(
        SIGNEDIn({
          displayName: Auth.currentUser.displayName,
          email: Auth.currentUser.email,
          photoURL: Auth.currentUser.photoURL,
        })
      );
      localStorage.setItem(
        "user",
        JSON.stringify({
          displayName: Auth.currentUser.displayName,
          email: Auth.currentUser.email,
          photoURL: Auth.currentUser.photoURL,
        })
      );
      setIntentToSignIn(!intentToSignIn);
    } catch (error) {
      console.log(error);
    }
  }

  async function signOutUser() {
    try {
      await signOut(Auth, GoogleProvider);
      dispatch(SIGNEDOut());
      localStorage.removeItem("user");
      setIntentToSignOut(!intentToSignOut);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    // Check if user data exists in localStorage
    const userDataFromLocalStorage = localStorage.getItem("user");
    if (userDataFromLocalStorage) {
      const userData = JSON.parse(userDataFromLocalStorage);
      // Dispatch the user data to update the Redux store
      dispatch(SIGNEDIn(userData));
    }
  }, [dispatch]);

  let [openCart, setOpenCart] = useState(false);

  return (
    <>
      {/* PC & TAB code which is hidden by default on mobile */}
      <header
        className="hidden md:flex p-[1.5rem] items-center gap-[2rem]
       justify-between relative "
      >
        {/* logoIcon and business name */}
        <section className="flex items-center gap-[1rem] ">
          <img src={logoIcon} alt="logo" className="w-[2.5rem] h-[2.5rem]" />
          <h1 className=" font-[600] text-[1rem]">Nature's Glow</h1>
        </section>

        {openCart && (
          <div className="">
            <CartItems cart={cart} />
          </div>
        )}

        {/*the listed page options to navigate to but not functional  */}
        <nav className="ml-auto">
          <ul
            className="flex gap-[2rem] font-[500] items-center justify-center 
          cursor-pointer"
          >
            <li className="hover:text-[#fe956f]">Collections</li>
            <li className="hover:text-[#fe956f]">Brands</li>
            <li className="hover:text-[#fe956f]">New</li>
            <li className="hover:text-[#fe956f]">Sales</li>
          </ul>
        </nav>

        {/* dummy input field to search item */}
        <section
          className="bg-white p-[0.3rem] rounded-[5px] w-[7rem] h-[30%] 
        md:hidden lg:block "
        >
          <input
            type="text"
            placeholder="Search "
            className="bg-white outline-none w-full h-full  pl-[0.5rem] "
          />
        </section>

        {/* the user-login in icon and cart icon */}
        <section className="flex gap-[1rem] items-center justify-center cursor-pointer">
          {/* login div */}
          <div className="flex  items-center justify-center">
            {user?.email === null ? (
              <div className=" relative">
                <img
                  src={profileIcon}
                  alt="noUserIcon"
                  className="h-[30px]"
                  onClick={() => setIntentToSignIn(!intentToSignIn)}
                />
                {intentToSignIn && (
                  <motion.h2
                    whileTap={{ scale: 0.8 }}
                    className="absolute top-[2.5rem] right-[1rem] w-[90px] bg-white
                    p-[0.5rem] rounded-md shadow-xl text-center z-[100] hover:bg-slate-100"
                    onClick={signInUser}
                  >
                    Sign In
                  </motion.h2>
                )}
              </div>
            ) : (
              <div className=" relative">
                <img
                  src={user.photoURL}
                  alt="profileIcon"
                  className="h-[30px] rounded-full"
                  onClick={() => setIntentToSignOut(!intentToSignOut)}
                />
                {intentToSignOut && (
                  <motion.h2
                    whileTap={{ scale: 0.8 }}
                    className="absolute top-[2.5rem] right-[1rem] w-[90px] bg-white
                    p-[0.5rem] rounded-md shadow-xl text-center z-[100] hover:bg-slate-100"
                    onClick={signOutUser}
                  >
                    Sign Out
                  </motion.h2>
                )}
              </div>
            )}
          </div>
          {/* cart icon */}
          <motion.div
            className=" relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpenCart((prev) => !prev)}
          >
            <img src={cartIcon} className="w-[30px] " alt="cartIcon" />

            {cart.length >= 1 && (
              <div
                className=" absolute font-bold left-0 right-0 mx-auto top-[0.45rem]  
            rounded-[100%]  flex items-center justify-center p-[0.25rem] text-[10px]"
              >
                <p>{cart.length}</p>
              </div>
            )}
          </motion.div>
        </section>
      </header>

      {/* MOBILE code which is hidden by default on pc and tab*/}
      <header className=" md:hidden flex p-[1rem] items-center  justify-between relative ">
        {/* logoIcon and business name */}
        <section className="flex items-center justify-center gap-[0.5rem] ">
          <img src={logoIcon} alt="logo" className="w-[2rem] h-[2rem]" />
          <h1 className=" font-[600] ">Nature's Glow</h1>
        </section>
        {/* mobile menu section */}
        <section className=" absolute right-[2.5%] top-[1.2rem] z-[1000]">
          <div
            className="flex flex-col gap-[1rem] bg-white p-[1rem] items-center 
          justify-center cursor-pointer rounded-md"
          >
            <img
              src={menuIcon}
              alt="menu"
              className="w-[20px] "
              onClick={() => {
                setMenu(!menu);
                setOpenCart(false);
              }}
            />

            {/* {openCart && (
              <div className="">
                <CartItems cart={cart} />
              </div>
            )} */}

            {/*the listed page options to navigate to but not functional  */}
            {menu && (
              <nav className="ml-auto">
                <ul
                  className="flex flex-col gap-[1rem] font-[200] items-start 
                justify-start cursor-pointer"
                >
                  <li className="hover:text-[#fe956f]">Collections</li>
                  <li className="hover:text-[#fe956f]">Brands</li>
                  <li className="hover:text-[#fe956f]">New</li>
                  <li className="hover:text-[#fe956f]">Sales</li>
                </ul>
              </nav>
            )}

            {/* the user-login in icon and cart icon */}
            <section className="flex  items-center justify-center relative">
              {/* login div */}
              {user?.email === null ? (
                <div className="relative ">
                  <img
                    src={profileIcon}
                    alt="noUserIcon"
                    className="h-[25px]"
                    onClick={() => {
                      setIntentToSignIn(!intentToSignIn);
                      setOpenCart(false)
                    }}
                  />

                  {intentToSignIn && (
                    <motion.h2
                      whileTap={{ scale: 0.8 }}
                      className=" absolute top-[-1rem] right-[5rem] w-[90px] bg-white
                      p-[0.5rem] rounded-md shadow-xl text-center"
                      onClick={signInUser}
                    >
                      Sign In
                    </motion.h2>
                  )}
                </div>
              ) : (
                <div className="relative ">
                  <img
                    src={user.photoURL}
                    alt="profileIcon"
                    className="h-[25px] rounded-full"
                    onClick={() => setIntentToSignOut(!intentToSignOut)}
                  />

                  {intentToSignOut && (
                    <motion.h2
                      whileTap={{ scale: 0.8 }}
                      className=" absolute top-[-1rem] right-[5rem] w-[90px] bg-white
                  p-[0.5rem] rounded-md shadow-xl text-center"
                      onClick={signOutUser}
                    >
                      Sign Out
                    </motion.h2>
                  )}
                </div>
              )}
            </section>
            {/* cart icon */}
            <motion.div
              className=" relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setOpenCart((prev) => !prev);
                setMenu(false);
                setIntentToSignIn(false);
                setIntentToSignOut(false)
              }}
            >
              <img src={cartIcon} className="w-[30px] " alt="cartIcon" />

              {cart.length >= 1 && (
                <div
                  className=" absolute font-bold left-0 right-0 mx-auto top-[0.45rem]  
            rounded-[100%]  flex items-center justify-center p-[0.25rem] text-[10px]"
                >
                  <p>{cart.length}</p>
                </div>
              )}
            </motion.div>
            {openCart && (
              <div className="">
                <CartItems cart={cart} />
              </div>
            )}
          </div>
        </section>
      </header>
    </>
  );
}

export default Header;
