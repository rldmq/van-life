import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function HostVanPricing(){

    const { currentVan } = useOutletContext()

    return (
        <div className='host-van-cur--pricing'>
            <span className='host-van-cur--pricing-details-title'>Base:
                <span className='host-van-cur--pricing-base'> ${currentVan.price}<span className='host-van-cur--pricing-small'>/day</span> </span>
            </span>
            <span className='host-van-cur--pricing-details-title'>Details:
                <ul className='host-van-cur--pricing-details-text'>
                    <li>Full tank of gas provided</li>
                    <li>Must be returned with full tank of gas</li>
                    <li>$200 security deposit</li>
                    <li>Must have insurance</li>
                </ul>
            </span>
        </div>
    )
}