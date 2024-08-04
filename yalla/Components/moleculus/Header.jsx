import React from 'react'
import AnchorTag from '../atoms/Anchortag'
import "../../app/globals.css"
    
function  Header() {
    return (
        <div>
            <div className=''>
                <ul className='flex  gap-[50px] '>
                    <li> <AnchorTag variant='Header' href='/'>Home</AnchorTag></li>
                    <li> <AnchorTag variant='Header' href='/about'>About</AnchorTag></li>
                    <li> <AnchorTag variant='Header' href='/servie'>Services </AnchorTag></li>
                    <li> <AnchorTag variant='Header' href='/contactus'>Contact</AnchorTag></li>
                </ul>
            </div>
        </div>
    )
}

export default Header