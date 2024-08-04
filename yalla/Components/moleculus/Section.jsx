import React from 'react'
import Paragraph from '../atoms/Paragraph'
import Heading from '../atoms/Heading'
import { FaCheck } from "react-icons/fa";


function Section() {
    return (
        <div className=''>
            <div className=' px-[6%] py-[10%]  h-[700px]'>

                <div className='flex gap-[8%] '>
                    <img className='rounded-md h-[450px] w-[45%] ' src="/assits/images/pic8.jpg" alt="" />
                    <div className=' '>
                        <div className="">
                            <p>Who we are</p>
                            <div className="py-[20px] ">
                                <Heading level="2">Our job is to provide you <br /> with innovation.</Heading>
                            </div>
                            <div className="pb-[10px] ">
                                <Paragraph variant='homepara'>Nullam volutpat felis finibus id in. Integer velit neque at fringilla cursus <br /> hac purus blandit phasellus dictumst sed. Sed cubilia eu at congue <br /> parturient urna.</Paragraph>
                            </div>
                        </div>
                        <div className="py-[20px] flex flex-wrap ">
                            <div className="flex gap-2 pr-[50px] pt-[10px] items-center">
                                <div className=" bg-[#45a6af] text-white text-[10px] h-[10px] w-0 pl-[5px] pr-[15px] pt-[5px] pb-[15px] rounded-xl">
                                    <FaCheck />
                                </div>
                                <Paragraph variant='homepara'>Exceed your expectations</Paragraph>
                            </div>
                            <div className="flex gap-2 pr-[50px] pt-[10px] items-center">
                                <div className=" bg-[#45a6af] text-white text-[10px] h-[10px] w-0 pl-[5px] pr-[15px] pt-[5px] pb-[15px] rounded-xl">
                                    <FaCheck />
                                </div>
                                <Paragraph variant='homepara'>Professional Expert</Paragraph>
                            </div>
                            <div className="flex gap-2 pr-[50px] pt-[10px] items-center">
                                <div className=" bg-[#45a6af] text-white text-[10px] h-[10px] w-0 pl-[5px] pr-[15px] pt-[5px] pb-[15px] rounded-xl">
                                    <FaCheck />
                                </div>
                                <Paragraph variant='homepara'>Deliver 100% satisfaction</Paragraph>
                            </div>
                            <div className="flex gap-2 pr-[50px] pt-[10px] items-center">
                                <div className=" bg-[#45a6af] text-white text-[10px] h-[10px] w-0 pl-[5px] pr-[15px] pt-[5px] pb-[15px] rounded-xl">
                                    <FaCheck />
                                </div>
                                <Paragraph variant='homepara'>Premium support 24/7</Paragraph>
                            </div>
                        </div>
                        <hr />
                        <div className="bg-[#f35748] hover:bg-[#45a6af] rounded-md w-[30%] mt-[25px]  py-[13px] px-[35px] ">
                            <button className='flex items-center text-white text-[14px]  font-[600] '>Discover More </button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Section