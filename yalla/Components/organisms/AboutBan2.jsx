import React from 'react'
import AboutImage from '../moleculus/AboutImage'
import AboutText from '../moleculus/AboutText'
import Container from '../atoms/Container'

function AboutBan2() {
    return (
        <Container>
            <div className='flex justify-evenly my-[70px]'>
                <AboutImage />
                <AboutText />
            </div>
        </Container>
    )
}

export default AboutBan2
