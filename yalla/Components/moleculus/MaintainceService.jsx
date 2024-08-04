import React from 'react';
import Maintanceflow from './Maintanceflow';

function MaintainceService() {
    return (
        <div>
            <div className="maintances-bg  ">
                <div className="z-50 grid gap-[30px] content-container">
                    <h1 className='text-[42px] text-white tracking-[-2px] leading-[1.1em] font-[800]'>Discount up to 50% for <br /> maintenance service. Only <br /> this month!</h1>
                    <p className="text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec <br /> ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <div className="bg-[#f35748] hover:bg-[#45a6af] rounded-md w-[35%] mt-[25px] mx-[35%]  py-[15px] px-[40px] ">
                        <button className='flex items-center  text-white text-[16px]  font-[600] '>Claim promo !</button>
                    </div>
                </div>

            </div>
            <Maintanceflow/>
        </div>
    );
}

export default MaintainceService;
