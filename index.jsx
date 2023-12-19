import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomeLayout from './components/HomeLayout'
import Home from './pages/Home'
import About from './pages/About'

import './index.css'

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeLayout />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)