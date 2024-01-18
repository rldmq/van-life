import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api'
import { requireAuth } from '../../utils'

export async function loader(){
    await requireAuth()
    return getHostVans()
}

export default function HostDashboard(){

    const hostVans = useLoaderData()

    // const [hostVans, setHostVans] = React.useState([])

    // React.useEffect(()=>{
    //     fetch(`/api/host/vans`)
    //         .then(res => res.json())
    //         .then(data => setHostVans(data.vans))
    // },[])

    const hostVansDisplay = hostVans.map(e => (
        <Link className='host-vans--item' to={e.id} key={e.id}>
            <img className='host-vans--item-image' src={e.imageUrl} alt={e.name}/>
            <div className='host-vans--item-details'>
                <h4 className='host-vans--item-name'>{e.name}</h4>
                <span className='host-vans--item-price'>${e.price}/day</span>
            </div>
            <Link to='/404' className='host-vans--item-edit'>Edit</Link>
        </Link>
    ))

    return(
        hostVans.length > 1 ?
        <section className='host-vans--'>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2 className='host-vans--vanListText'>Your listed vans</h2>
                <span className='host-vans--viewAll'>View all</span>
            </div>
            <div className='host-vans--container'>
                {hostVansDisplay}  
            </div>
        </section>
        : <div className='loading'>Loading...</div>
    )
}