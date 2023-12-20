import React from 'react'
import { Link } from 'react-router-dom'

export default function HostVans(){

    const [hostVans, setHostVans] = React.useState([])

    React.useEffect(()=>{
        fetch(`/api/host/vans`)
            .then(res => res.json())
            .then(data => setHostVans(data.vans))
    },[])


    const hostVansDisplay = hostVans.map(e => (
        <Link className='host-vans--item' context={{hostVans}} to={e.id} key={e.id}>
            <img className='host-vans--item-image' src={e.imageUrl} alt={e.name}/>
            <div className='host-vans--item-details'>
                <h4 className='host-vans--item-name'>{e.name}</h4>
                <span className='host-vans--item-price'>${e.price}/day</span>
            </div>
        </Link>
    ))

    return(
        hostVans.length > 1 ?
        <section className='host-vans--'>
            <h2 className='host-vans--vanListText'>Your listed vans</h2>
            <div className='host-vans--container'>
                {hostVansDisplay}  
            </div>
        </section>
        : <div className='loading'>Loading...</div>
    )
}