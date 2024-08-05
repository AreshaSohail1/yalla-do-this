import React from 'react'

function Tailimg({ src }) {
  return (
    <div className='overflow-hidden w-[49%] bg-black'>
      <img className='scale-100 bg-cover hover:scale-105 transition 0.5s ease-in h-[270px] object-cover' src={src} alt="" width="100%" />
    </div>
  )
}

export default Tailimg
