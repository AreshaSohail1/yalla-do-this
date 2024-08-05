import Container from '../atoms/Container'
import  "../../app/globals.css"
import React from 'react'
import Paragraph from '../atoms/Paragraph'
import Heading from '../atoms/Heading';
import { FaFan } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { PiPipeLight } from "react-icons/pi";
import { MdAutoAwesome } from "react-icons/md";
import { MdOutlineRoofing } from "react-icons/md";

const images = [
    '/assits/images/bg_img.png',
];

function Temperature() {
    return (
        <div className="no-scrollbar relative bg-gray-100 w-full h-[1150px]">
            <div
                className="absolute w-full h-full inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${images[0]}) ` }}
            >
                <Container>
                    <div className='text-center pt-[10%] grid gap-[20px]'>
                        <Paragraph variant='tempara'>WHAT WE OFFER</Paragraph>
                        <Heading level="7"  className=" xl:text-[50px] xl:w-[50%] xl:ml-[25%] lg:text-[50px] lg:w-[50%] lg:ml-[25%] md:text-[40px] md:w-[50%] md:ml-[25%] sm:text-[30px] sm:w-[50%] sm:ml-[25%] text-[30px] w-[70%] ml-[15%]  ">The temperature of cooling is in your hand</Heading>
                        <Paragraph variant='temperature'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.</Paragraph>
                    </div>
                    <div className=' z-100 gap-5  mt-[35px] items-center justify-center  xl:grid xl:grid-cols-3 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 grid grid-cols-1'>
                        <div className='text-center bg-white h-[340px] rounded   '>
                            <div className='flex flex-col items-center justify-center gap-[20px]'>
                                <div className='bg-[#f35748] text-[#ffffff] h-[65px] w-[65px] text-[35px] rounded px-[16px] py-[16px] mx-[168px]  mt-[60px]'>
                                    <FaFan />
                                </div>
                                <div className='grid gap-[20px]'>
                                    <Heading level='8'>AC installation</Heading>
                                    <Paragraph variant='temperature'>Orci eget dolor si morbi blandit torguent<br />tristique mauris sit etiam consectetuer</Paragraph>
                                </div>
                            </div>

                        </div>
                        <div className='text-center bg-white h-[340px] rounded   '>
                            <div className='flex flex-col items-center justify-center gap-[20px]'>
                                <div className='bg-[#f35748] text-[#ffffff] h-[65px] w-[65px] text-[35px] rounded px-[16px] py-[16px] mx-[168px]  mt-[60px]'>
                                <BsTools />
                                </div>
                                <div className='grid gap-[20px]'>
                                    <Heading level='8'>AC Repair</Heading>
                                    <Paragraph variant='temperature'>Orci eget dolor si morbi blandit torguent<br />tristique mauris sit etiam consectetuer</Paragraph>
                                </div>
                            </div>

                        </div>
                        <div className='text-center bg-white h-[340px] rounded   '>
                            <div className='flex flex-col items-center justify-center gap-[20px]'>
                                <div className='bg-[#f35748] text-[#ffffff] h-[65px] w-[65px] text-[35px] rounded px-[16px] py-[16px] mx-[168px]  mt-[60px]'>
                                <PiPipeLight />
                                </div>
                                <div className='flex flex-col items-center justify-center gap-[20px]'>
                                    <Heading level='8'>Duct Cleaning</Heading>
                                    <Paragraph variant='temperature'>Orci eget dolor si morbi blandit torguent<br />tristique mauris sit etiam consectetuer</Paragraph>
                                </div>
                            </div>

                        </div>
                        <div className='text-center bg-white h-[340px]  rounded   '>
                            <div className='flex flex-col items-center justify-center gap-[20px]'>
                                <div className='bg-[#f35748] text-[#ffffff] h-[65px] w-[65px] text-[35px] rounded px-[16px] py-[16px] mx-[168px]  mt-[60px]'>
                                <MdAutoAwesome />
                                </div>
                                <div className='grid gap-[20px]'>
                                    <Heading level='8'>Duct Coating</Heading>
                                    <Paragraph variant='temperature'>Orci eget dolor si morbi blandit torguent<br />tristique mauris sit etiam consectetuer</Paragraph>
                                </div>
                            </div>

                        </div>
                        <div className='text-center bg-white h-[340px]  rounded   '>
                            <div className='flex flex-col items-center justify-center gap-[20px]'>
                                <div className='bg-[#f35748] text-[#ffffff] h-[65px] w-[65px] text-[35px] rounded px-[16px] py-[16px] mx-[168px]  mt-[60px]'>
                                <MdOutlineRoofing />
                                </div>
                                <div className='grid gap-[20px]'>
                                    <Heading level='8'>Attic Insulation</Heading>
                                    <Paragraph variant='temperature'>Orci eget dolor si morbi blandit torguent<br />tristique mauris sit etiam consectetuer</Paragraph>
                                </div>
                            </div>

                        </div>
                        <div className='text-center bg-white h-[340px]  rounded   '>
                            <div className='flex flex-col items-center justify-center gap-[20px]'>
                                <div className='bg-[#f35748] text-[#ffffff] h-[65px] w-[65px] text-[35px] rounded px-[16px] py-[16px] mx-[168px]  mt-[60px]'>
                                    <FaFan />
                                </div>
                                <div className='grid gap-[20px]'>
                                    <Heading level='8'>Air_Quality</Heading>
                                    <Paragraph variant='temperature'>Orci eget dolor si morbi blandit torguent<br />tristique mauris sit etiam consectetuer</Paragraph>
                                </div>
                            </div>

                        </div>

                    </div>

                </Container>

            </div>
        </div>

    )
}

export default Temperature