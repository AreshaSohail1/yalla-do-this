import React from 'react'
import Cellingbanner from '../moleculus/Cellingbanner'
import Cellingall from './cellingall'
import Getintouch from '../moleculus/Getintouch'
import Acservicemain from './Acservicemain'
import Servicenow from '../moleculus/Servicenow'
import Offermain from './Offermain'
import Howwork from '../moleculus/Howwork'
import Cellingimg from '../moleculus/cellingimg'
import Clints from '../moleculus/Clints'
function Cellingmain() {
  return (
    <div>
        <Cellingall/>
        <Servicenow/>
        <Cellingimg/> 
        <Howwork/>
        <Clints/>
        <Getintouch/>      
    </div>
  )
}

export default Cellingmain