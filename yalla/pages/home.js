import Banner from '@/Components/organisms/Banner'
import Headermain from '@/Components/organisms/Headermain'
import React from 'react'
import Footer from '@/Components/organisms/Footer'
import Section from '@/Components/moleculus/Section'
import MaintainceService from '@/Components/moleculus/MaintainceService'
import Temperature from '@/Components/moleculus/Temperature'
import Relaxation from '@/Components/moleculus/Relaxation'
import Tempature from '@/Components/moleculus/Tempature'


function home() {
  return (
    <div>
        <Headermain/>
        <Banner/>
        <Section/>
        <Temperature/>
        <MaintainceService/>
        <Relaxation/>
        {/* link */}
        <Tempature/>
        <Footer/>
        

    </div>
  )
}

export default home
