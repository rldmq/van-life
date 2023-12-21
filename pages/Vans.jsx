import React from 'react'
import { Link } from 'react-router-dom'

export default function Vans(){

    const [vanList, setVanList] = React.useState([])

    React.useEffect(()=>{
        fetch(`/api/vans`)
            .then(res => res.json())
            .then(data => setVanList(data.vans))
    },[])

    const vanListDisplay = vanList.map(e => (
        <Link to={`${e.id}`}key={e.id} className='vans--item'>
            <img src={e.imageUrl} alt={e.name} className='vans--image'/>
            <div className='vans--container'>
                <span className='vans--name'>{e.name}</span>
                <span className='vans--price'>${e.price}</span>
            </div>
            <div className='vans--container'>
                <span className='vans--type'
                    style={ e.type === 'simple' ?
                        {background:'#E17654'} : e.type === 'rugged' ? {background:'#115E59'} : {background: '#161616'}
                    }
                >{e.type}</span>
                <span className='vans--small'>/day</span>
            </div>
        </Link>
    ))

    return (
        <main className='vans--'>
            <h2 className='vans--explore-text'>Explore our van options</h2>

            {/* FILTERS HERE */}
            <div className='vans--filter--container'>
                <span className='vans--filter'>Simple</span>
                <span className='vans--filter'>Luxury</span>
                <span className='vans--filter'>Rugged</span>
            </div>

            <section className='vans--list'>
                {vanList.length > 1 ? 
                vanListDisplay 
                : <div className='loading'>Loading...</div>}
            </section>
        </main>
    )
}