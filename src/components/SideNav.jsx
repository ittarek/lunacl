import React from 'react';
import icon from "../assets/dashboardIcon.png"
import { SlQuestion } from "react-icons/sl";
const SideNav = () => {
     return (
       <div className=' absolute top-0 left-[15.5%] lg:mt-[3.5%] md:ml-[.2%] mt-[11%] -ml-[12.5%]  mx-auto'>

         <button  className='mb-[100px]'>
           <SlQuestion className='w-[25px]  h-[25px] text-center mx-auto'/>
         </button>
    <img src={icon} alt="" />
       </div>
     );
};

export default SideNav;