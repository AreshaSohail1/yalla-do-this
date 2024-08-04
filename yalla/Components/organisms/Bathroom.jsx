import React from 'react'
import Headermain from './Headermain'
import Bathroombanner from '../moleculus/Bathroombanner'
import Bathroomban1 from '../moleculus/Bathroomban1'
import Bathroomban2 from '../moleculus/Bathroomban2'
import BathroomHeading from '../moleculus/BathroomHeading'
import Bathroomimages from '../moleculus/Bathroomimages'
import Footer from './Footer'

function Bathroom() {
    return (
        <div>
            <Headermain />
            <Bathroombanner />
            <Bathroomban1 />
            <Bathroomban2 />
            <BathroomHeading />
            <Bathroomimages />
            <Footer />

        </div>
    )
}

export default Bathroom
