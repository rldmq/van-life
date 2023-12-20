import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <main className='home--'>
            <h1 className='home--text home--motto'>You got the travel plans, we got the travel vans.</h1>
            <p className='home--text home--p'>Add adventure to your life by joining the #vanlife movement.<br/>Rent the perfect van to make your perfect road trip.</p>
            <Link to='404' className='home--text home--button-search'>Find your van</Link>
        </main>
    )
}