import React from 'react'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'

function ServicesMoli({ headeing, para, src }) {
  return (
    <div className='flex items-center gap-[20px] border hover:shadow-lg py-[50px] px-[30px]'>
      <img src={src} alt="" width={100} height={80} />
      <div className=''>
        <Heading level='8'>{headeing}</Heading>
        <Paragraph variant='homepara'>{para}</Paragraph>
      </div>

    </div>
  )
}

export default ServicesMoli