import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api'
import { requireAuth } from '../../utils'

export async function loader(){
    await requireAuth()
    return getHostVans()
}

export default function HostVans(){

    const hostVans = useLoaderData()

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
        <section className='host-vans--'>
            <h2 className='host-vans--vanListText'>Your listed vans</h2>
            <div className='host-vans--container'>
                {hostVansDisplay}  
            </div>
        </section>
    )
}