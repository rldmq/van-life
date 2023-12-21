import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

export default function HostVanPhotos(){
    
    // const { currentVan } = useOutletContext()

    const { id } = useParams()

    // Fetching all van images to simulate multiple images

    const [vanImages, setVanImages] = React.useState([])

    React.useEffect(()=>{
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => setVanImages(data.vans))
    },[id])

    const displayVanImages = vanImages.sort((a,b) => Math.random()*100 - Math.random()*100).map(e => (
        <img src={e.imageUrl} alt={e.name} key={e.id}className='host-van-cur--photos-image'/>
    ))

    return (
        vanImages.length > 0 ?
        <div>
            {/* <img src={currentVan.imageUrl} alt={currentVan.name} className='host-van-cur--photos-image'/> */}
            {displayVanImages}
        </div>
        : <div className='loading'>Loading...</div>
    )
}