import Container from '../atoms/Container'
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
        <div className="relative bg-gray-100 w-full h-[1150px] overflow-hidden">
            <div
                className="absolute w-full h-full inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${images[0]}) ` }}
            >
                <div className=""></div>
                <Container>
                    <div className='text-center pt-[10%] grid gap-[20px]'>
                        <Paragraph variant='tempara'>WHAT WE OFFER</Paragraph>
                        <Heading level='7'>The temperature of cooling <br /> is in your hand</Heading>
                        <Paragraph variant='temperature'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.</Paragraph>
                    </div>
                    <div className='flex-wrap flex  z-100 gap-[20px] mt-[35px]'>
                        <div className='text-center bg-white h-[340px] rounded w-[32%]  '>
                            <div className='grid gap-[20px]'>
                                <div className='bg-[#f35748] text-[#ffffff] h-[65px] w-[65px] text-[35px] rounded px-[16px] py-[16px] mx-[168px]  mt-[60px]'>
                                    <FaFan />
                                </div>
                                <div className='grid gap-[20px]'>
                                    <Heading level='8'>AC installation</Heading>
                                    <Paragraph variant='temperature'>Orci eget dolor si morbi blandit torguent<br />tristique mauris sit etiam consectetuer</Paragraph>
                                </div>
                            </div>

                        </div>
                        <div className='text-center bg-white h-[340px] w-[32%] rounded   '>
                            <div className='grid gap-[20px]'>
                                <div className='bg-[#f35748] text-[#ffffff] h-[65px] w-[65px] text-[35px] rounded px-[16px] py-[16px] mx-[168px]  mt-[60px]'>
                                <BsTools />
                                </div>
                                <div className='grid gap-[20px]'>
                                    <Heading level='8'>AC Repair</Heading>
                                    <Paragraph variant='temperature'>Orci eget dolor si morbi blandit torguent<br />tristique mauris sit etiam consectetuer</Paragraph>
                                </div>
                            </div>

                        </div>
                        <div className='text-center bg-white h-[340px] w-[32%] rounded   '>
                            <div className='grid gap-[20px]'>
                                <div className='bg-[#f35748] text-[#ffffff] h-[65px] w-[65px] text-[35px] rounded px-[16px] py-[16px] mx-[168px]  mt-[60px]'>
                                <PiPipeLight />
                                </div>
                                <div className='grid gap-[20px]'>
                                    <Heading level='8'>Duct Cleaning</Heading>
                                    <Paragraph variant='temperature'>Orci eget dolor si morbi blandit torguent<br />tristique mauris sit etiam consectetuer</Paragraph>
                                </div>
                            </div>

                        </div>
                        <div className='text-center bg-white h-[340px] w-[32%] rounded   '>
                            <div className='grid gap-[20px]'>
                                <div className='bg-[#f35748] text-[#ffffff] h-[65px] w-[65px] text-[35px] rounded px-[16px] py-[16px] mx-[168px]  mt-[60px]'>
                                <MdAutoAwesome />
                                </div>
                                <div className='grid gap-[20px]'>
                                    <Heading level='8'>Duct Coating</Heading>
                                    <Paragraph variant='temperature'>Orci eget dolor si morbi blandit torguent<br />tristique mauris sit etiam consectetuer</Paragraph>
                                </div>
                            </div>

                        </div>
                        <div className='text-center bg-white h-[340px] w-[32%] rounded   '>
                            <div className='grid gap-[20px]'>
                                <div className='bg-[#f35748] text-[#ffffff] h-[65px] w-[65px] text-[35px] rounded px-[16px] py-[16px] mx-[168px]  mt-[60px]'>
                                <MdOutlineRoofing />
                                </div>
                                <div className='grid gap-[20px]'>
                                    <Heading level='8'>Attic Insulation</Heading>
                                    <Paragraph variant='temperature'>Orci eget dolor si morbi blandit torguent<br />tristique mauris sit etiam consectetuer</Paragraph>
                                </div>
                            </div>

                        </div>
                        <div className='text-center bg-white h-[340px] w-[32%] rounded   '>
                            <div className='grid gap-[20px]'>
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