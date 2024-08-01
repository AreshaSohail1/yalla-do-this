import React from 'react'
import AnchorTag from '../atoms/Anchortag'
import "../../app/globals.css"
import { IoIosArrowDown } from "react-icons/io";

function Header() {
    return (
        <div>
            <div className=''>
                <ul className='flex  gap-[40px] '>
                    <li> <AnchorTag variant='Header' href='/'>Home</AnchorTag></li>
                    <li> <AnchorTag variant='Header' href='/'>About</AnchorTag></li>
                    <li> <AnchorTag variant='Header' href='/services'>Services  <IoIosArrowDown /></AnchorTag>
                    <ul className='dropdown  absolute bg-white opacity-5 z-[9999] invisible py-[10px] pr-[80px] pl-[30px]'>
                        <li><AnchorTag variant='Headerh' href='/acservice'> AC Services</AnchorTag></li>
                        <li><AnchorTag variant='Headerh' href=''>over Servcies</AnchorTag></li>
                        <li><AnchorTag variant='Headerh' href=''>Handyman & Plumber</AnchorTag></li>
                        <li><AnchorTag variant='Headerh' href=''>Electrician Services</AnchorTag></li>
                        <li><AnchorTag variant='Headerh' href=''>Painting & Partitions</AnchorTag></li>
                        <li><AnchorTag variant='Headerh' href=''>Cleaning Services</AnchorTag></li>
                        <li><AnchorTag variant='Headerh' href=''>Moving & Relocating</AnchorTag></li>
                        <li><AnchorTag variant='Headerh' href=''>Interior Design</AnchorTag></li>
                        <li><AnchorTag variant='Headerh' href=''>Garden Maintenance</AnchorTag></li>
                        <li><AnchorTag variant='Headerh' href=''>Swimming Pool & Jacuzzi</AnchorTag></li>
                        <li><AnchorTag variant='Headerh' href=''>Blog</AnchorTag></li>
                    </ul>
                    
                    </li>
                    
                    <li> <AnchorTag variant='Header'>Contact</AnchorTag></li>
                </ul>
            </div>
        </div>
    )
}

export default Header