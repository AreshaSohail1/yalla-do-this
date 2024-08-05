import React from 'react'
import Tailimg from '../atoms/Tailimg'
import Container from '../atoms/Container'

function Kitchenimages() {
    return (
        <Container>
            <div className='flex flex-wrap gap-[20px]'>
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
