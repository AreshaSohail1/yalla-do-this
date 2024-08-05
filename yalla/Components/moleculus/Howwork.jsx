import React from 'react'
import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import Span from '../atoms/Span'

function Howwork() {
    return (
        <Container>
            <div>

                <div className='text-center pt-[5%] '>
                    <Heading level='2'>How We Work</Heading>
                    <Paragraph variant='offer'>We are a leading AC Repairing services in UAE. We provide the best service for your home and office appliance at an affordable price. With years of experience, we can handle any repair job large or small.</Paragraph>
                </div>
                <div className='pt-[4%]'>
                    <div className='flex gap-[50px]'>
                        <div className=''>
                            <Span level='work'>01.</Span>
                            <Span level='work2'>Communicate</Span>
                        </div>
                        <div className='border-l-2 px-[2%] '>
                            <Span level='work'>02.</Span>
                            <Span level='work2'>Plans & Calculations</Span>
                        </div>
                        <div className='border-l-2 px-[2%]  '>
                            <Span level='work'>03.</Span>
                            <Span level='work2'>Executions</Span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    )
}

export default Howwork