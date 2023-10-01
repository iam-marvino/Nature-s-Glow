import React from 'react'
import logoIcon from "../assets/logo.png";
import locationIcon from '../assets/location_on_FILL0_wght400_GRAD0_opsz48.png'
import phoneIcon from '../assets/call_FILL0_wght400_GRAD0_opsz48.png'
import mailBox from '../assets/inbox_FILL0_wght400_GRAD0_opsz48.png'
import aboutUsIcon from '../assets/groups_FILL0_wght400_GRAD0_opsz48.png'
import Safety from '../assets/link_FILL0_wght400_GRAD0_opsz48.png'
import { useSelector } from 'react-redux/es/hooks/useSelector';



function Footer() {
   let user = useSelector((store)=>store.user)
  return (
    <footer
      className="border-t-[1px] border-solid border-x-cyan-100  
      h-auto md:h-[200px] "
    >
      <div className="flex flex-wrap gap-[2rem] w-[90%] mx-auto justify-around h-full mt-[1.5rem] ">
        <div className="lg:flex  gap-[1rem] hidden">
          <img src={logoIcon} alt="logo" className=" w-[2.5rem] h-[2.5rem] " />
          <h1 className=" font-[600] text-[1rem]">Nature's Glow</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className=" font-[500] text-[1.2rem]">Contact Us</h1>
          <div className=" flex items-center gap-4 cursor-pointer">
            <img src={locationIcon} alt="locationIcon" className="w-[25px]" />
            <p className="text-[0.7rem]">111 north avenue Orlando, FL 32801</p>
          </div>
          <div className=" flex  items-center gap-4 cursor-pointer">
            <img src={phoneIcon} alt="phoneIcon" className="w-[25px]" />
            <p className="text-[0.7rem]">352-306-4415</p>
          </div>
          <div className=" flex  items-center gap-4 cursor-pointer">
            <img src={mailBox} alt="mailBox" className="w-[25px]" />
            <p className="text-[0.7rem]">
              support@Nature's_Glow.com
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className=" font-[500] text-[1.2rem]">Account</h1>
          <div className="flex flex-col  gap-4 cursor-pointer">
            <h1>
              Username :{" "}
              <span>
                {user?.displayName === null
                  ? "user not Signed in"
                  : user?.displayName}
              </span>
            </h1>
            <h1>
              Email :{" "}
              <span>
                {user?.email === null
                  ? "user not Signed in"
                  : user?.email}
              </span>
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className=" font-[500] text-[1.2rem]">Company</h1>
          <div className="flex  items-center gap-4  cursor-pointer">
            <img src={aboutUsIcon} alt="aboutUsIcon" className="w-[25px]" />
            <h1>About us</h1>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className=" font-[500] text-[1.2rem]">Resources</h1>
          <div className="flex  items-center gap-4 cursor-pointer">
            <img
              src={Safety}
              alt="Safety"
              className="w-[25px] transform rotate-[-60deg]"
            />
            <h1>Safety Privacy & Terms</h1>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
