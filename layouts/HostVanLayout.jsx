import React from 'react'
import { useParams, Outlet, Link, NavLink, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../api'

export async function loader({params}){
    const currentVan = await getHostVans(params.id)
    return currentVan
}

export default function HostVanLayout(){

    const currentVan = useLoaderData()
    // const [currentVan, setCurrentVan] = React.useState(null)

    // const { id } = useParams()

    const activeStyle = {
        textDecoration: 'underline',
        fontWeight: '700',
        color: '#161616'
    }

    // React.useEffect(()=>{
    //     fetch(`/api/host/vans/${id}`)
    //         .then(res => res.json())
    //         .then(data => setCurrentVan(data.vans))
    // },[])

    return(
        <div className='host-van-cur--'>
            <Link className='host-van-cur--back' to='..' relative='path'>&larr; Back to all vans</Link>
            <section className='host-van-cur--display'>
                <div className='host-van-cur--container'>
                    <img className='host-van-cur--image' src={currentVan.imageUrl} alt={currentVan.name} />
                    <div className='host-van-cur--basic'>
                        <span className='host-van-cur--type' style={currentVan.type === 'simple' ? {background: '#E17654'} : currentVan.type === 'rugged' ? {background: '#115E59'} : {background: '#161616'}}>{currentVan.type}</span>
                        <h2 className='host-van-cur--name'>{currentVan.name}</h2>
                        <span className='host-van-cur--price' >${currentVan.price}<span className='host-van-cur--small'>/day</span></span>
                    </div>
                </div>
                <nav className='host-van-cur--nav'>
                    <NavLink className='host-van-cur--nav-link' to='.' end style={({ isActive })=> isActive ? activeStyle : null}>Details</NavLink>
                    <NavLink className='host-van-cur--nav-link' to='pricing' style={({ isActive })=> isActive ? activeStyle : null}>Pricing</NavLink>
                    <NavLink className='host-van-cur--nav-link' to='photos' style={({ isActive })=> isActive ? activeStyle : null}>Photos</NavLink>
                </nav>
                <Outlet context={{currentVan}}/>
            </section>
        </div>
    )
}