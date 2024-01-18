import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header(){
    return (
        <header className='header--'>
            <Link to='.' className='header--home'>#VANLIFE</Link>
            <nav className='header--nav'>
                <NavLink to='host' className='header--nav-links'>Host</NavLink>
                <NavLink to='about' className='header--nav-links'>About</NavLink>
                <NavLink to='vans' className='header--nav-links'>Vans</NavLink>
                <NavLink to='login' className='header--nav-links'>Login</NavLink>
            </nav>
        </header>
    )
}