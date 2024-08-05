import React from 'react'

function AboutText() {
    return (
        <div className='xl:w-[49%] lg:w-[100%] w-[100%] flex flex-col gap-[20px] justify-center items-center text-center'>
            <h2 className='font-bold text-[30px]'>WHY CHOOSE US</h2>
            <p className='text-[16px] text-[#636363] leading-[30px]'>Among the items that a plumber can expertly install, repair, and replace are toilets, kitchen and bathroom sinks, showers, tubs, faucets, dishwasher, water heater, washer for laundry, pipes, water lines, backflow protection, and septic tank systems A plumber is a tradesperson who specializes in installing and maintaining systems used for potable water, and for sewage and drainage in plumbing systems.</p>
            <p className='text-[16px] text-[#636363] leading-[30px]'>
                A plumber is a tradesperson who specializes in installing and maintaining systems used for potable water, and for sewage and drainage in plumbing systems.
            </p>
            <button className='bg-[#3787c3] py-[15px] px-[30px] font-[600] text-[18px] rounded-[5px] capitalize text-[#fff] hover:bg-[white] hover:text-[#3787c3] border-[1px] border-[#3787c3] transition 0.5s ease-in'>
                Read more
            </button>
        </div>
    )
}

export default AboutText
