import React from 'react'
import Span from '../atoms/Span'
import Paragraph from '../atoms/Paragraph'
import Counter3 from './Counter3'


function Maintanceflow() {
    return (
        <div className=''>
            <div className="z-50 absolute opacity-100 flex rounded-md shadow-2xl  px-[40px] w-[90%] mt-[-90px] ml-[70px] bg-white">
                <div className="my-[25px] py-[15px] px-[73px] text-center ">
                    <Counter3 targetCount={15} startCount={0} contant={"Happy Customer"} />
                </div>
                <div className="border-l my-[25px] py-[15px] px-[73px] text-center ">
                    <Counter3 targetCount={60} startCount={0} contant={"Rating Customer"} />
                </div>
                <div className="border-l my-[25px] py-[15px] px-[73px] text-center ">
                    <Counter3 targetCount={51} startCount={0} contant={"Pro Experts"} />
                </div>
                <div className="border-l my-[25px] py-[15px] px-[73px] text-center ">
                    <Counter3 targetCount={20} startCount={0} contant={"COMPLETE PROJECTS"} />
                </div>
            </div>
        </div>
    )
}

export default Maintanceflow