import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function HostLayout(){

    const activeStyle = {
        textDecoration: 'underline',
        fontWeight: 'bold'
    }

    return(
        <main className='host-layout'>
            <nav className='host-layout--nav'>
                <NavLink end className='host-layout--link' to='.' style={({isActive}) => isActive ? activeStyle : null}>Dashboard</NavLink>
                <NavLink className='host-layout--link' to='income' style={({isActive}) => isActive ? {textDecoration: 'underline', fontWeight: 'bold'} : null}>Income</NavLink>
                <NavLink className='host-layout--link' to='vans' style={({isActive}) => isActive ? {textDecoration: 'underline', fontWeight: 'bold'} : null}>Vans</NavLink>
                <NavLink className='host-layout--link' to='reviews' style={({isActive}) => isActive ? {textDecoration: 'underline', fontWeight: 'bold'} : null}>Reviews</NavLink>
            </nav>
            <Outlet />
        </main>
    )
}