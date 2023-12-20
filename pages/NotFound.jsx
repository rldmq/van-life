import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound(){
    return (
        <div className='404--'>
            <h1 className='404--sorry'>Sorry, this page does not exist! 😔</h1>
            <Link to='/' className='404--home'>Go to Home 🏠</Link>
        </div>
    )
}