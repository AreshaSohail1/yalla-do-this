import React from 'react'

function Tailimg({ src }) {
  return (
    <div className='overflow-hidden bg-black xl:mt-0 lg:mt-0 md:mt-8 sm:mt-8 mt-8 '>
      <img className='scale-100 bg-cover hover:scale-105 transition 0.5s ease-in h-[270px] object-cover' src={src} alt="" width="100%" />
    </div>
  )
}

export default Tailimg
