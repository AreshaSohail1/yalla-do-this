import React from 'react'
import Tailimg from '../atoms/Tailimg'
import Container from '../atoms/Container'

function Bathroomimages() {
    return (
        <Container>
            <div className='gap-[20px] items-center justify-center xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 grid grid-cols-1'>
                <Tailimg src="/assits/images/bath2.jpg" />
                <Tailimg src="/assits/images/bath3.jpg" />
                <Tailimg src="/assits/images/bath4.jpg" />
                <Tailimg src="/assits/images/bath5.jpg" />
                <Tailimg src="/assits/images/bath7.jpg" />
                <Tailimg src="/assits/images/bath10.jpg" />
            </div>
        </Container>
    )
}

export default Bathroomimages
