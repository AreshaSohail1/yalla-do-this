import React from 'react'
import Tailimg from '../atoms/Tailimg'
import Container from '../atoms/Container'

function Kitchenimages() {
    return (
        <Container>
            <div className=' gap-[20px] items-center justify-center xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 grid grid-cols-1'>
                <Tailimg src="/assits/images/kitch10.jpg" />
                <Tailimg src="/assits/images/kitch5.jpg" />
                <Tailimg src="/assits/images/kitch6.jpg" />
                <Tailimg src="/assits/images/kitch7.jpg" />
                <Tailimg src="/assits/images/kitch8.jpg" />
                <Tailimg src="/assits/images/kitch9.jpg" />
            </div>
        </Container>
    )
}

export default Kitchenimages
