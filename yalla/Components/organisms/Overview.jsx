import React from 'react'
import ServicesMoli from '../moleculus/ServicesMoli'
import AnchorTag from '../atoms/Anchortag'

function Overview() {
    return (
        <div>
            <div className='grid grid-cols-2 gap-9'>
                <AnchorTag href=''>
                    <ServicesMoli src='/assits/images/plumber/paint.jpg' headeing='Paint Works' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
                </AnchorTag>
                <AnchorTag href=''>
                    <ServicesMoli src='/assits/images/plumber/bath.jpg' headeing='Bathroom Renovation' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
                </AnchorTag>
                <AnchorTag href=''>
                    <ServicesMoli src='/assits/images/plumber/celling.jpg' headeing='Celling' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
                </AnchorTag>
                <AnchorTag href=''>
                    <ServicesMoli src='/assits/images/plumber/acclean.jpg' headeing='AC Deep Cleaning' para={'Have a Business Plan for Your Plumbing Company Successful plumbers'} />
                </AnchorTag>
            </div>
            <div className='flex justify-center items-center my-10'>
                <AnchorTag href='/servie'>
                    <button className='bg-[#3787c3] py-[15px] px-[30px] font-[600] text-[18px] rounded-[5px] capitalize text-[#fff] hover:bg-[white] hover:text-[#3787c3] border-[1px] border-[#3787c3] transition 0.5s ease-in'>
                        Read more
                    </button>
                </AnchorTag>
            </div>
        </div>
    )
}

export default Overview
