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
                    <div className='flex  gap-[13%] pt-[5%]'>

                        <div>
                            <div className='relative grid gap-[10px] bottom-[20px]'>
                                <img src="/assits/images/logo1.png" alt="" className='w-[90px]' />
                                <Span level="footer">Cempaka Wangi No 22</Span>
                                <Span level="footer">Dubai</Span>
                            </div>
                            <div className='grid gap-[10px] '>
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
                                <div className='flex gap-[20px] my-[12%] text-[#F97300] text-[18px]'>
                                    <FaFacebookF className=' hover:text-[#4ab7c3] ease-in duration-300' />
                                    <FaInstagram className=' hover:text-[#4ab7c3] ease-in duration-300' />
                                    <FaTwitter className=' hover:text-[#4ab7c3] ease-in duration-300' />
                                    <FaYoutube className=' hover:text-[#4ab7c3] ease-in duration-300' />
                                </div>
                            </div>
                        </div>

                        <div>
                            <Heading level="4">Company</Heading>
                            <div className='grid  gap-[10px] mt-[20px]'>
                                <AnchorTag variant='footer'>About us</AnchorTag>
                                <AnchorTag variant='footer'>Our team</AnchorTag>
                                <AnchorTag variant='footer'>Careers</AnchorTag>
                                <AnchorTag variant='footer'>News & Article</AnchorTag>
                                <AnchorTag variant='footer'>Legal Notes</AnchorTag>
                            </div>
                        </div>

                        <div>
                            <Heading level="4">Support</Heading>
                            <div className='grid gap-[10px] mt-[20px]'>
                                <AnchorTag variant='footer'>Contact Us</AnchorTag>
                                <AnchorTag variant='footer'>Ticket Support</AnchorTag>
                                <AnchorTag variant='footer'>FAQ</AnchorTag>
                            </div>
                        </div>

                        <div>
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
            <div className="bg-[#45a6af] text-[14px] justify-between text-white flex w-[100%] py-[30px] px-[50px] ">
                <p>Copyright © 2022 Jezzcool, All rights reserved. Powered by MoxCreative.</p>
                <div className='flex gap-[10px]  '>
                    <AnchorTag >Term of use</AnchorTag>
                    <AnchorTag >Privacy policy</AnchorTag>
                    <AnchorTag >Cookie policy</AnchorTag>
                </div>
            </div>
        </div>
    );
}

export default Footer;
