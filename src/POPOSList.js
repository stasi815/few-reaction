import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css'

function POPOSList() {
    return (
        <div className='POPOSList'>
            <POPOSSpace
                name='Garden Terrace'
                address='150 California'
                image='garden-terrace-at-150-california.jpg'
            />
            <POPOSSpace
                name='525 Market Street Plaza'
                address='525 Market Street'
                image='525-market-street-plaza.jpg'
            />
            <POPOSSpace
                name='555 California'
                address='555 California'
                image='555-california.jpg'
            />
            <POPOSSpace
                name='Embarcadero Center'
                address='Embarcadero Center'
                image='embarcadero-center.jpg'
            />
            <POPOSSpace
                name='Empire Park'
                address='Empire Park'
                image='empire-park.jpg'
            />
            <POPOSSpace
                name='Roof Garden'
                address='343 Sansome'
                image='343-sansome-roof-garden.jpg'
            />
        </div>
    )
}

export default POPOSList