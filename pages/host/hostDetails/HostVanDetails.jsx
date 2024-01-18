import React from 'react'
import { useOutletContext, /*useLoaderData*/ } from 'react-router-dom'
// import { getHostVans } from '../../../api'

// export async function loader({params}){
//     const currentVan = await getHostVans(params.id)
//     return currentVan
// }

export default function HostVanDetails(){

    // const currentVan = useLoaderData()
    const { currentVan } = useOutletContext()

    return (
        <div className='host-van-cur--details--'>
            <span className='host-van-cur--details-title'>Name:
                <span className='host-van-cur--details-text'> {currentVan.name}</span>
            </span>
            <span className='host-van-cur--details-title'>Type:
                <span className='host-van-cur--details-text capitalize'> {currentVan.type}</span>
            </span>
            <span className='host-van-cur--details-title'>Description:
                <span className='host-van-cur--details-text'> {currentVan.description}</span>
            </span>
            <span className='host-van-cur--details-title'>Visibility:
                <span className='host-van-cur--details-text'> Public</span>
            </span>
        </div>
    )
}