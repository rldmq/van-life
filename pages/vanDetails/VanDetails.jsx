import React from 'react'
import { useParams, useLocation, Link, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api'

export async function loader({ params }){
    const currentVan = await getVans(params.id)
    return currentVan
}

export default function VanDetails(){

    // const { id } = useParams()

    // const [currentVan, setCurrentVan] = React.useState(null)
    const currentVan = useLoaderData()

    const location = useLocation().state.filter

    // React.useEffect(()=>{
    //     fetch(`/api/vans/${id}`)
    //         .then(res => res.json())
    //         .then(data => setCurrentVan(data.vans))
    // },[])

    return(
        <main className='van-details--'>
            <Link to={`..${location}`} relative='path' className='van-details--back'> &larr; Back to all vans</Link>
            <img src={currentVan.imageUrl} alt={currentVan.name} className='van-details--image'/>
            <div className='van-details--container'>
                <span className='van-details--type'
                    style={
                        currentVan.type === 'simple' ? {background: '#E17654'} : currentVan.type === 'rugged' ? {background: '#115E59'} : {background: '#161616'}
                    }
                >{currentVan.type}</span>
                <h2 className='van-details--name'>{currentVan.name}</h2>
                <h3 className='van-details--price'>${currentVan.price}<span className='van-details--small'>/day</span></h3>
                <p className='van-details--description'>{currentVan.description}</p>
            </div>
            <Link to='/404' className='van-details--button-rent'>Rent this van</Link>
        </main>
    )
}