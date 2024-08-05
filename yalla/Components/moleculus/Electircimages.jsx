import React from 'react'
import Tailimg from '../atoms/Tailimg'
import Container from '../atoms/Container'

function Electricimages() {
  return (
    <Container>
      <div className=' gap-[20px] items-center justify-center xl:grid xl:grid-cols-2 lg:grid lg:grid-cols-2 md:grid md:grid-cols-1 sm:grid sm:grid-cols-1 grid grid-cols-1'>
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

export default Electricimages
