import React from 'react'
import { Link, useSearchParams, useLoaderData } from 'react-router-dom'
import { getVans } from '../api'

export async function loader(){
    try{
        const vanList = await getVans()
        return vanList
    }catch(err){
        console.log(err)
        return err
    }
}

export default function Vans(){

    const vanList = useLoaderData()

    const [vanFilter, setVanFilter] = useSearchParams()
    // const [error, setError] = React.useState(null)

    const activeTypeFilter = vanFilter.get('type')

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

    // if(error){
    //     return <h1 aria-live='assertive'>{error.message}</h1> //interrupt other updates because this is critical
    // }

    return (
        <main className='vans--'>
            <h2 className='vans--explore-text'>Explore our van options</h2>

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
                {vanListDisplay}
            </section>
        </main>
    )
}