import React from 'react';
import Container from '../atoms/Container';
import { FaRegEnvelope } from "react-icons/fa";
import Span from '../atoms/Span';
import { FaMobileAlt } from "react-icons/fa";
import Heading from '../atoms/Heading';
import AnchorTag from '../atoms/Anchortag';
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import Paragraph from '../atoms/Paragraph'
import { FaYoutube, FaInstagram } from "react-icons/fa";

function Footer() {

    return (
        <div className="">
            <Container>

                <div className='mt-[50px]'>

                    <hr />
                    <div className=' pt-[5%] xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:mt-5 sm:grid-cols-1 grid grid-cols-1   '>

                        <div>
                            <div className='relative gap-[10px] bottom-[20px] flex flex-col items-center justify-center mt-6'>
                                <img src="/assits/images/logo1.png" alt="" className='xl:w-[90px] lg:w-[130px] md:w-[150px] sm:w-[50%] w-[50%]' />
                                <Span level="footer">Cempaka Wangi No 22</Span>
                                <Span level="footer">Dubai</Span>
                            </div>
                            <div className='grid gap-[10px] flex flex-col items-center justify-center mt-6'>
                                <div className='flex gap-[15px] '>
                                    <FaRegEnvelope className='text-[#F97300] ' />
                                    <Span level='footer'>waqaswqspk@gmail.com</Span>
                                </div>
                                <div className='flex gap-[15px]'>
                                    <FaMobileAlt className='text-[#F97300] ' />
                                    <Span level='footer'>+971 0508786126</Span>
                                </div>
                            </div>
                            <div>
                                <div className='xl:flex  gap-[20px] my-[12%] text-[#F97300] text-[18px] sm:flex sm:items-center sm:justify-center flex items-center justify-center  '>
                                    <FaFacebookF className=' hover:text-[#4ab7c3] ease-in duration-300' />
                                    <FaInstagram className=' hover:text-[#4ab7c3] ease-in duration-300' />
                                    <FaTwitter className=' hover:text-[#4ab7c3] ease-in duration-300' />
                                    <FaYoutube className=' hover:text-[#4ab7c3] ease-in duration-300' />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center mt-6'>
                            <Heading level="4">Company</Heading>
                            <div className='grid  gap-[10px] mt-[20px] '>
                                <AnchorTag variant='footer'>About us</AnchorTag>
                                <AnchorTag variant='footer'>Our team</AnchorTag>
                                <AnchorTag variant='footer'>Careers</AnchorTag>
                                <AnchorTag variant='footer'>News & Article</AnchorTag>
                                <AnchorTag variant='footer'>Legal Notes</AnchorTag>
                            </div>
                        </div>

                        <div className='flex flex-col mt-6 items-center justify-center'>
                            <Heading level="4">Support</Heading>
                            <div className='grid gap-[10px] mt-[20px] '>
                                <AnchorTag variant='footer'>Contact Us</AnchorTag>
                                <AnchorTag variant='footer'>Ticket Support</AnchorTag>
                                <AnchorTag variant='footer'>FAQ</AnchorTag>
                            </div>
                        </div>

                        <div className='flex flex-col items-center justify-center my-6  '>
                            <Heading level="4">Newsletter</Heading>
                            <div className="mt-[20px] grid gap-[10px] ">
                                <Span level='footer'>Signup our newsletter to get update information, news, insight or promotions.</Span>
                                <input type="text" placeholder=' Email' className='w-[100%] h-[45px] outline-[#F97300] text-[14px] px-[20px] bg-[#f8f7f7] py-[5px]  text-[#b4b3b3]  pb-[10px]  ' />
                                <div className="bg-[#f35748] hover:bg-[#45a6af] flex justify-center  rounded-md w-[100%] py-[15px] px-[40px] ">
                                    <button className='flex items-center gap-[10px] text-white text-[16px]  font-[600] '>Sign up<FaRegEnvelope className='text-white ' /></button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div >
            </Container >
            <div className="bg-[#45a6af] text-[14px]  text-white  w-[100%] py-[30px]  flex flex-col items-center justify-center sm:flex sm:flex-col sm:items-center sm:justify-center md:flex md:flex-row md:px-[10px] md:items-center md:justify-between lg:flex lg:flex-row lg:px-[50px] lg:justify-between xl:flex xl:flex-row xl:px-[50px] xl:justify-between  ">
                <p className='order-2 sm:order-2 md:order-none lg:order-none xl:order-none'>Copyright © 2022 Jezzcool, All rights reserved. Powered by MoxCreative.</p>
                <div className=' gap-[10px] xl:flex xl:flex-row xl:pb-0 xl:items-center xl:jusitfy-center lg:flex lg:flex-row lg:items-center lg:pb-0 lg:jusitfy-center md:xl:flex md:flex-row md:items-center md:pb-0 md:jusitfy-center sm:flex sm:flex-col sm:items-center sm:pb-4 sm:jusitfy-center flex flex-col pb-4 items-center jusitfy-center order-1 sm:order-1 md:order-none lg:order-none xl:order-none'>
                    <AnchorTag >Term of use</AnchorTag>
                    <AnchorTag >Privacy policy</AnchorTag>
                    <AnchorTag >Cookie policy</AnchorTag>
                </div>
            </div>
        </div>
    );
}

export default Footer;
