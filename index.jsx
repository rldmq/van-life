import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom'

import HomeLayout from './layouts/HomeLayout'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import VanDetails from './pages/vanDetails/VanDetails'
import HostLayout from './layouts/HostLayout'
import HostDashboard from './pages/host/HostDashboard'
import HostIncome from './pages/host/HostIncome'
import HostVans from './pages/host/HostVans'
import HostVanLayout from './layouts/HostVanLayout'
import HostVanDetails from './pages/host/hostDetails/HostVanDetails'
import HostVanPricing from './pages/host/hostDetails/HostVanPricing'
import HostVanPhotos from './pages/host/hostDetails/HostVanPhotos'
import HostReviews from './pages/host/HostReviews'

import NotFound from './pages/NotFound'

import './index.css'
import './server'

function App(){

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<HomeLayout />} errorElement={<NotFound />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} />
            <Route path='vans/:id' element={<VanDetails />} />
            <Route path='host' element={<HostLayout />}>
                <Route index element={<HostDashboard />} />
                <Route path='income' element={<HostIncome />} />
                <Route path='vans' element={<HostVans />} />
                <Route path='vans/:id' element={<HostVanLayout />}>
                    <Route index element={<HostVanDetails />} />
                    <Route path='pricing' element={<HostVanPricing />} />
                    <Route path='photos' element={<HostVanPhotos />} />
                </Route>
                <Route path='reviews' element={<HostReviews />} />
            </Route>
        </Route>
    ))

    return(
        // <BrowserRouter>
        //     <Routes>
        //         <Route path='/' element={<HomeLayout />}>
        //             <Route path='*' element={<NotFound />} /> {/* CATCH ALL ROUTE */}
        //             <Route index element={<Home />} />
        //             <Route path='about' element={<About />} />
        //             <Route path='vans' element={<Vans />} />
        //             <Route path='vans/:id' element={<VanDetails />} />
        //             <Route path='404' element={<NotFound />}/>
        //             <Route path='host' element={<HostLayout />}>
        //                 <Route index element={<HostDashboard />} />
        //                 <Route path='income' element={<HostIncome />} />
        //                 <Route path='vans' element={<HostVans />} />
        //                 <Route path='vans/:id' element={<HostVanLayout />}>
        //                     <Route index element={<HostVanDetails />} />
        //                     <Route path='pricing' element={<HostVanPricing />} />
        //                     <Route path='photos' element={<HostVanPhotos />} />
        //                 </Route>
        //                 <Route path='reviews' element={<HostReviews />} />
        //             </Route>
        //         </Route>
        //     </Routes>
        // </BrowserRouter>

        // GitHub note: opted-in to data layer apis

        <RouterProvider router={router} />
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)