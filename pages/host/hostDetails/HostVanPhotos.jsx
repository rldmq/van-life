import React from 'react'
import { useOutletContext, useParams, useLoaderData } from 'react-router-dom'
import { getVans } from '../../../api'

// Fetching all van images to simulate multiple images
export async function loader(){
    const vanImages = await getVans()
    return vanImages
}

export default function HostVanPhotos(){

    const vanImages = useLoaderData()
    // const { currentVan } = useOutletContext()

    const displayVanImages = vanImages.sort((a,b) => Math.random()*100 - Math.random()*100).map(e => (
        <img src={e.imageUrl} alt={e.name} key={e.id}className='host-van-cur--photos-image'/>
    ))

    return (
        <div>
            {/* <img src={currentVan.imageUrl} alt={currentVan.name} className='host-van-cur--photos-image'/> */}
            {displayVanImages}
        </div>
    )
}