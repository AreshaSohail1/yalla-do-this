import React from 'react'
import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import Offer from '../moleculus/Offer'
import Howwork from '../moleculus/Howwork'
import Clints from '../moleculus/Clints'
import Getintouch from '../moleculus/Getintouch'

function Offermain() {
  return (
 <div>
     <div  className='bg-[#f3f5f9] '>
        <Container>
            <div className=''>
                <Offer contant={'What We Offer'} />
                <Offer Para={'We offer the best ac repair services in UAE for any type of ac problems you might be facing, we also provide best cooling solutions and service for your home and office. We are a team of experts with many years of experience in the field that will surely help you out. You can also call us if you have any other queries regarding air conditioners or air conditioner repairing services that we provide.'} />
                
        </div>
            <div className='flex gap-[20px]'>
            <Offer text={'AC Cleaning'} src={'/assits/images/uaequick-ac-cleaing.jpg'} />
            <Offer text={'jAC Duct Cleaning'} src={"assits/images/uaequick-ac-duct.jpg"} />
            <Offer text={"AC Installation"} src={'assits/images/uaequick-ac-installations.jpg'} />
            <Offer text={"AC Maintenances"} src={'assits/images/uaequick-ac-maintenance.jpg'} />
            </div>
        </Container>
    </div>
    <Howwork/>
    <Clints/>
    <Getintouch/>
 </div>
  )
}

export default Offermain