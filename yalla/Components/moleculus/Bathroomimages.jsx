import React from 'react'
import Tailimg from '../atoms/Tailimg'
import Container from '../atoms/Container'

function Bathroomimages() {
    return (
        <Container>
            <div className='flex flex-wrap gap-[20px]'>
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
