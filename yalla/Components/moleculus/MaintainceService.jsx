import React from 'react';
import Maintanceflow from './Maintanceflow';

function MaintainceService() {
    return (
        <div>
            <div className="maintances-bg  ">
                <div className="z-50 flex flex-col items-center justify-center gap-[30px] content-container">
                    <h1 className='text-[42px] text-white tracking-[-2px] leading-[1.1em] font-[800] xl:w-[70%]  lg:w-[70%]  md:w-[100%] sm:w-[100%]  w-[100%] '>Discount up to 50% for  maintenance service. Only this month!</h1>
                    <p className="text-white w-full ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <div className="bg-[#f35748] hover:bg-[#45a6af] rounded-md  mt-[25px]  py-[15px] px-[40px] xl:w-[35%] lg:w-[35%] md:w-[40%] sm:w-[60%] w-[80%] ">
                        <button className='flex items-center  text-white text-[16px]  font-[600] '>Claim promo !</button>
                    </div>
                </div>

            </div>
            <Maintanceflow/>
        </div>
    );
}

export default MaintainceService;
