import React from 'react'
import Span from '../atoms/Span'
import Paragraph from '../atoms/Paragraph'
function Offer({text, src,contant,Para}) {
    return (
        <div>
            <div>
            <div className='text-[42px] text-[#091736]   font-[800]'>{contant}</div>
            <div className='  text-[16px] font-[400] '>{Para}</div>
            </div>
            <div className='  flex  '>
                <div className=''>
                    <img className='h-[200px]' src={src} alt="" />
                    <div className='bg-white text-center py-[10px]'>
                    <Span level='offers'>{text}</Span>
                    </div>
                </div>  

                 </div>
                 
        </div>
    )
}

export default Offer