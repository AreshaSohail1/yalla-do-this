import Link from 'next/link';
import React from 'react'
import { FaArrowRight } from "react-icons/fa";


const PlumberResponse = () => {
    return (
        <div className=' mt-[50px] mb-[50px] px-[8%] flex justify-between items-center ' >
            <div className="flex w-[48%] justify-between ">
                <img data-aos="fade-right" data-aos-duration="1000" className='w-[100%] rounded-[10px] ' src="/assits/images/plumber1.jpg" alt="" />
                <img data-aos="fade-right" data-aos-duration="1500" className='w-[100%] rounded-[10px] ' src="/assits/images/plumber2.jpg" alt="" />
            </div>
            <div data-aos="zoom-in-left" className=" flex flex-col gap-[15px] w-[47%] ">
                <h3 data-aos="fade-up-left" data-aos-duration="1000" className=' text-[33px] font-semibold w-[300px]  ' >We Respond to
                    Your Call Quickly</h3>
                <p data-aos="fade-up-left" data-aos-duration="1500" className=' text-[15px] text-gray-500 font-medium ' >You can trust our plumbers and the quality
                    professionalism of our work. Every residential plumbing
                    technician for the uniformed and badged, and will arrive
                    at your home.</p>
                <Link href='#' data-aos="fade-up-left" data-aos-duration="2000"  className='decoration-none text-white text-[14px] font-medium text-white bg-blue-500 border-[1px] border-blue-500  hover:text-blue-500 hover:bg-white duration-[0.3s] ease-in-out py-[10px] rounded-[13px] w-[120px] text-center  flex items-center gap-[5px] justify-center' > Book A Visits <FaArrowRight /> </Link>

            </div>
        </div>
    )
}

export default PlumberResponse