import Banner from '@/Components/organisms/Banner'
import Headermain from '@/Components/organisms/Headermain'
import React from 'react'
import Footer from '@/Components/organisms/Footer'
import Section from '@/Components/moleculus/Section'
import MaintainceService from '@/Components/moleculus/MaintainceService'
import Temperature from '@/Components/moleculus/Temperature'
import Relaxation from '@/Components/moleculus/Relaxation'
import Tempature from '@/Components/moleculus/Tempature'
import ServicesMoli from '@/Components/moleculus/ServicesMoli'
import ServicesAll from '@/Components/organisms/ServicesAll'
import Container from '@/Components/atoms/Container'
import Work from '@/Components/moleculus/Work'

function home() {
  return (
    <div>
        <Headermain/>
        <Banner/>
        <Section/>
        <Temperature/>
        <MaintainceService/>
        <Relaxation/>
        <Work/>
        <Tempature/>

        <Footer/>
        

    </div>
  )
}

export default home
