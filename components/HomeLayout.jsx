import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function HomeLayout(){
    return (
        <main>
            <NavLink to='.'>Home</NavLink>
            <NavLink to='about'>About</NavLink>
            <Outlet />
        </main>
    )
}