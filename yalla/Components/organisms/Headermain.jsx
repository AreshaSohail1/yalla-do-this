import React from 'react'
import Header from '../moleculus/Header'
import Logo from '../atoms/Logo'
import '../../app/globals.css'
import Container from '../atoms/Container'


function Headermain() {
    return (
        <div data-aos="fade-down" >
           <Container>
           <div className='flex justify-between text-center items-center pt-[10px]'>
                <Logo  href='' src='/asitd/images/logo.png' />
            <Header />
            </div>
           </Container>
        </div>
    )
}

export default Headermain