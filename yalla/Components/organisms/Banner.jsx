import React from 'react'
import Heading from '../atoms/Heading'
import { MdArrowOutward } from "react-icons/md";
import Bannerflow from './Bannerflow'

export default function Banner() {
  return (
    <div className=''>
      <div className="baner-bg">
        <div className="py-[15%] px-[3%] grid gap-9 ">
          <div className='py-[10px] text-white px-[20px] bg-[#45a6af] xl:w-[23%] lg:w-[25%] md:w-[33%] sm:w-[43%] w-[65%] '>
            <Heading level="6" className="xl:text-[14px] md:text-[12px] ">WELCOME TO YALLA DO THIS</Heading>
          </div>
          <div className="grid gap-6 ">
            <Heading level="1" className="xl:text-[60px] md:text-[50px] sm:text-[40px]">The temperature <br /> of cooling is in <br /> your hand.</Heading>
            <Heading  level="4" className="xl:text-[24px] lg:text-[24px] md:text-[20px] sm:text-[19px] text-[14px] "  >Providing best-in-class air conditioning services <br /> to make your home cooler, more energy-efficient, <br /> and optimized for your comfort</Heading>
          </div>
          <div className="bg-[#f35748] hover:bg-[#45a6af] pl-[35px] py-[20px] xl:w-[17%]  lg:w-[17%]  md:w-[25%]  sm:w-[30%]  w-[47%]  ">
            <button className='flex items-center text-white text-[18px]  font-[600] '>Discover More  <MdArrowOutward /></button>
          </div>
        </div>
      </div>
      <Bannerflow/>
    </div>
  )
}
