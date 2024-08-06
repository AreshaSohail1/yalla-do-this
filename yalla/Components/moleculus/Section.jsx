import React from 'react'
import Paragraph from '../atoms/Paragraph'
import Heading from '../atoms/Heading'
import { FaCheck } from "react-icons/fa";


function Section() {
    return (
        <div className=''>
            <div className=' px-[6%] py-[10%] '>

                <div className=' gap-[8%] xl:flex xl:flex-row xl:items-center xl:justify-center lg:flex lg:flex-row lg:items-center lg:justify-center md:flex md:flex-col md:items-center md:justify-center sm:flex sm:flex-col sm:items-center sm:justify-center flex flex-col items-center justify-center'>
                    <img className='rounded-md h-[450px] xl:w-[45%] lg:w-[45%]  md:w-[100%]  sm:w-[100%]  w-[100%] ' src="/assits/images/pic8.jpg" alt="" />
                    <div className='left xl:my-0 lg:my-0 md:my-6 sm:my-6 my-8 '>
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
                        <div className="bg-[#f35748] hover:bg-[#45a6af] rounded-md  mt-[25px]  py-[13px]  flex justify-center items-center xl:w-[30%] lg:w-[35%] md:w-[30%] sm:w-[27%] w-[43%] ">
                            <button className='flex items-center text-white text-[14px]  font-[600] '>Discover More </button>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Section