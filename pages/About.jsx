import React from 'react'
import { Link } from 'react-router-dom'

export default function About(){
    return (
        <main>
            <img src='./assets/image 55.jpg' alt='Man sitting above his van' className='about--image'/>
            <section className='about--textwall'>
                <h2 className='about--text about--motto'>Don't squeeze in a sedan when you could relax in a van.</h2>
                <p className='about--text about--default-text'>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.<br/>
                (Hitch costs extra 😉)
                <br/>
                <br/>
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
                <section className='about--nudge-search'>
                    <h3 className='about--text about--nudge-text'>Your destination is waiting.
                    <br/>Your van is ready.</h3>
                    <Link to='/404' className='about--button-search'>Explore our vans</Link>
                </section>
            </section>
        </main>
    )
}