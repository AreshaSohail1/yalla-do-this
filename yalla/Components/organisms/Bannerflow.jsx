import React from 'react'
import { FaFan ,FaTools } from "react-icons/fa";
import Heading from '../atoms/Heading';
import Paragraph from '../atoms/Paragraph';
import { FaGears } from "react-icons/fa6";


function bannerflow() {
  return (
    <div className=' flex rounded-md shadow-2xl w-[90%] mt-[-90px] ml-[70px] bg-white'>
        <div className="p-4 flex">
            <div className=" bg-[#f35748] text-[24px] rounded-md text-white h-[25px] w-[0px] pt-[20px] pb-[40px] pl-[20px] pr-[40px]    ">
            <FaFan />
            </div>
            <div className="p-3 ">
                <Heading level="4">AC Installation</Heading>
                <Paragraph variant='imgs'>Purchasing a new air conditioner is no small <br/> decision. Find out if you need a repair, a <br/> replacement, or a brand new installation.</Paragraph>
            </div>
        </div>
        <div className="p-4 flex">
            <div className=" bg-[#f35748] text-[24px] rounded-md text-white h-[25px] w-[0px] pt-[20px] pb-[40px] pl-[20px] pr-[40px]  ">
            <FaTools />
            </div>
            <div className="p-3 ">
                <Heading level="4">AC Repair</Heading>
                <Paragraph variant='imgs'>Are you a homeowner in need of air <br/> conditioning repair services? We know the <br/> struggle. Find out more!</Paragraph>
            </div>
        </div>
        <div className="p-4 flex">
            <div className=" bg-[#f35748] text-[24px] rounded-md text-white h-[25px] w-[0px] pt-[20px] pb-[40px] pl-[20px] pr-[40px]  ">
            <FaGears />
            </div>
            <div className="p-3 ">
                <Heading level="4">AC Maintenance</Heading>
                <Paragraph variant='imgs'>we are your one-stop provider for all the <br/> maintenance of your heating and air <br/> conditioner.</Paragraph>
            </div>
        </div>
    </div>
  )
}

export default bannerflow