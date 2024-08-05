import React from 'react'
import Tailimg from '../atoms/Tailimg'
import Container from '../atoms/Container'

function Glassimages() {
    return (
        <Container>
            <div className='flex flex-wrap gap-[20px]'>
                <Tailimg src="/assits/images/glass9.jpg" />
                <Tailimg src="/assits/images/glass8.jpg" />
                <Tailimg src="/assits/images/glass3.jpg" />
                <Tailimg src="/assits/images/glass4.jpg" />
                <Tailimg src="/assits/images/glass5.jpg" />
                <Tailimg src="/assits/images/glass6.jpg" />
            </div>
        </Container>
    )
}

export default Glassimages
