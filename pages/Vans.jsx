import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'

export default function Vans(){

    const [vanList, setVanList] = React.useState([])
    const [vanFilter, setVanFilter] = useSearchParams()

    const activeTypeFilter = vanFilter.get('type')

    React.useEffect(()=>{
        fetch(`/api/vans`)
            .then(res => res.json())
            .then(data => setVanList(data.vans))
    },[])

    function handleFilterChange(key, value){
        const searchParams = new URLSearchParams(vanFilter)
        if(!value){
            searchParams.delete(key)
        }else{
            searchParams.set(key, value)
        }
        setVanFilter(searchParams)
    }

    const filteredVanList = activeTypeFilter ? vanList.filter(e => e.type === activeTypeFilter) : vanList

    const vanListDisplay = filteredVanList.map(e => (
        <Link to={`${e.id}`}key={e.id} state={{filter:`?${vanFilter.toString()}`}} className='vans--item'>
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
                <span 
                    onClick={()=>handleFilterChange('type','simple')} 
                    className={`vans--filter simple ${activeTypeFilter === 'simple' ? 'active' : ''}`}>Simple</span>
                <span 
                    onClick={()=>handleFilterChange('type', 'luxury')} 
                    className={`vans--filter luxury ${activeTypeFilter === 'luxury' ? 'active' : ''}`}>Luxury</span>
                <span 
                    onClick={()=>handleFilterChange('type', 'rugged')} 
                    className={`vans--filter rugged ${activeTypeFilter === 'rugged' ? 'active' : ''}`}>Rugged</span>

                {activeTypeFilter && <span onClick={()=>handleFilterChange('type')} className='vans--filter clear'>Clear Filter</span>}
            </div>

            <section className='vans--list'>
                {vanList.length > 1 ? 
                vanListDisplay 
                : <div className='loading'>Loading...</div>}
            </section>
        </main>
    )
}