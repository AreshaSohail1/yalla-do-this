import React from 'react'
import Tailimg from '../atoms/Tailimg'
import Container from '../atoms/Container'

function Kitchenimages() {
    return (
        <Container>
            <div className='flex flex-wrap gap-[20px]'>
                <Tailimg src="/assits/images/Ele5.jpeg" />
                <Tailimg src="/assits/images/Ele6.jpeg" />
                <Tailimg src="/assits/images/Ele7.jpeg" />
                <Tailimg src="/assits/images/Ele8.jpeg" />
                <Tailimg src="/assits/images/Ele6.jpeg" />
                <Tailimg src="/assits/images/Ele5.jpeg" />
            </div>
        </Container>
    )
}

export default Kitchenimages
