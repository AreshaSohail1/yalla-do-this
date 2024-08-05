import React from 'react'
import Container from '../atoms/Container'


function Kitchenban2() {
    return (

        <Container>
            <div className='my-[60px] flex justify-between mt-[70px]'>
                <div className="w-[48%] shadow-slate-500 ">
                    <img src="/assits/images/kitch3.jpg" alt="" width='100%' height='100%' />
                </div>
                <div className=' w-[48%]  flex flex-col gap-[20px]'>
                    <h1 className='text-[34px] font-semibold leading-[41px] text-[black]'>
                        Rely On Us For Kitchen Fix Dubai: We Are Top Tile Fixing Contractors In Dubai!</h1>
                    <p className='text-[18px] font-400 leading-[35px] text-[black]'>
                        As one of the top tile fixing contractors in Dubai, our team at Rely On Us is proud to offer our professional services to residents and businesses throughout the city. We have a team of experienced and qualified  who are available to help with any tile fixing needs you may have.
                    </p>
                    <p className="text-[17px] font-400 leading-[35px] text-[black]">
                        Whether you need help with a small repair or a complete tile installation, we are here to help. We also offer a wide range of other services, including tile cleaning and tile restoration. No matter what your needs are, we are confident that we can provide you with the services you need.
                    </p>
                </div>
            </div>
        </Container>

    )
}

export default Kitchenban2
