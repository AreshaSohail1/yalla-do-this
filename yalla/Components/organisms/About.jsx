import React from 'react'
import Aboutbanner from '../moleculus/Aboutbanner'
import Headermain from './Headermain'
import AboutImage from '../moleculus/AboutImage'
import AboutBan2 from './AboutBan2'
import Maintanceflow2 from '../moleculus/Maintanceflow2'

function About() {
    return (
        <div>
            <Headermain />
            <Aboutbanner />
            <AboutBan2 />
            <div className='mt-[50px]'>
                <Maintanceflow2 />
            </div>

            {/* new  import*/}


        </div>
    )
}

export default About
