import React from 'react'
import Cellingbanner from '../moleculus/Cellingbanner'
import Cellingall from './cellingall'
import Getintouch from '../moleculus/Getintouch'
import Acservicemain from './Acservicemain'
import Servicenow from '../moleculus/Servicenow'
import Offermain from './Offermain'
import Howwork from '../moleculus/Howwork'
import Footer from './Footer'

function Cellingmain() {
  return (
    <div>
        <Cellingall/>
        <Servicenow/>
        <Offermain/>
        <Footer/>
    </div>
  )
}

export default Cellingmain