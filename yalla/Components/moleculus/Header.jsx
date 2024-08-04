import React from 'react'
import AnchorTag from '../atoms/Anchortag'
import "../../app/globals.css"
import { IoIosArrowDown } from "react-icons/io";

function Header() {
    return (
        <div>
            <div className=''>
                <ul className='flex  gap-[50px] '>
                    <li> <AnchorTag variant='Header' href='/'>Home</AnchorTag></li>
                    <li> <AnchorTag variant='Header' href='/'>About</AnchorTag></li>
                    <li> <AnchorTag variant='Header' href='/services'>Services  <IoIosArrowDown /></AnchorTag>
                    <ul className='dropdown  absolute bg-white opacity-5 z-[9999] invisible py-[10px] pr-[80px] pl-[30px]'>
                        <li><AnchorTag variant='Headerh' href='/acservice'> AC Services</AnchorTag></li>
                        <li><AnchorTag variant='Headerh' href=''>over Servcies</AnchorTag></li>
                        <li><AnchorTag variant='Headerh' href='/tileservice'>Tiles Fixing</AnchorTag></li>
                        <li><AnchorTag variant='Headerh' href='/electricservice'>Electrician Services</AnchorTag></li>
                        <li><AnchorTag variant='Headerh' href='/handyman'>Handyman & Plumber</AnchorTag></li>
                        <li><AnchorTag variant='Headerh' href=''>Electrician Services</AnchorTag></li>
                        <li><AnchorTag variant='Headerh' href=''>Cleaning Services</AnchorTag></li>
                        <li><AnchorTag variant='Headerh' href=''>Interior Design</AnchorTag></li>
                    </ul>
                    
                    </li>
                    
                    <li> <AnchorTag variant='Header' href='/contactus'>Contact</AnchorTag></li>
                </ul>
            </div>
        </div>
    )
}

export default Header