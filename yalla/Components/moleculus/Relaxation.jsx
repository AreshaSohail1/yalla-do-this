import Container from '../atoms/Container'
import React from 'react'
import Paragraph from '../atoms/Paragraph'
import Heading from '../atoms/Heading'
import { LuCrown } from "react-icons/lu";
import { TfiMedall } from "react-icons/tfi";
import { LiaUserCheckSolid } from "react-icons/lia";
import { MdSupportAgent } from "react-icons/md";

function Relaxation() {
    return (
        <div>

            <Container>
                <div className='gap-[50px] flex py-[10%]  '>
                    <div className=' grid w-[70%] gap-[10px]'>
                        <Paragraph variant='tempara'>Why choose us</Paragraph>
                        <Heading level='7'>Relaxation and <br /> your satisfaction.</Heading>
                        <Paragraph variant='temperature'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut  ullamcorper mattis, pulvinar dapibus <br />leo.</Paragraph>
                    </div>
                    <div className='flex '>
                        <div className='flex-wrap flex gap-[15px]'>
                            <div className=' shadow-lg bg-[#4ab7c3] flex h-[135px] w-[370px] rounded gap-[20px] py-[15px] pl-[12px]' >
                                <div className='text-[42px] text-[#091736]'>
                                    <LuCrown />
                                </div>
                                <div>
                                    <div className='text-[22px]  text-[#ffffff] font-[700] leading-[1em] py-[5px]'>
                                        Exceed your expectations

                                    </div>
                                    <Paragraph variant='Relaxpara'> Lacus netus arcu gravida feugiat si<br /> porttitor consectetuer penatibus <br />augue.</Paragraph>
                                </div>
                            </div>
                            <div className='bg-[#ffffff]  shadow-lg flex h-[135px] w-[370px] rounded gap-[20px] py-[15px] pl-[12px]'>
                                <div className='text-[42px] text-[#f35748]'>
                                    <TfiMedall />
                                </div>
                                <div>
                                    <div className='text-[22px]  text-[#091736] font-[700] leading-[1em] py-[5px]'>
                                        Deliver 100% satisfaction
                                    </div>
                                    <Paragraph variant='temperature'>Lacus netus arcu gravida feugiat si<br /> porttitor consectetuer penatibus <br />augue.</Paragraph>
                                </div>
                            </div>
                            <div className='bg-[#ffffff] shadow-lg flex h-[135px] w-[370px] rounded gap-[20px] py-[15px] pl-[12px]'>
                                <div className='text-[42px] text-[#f35748]'>
                                    <LiaUserCheckSolid />
                                </div>
                                <div>
                                    <div className='text-[22px]  text-[#091736] font-[700] leading-[1em] py-[5px]'>
                                        Professional Expert
                                    </div>
                                    <Paragraph variant='temperature'>Lacus netus arcu gravida feugiat si<br /> porttitor consectetuer penatibus <br />augue.</Paragraph>
                                </div>
                            </div>
                            <div className='bg-[#ffffff]  shadow-lg flex h-[135px] w-[370px] rounded gap-[20px] py-[15px] pl-[12px]'>
                                <div className='text-[42px] text-[#f35748]'>
                                    <MdSupportAgent />
                                </div>
                                <div>
                                    <div className='text-[22px]  text-[#091736] font-[700] leading-[1em] py-[5px]'>

                                        Premium support 24/7
                                    </div>
                                    <Paragraph variant='temperature'>Lacus netus arcu gravida feugiat si<br /> porttitor consectetuer penatibus <br />augue.</Paragraph>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Relaxation