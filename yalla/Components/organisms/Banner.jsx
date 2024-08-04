import React from 'react'
import Heading from '../atoms/Heading'
import { MdArrowOutward } from "react-icons/md";
import Bannerflow from './Bannerflow'


export default function Banner() {
  return (
    <div className='bg-[#f5f4f3 '>
      <div className="baner-bg">
        <div className="py-[15%] px-[3%] grid gap-9 ">
          <div className='py-[10px] text-white px-[20px] bg-[#45a6af] w-[23%] '>
            <Heading level="6">WELCOME TO YALLA DO THIS</Heading>
          </div>
          <div className="grid gap-6 ">
            <Heading level="1">The temperature <br /> of cooling is in <br /> your hand.</Heading>
            <Heading level="4">Providing best-in-class air conditioning services <br /> to make your home cooler, more energy-efficient, <br /> and optimized for your comfort</Heading>
          </div>
          <div className="bg-[#f35748] hover:bg-[#45a6af] w-[17%]  p-[20px] ">
            <button className='flex items-center text-white text-[18px]  font-[600] '>Discover More  <MdArrowOutward /></button>
          </div>
        </div>
      </div>
      <Bannerflow/>
    </div>
  )
}
