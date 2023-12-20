import React from 'react'
import { useParams, Outlet } from 'react-router-dom'

export default function HostVanDetails(){

    const [currentVan, setCurrentVan] = React.useState(null)

    const { id } = useParams()

    React.useEffect(()=>{
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans))
    },[])

    console.log(currentVan)

    return(
        currentVan ?
        <section>
            <img src={currentVan.imageUrl} alt={currentVan.name} />
            <div>
                <span>{currentVan.type}</span>
                <h2>{currentVan.name}</h2>
                <span>{currentVan.price}</span>
            </div>
            <Outlet />
        </section>
        : <div className='loading'>Loading...</div>
    )
}