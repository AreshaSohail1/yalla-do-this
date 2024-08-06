import React from 'react'

function Tempature() {
    return (
        <div>
            <div className="temp-bg  ">
                <div className=" pt-[50px] gap-[30px] flex flex-col items-center justify-center text-center">
                    <h1 className='text-[32px] px-[20px] text-white tracking-[-2px] leading-[1.1em] font-[400] sm:font-[200] sm:text-[32px]'>The temperature of cooling <br /> is in your hand</h1>
                    <p className="text-white text-[13px] px-[20px] text-[center]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <div className="bg-[#f35748] hover:bg-[#45a6af] rounded-md mt-[25px]  py-[15px] px-[40px]  ">
                        <button className='flex items-center  text-white text-[16px]  font-[600] '>Discover more</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Tempature