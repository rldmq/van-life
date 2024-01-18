import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom'

import HomeLayout from './layouts/HomeLayout'
import Home from './pages/Home'
import About from './pages/About'
import Vans, { loader as vansLoader } from './pages/Vans'
import VanDetails, { loader as vanDetailsLoader } from './pages/vanDetails/VanDetails'
import HostLayout from './layouts/HostLayout'
import HostDashboard, { loader as hostDashboardLoader } from './pages/host/HostDashboard'
import HostIncome from './pages/host/HostIncome'
import HostVans, { loader as hostVansLoader} from './pages/host/HostVans'
import HostVanLayout, { loader as hostVanLayoutLoader} from './layouts/HostVanLayout'
import HostVanDetails from './pages/host/hostDetails/HostVanDetails'
import HostVanPricing from './pages/host/hostDetails/HostVanPricing'
import HostVanPhotos, { loader as hostVanPhotosLoader } from './pages/host/hostDetails/HostVanPhotos'
import HostReviews from './pages/host/HostReviews'
import Login, { action as loginAction } from './pages/Login'

import NotFound from './pages/NotFound'
import Error from './pages/Error'

import './index.css'
import './server'

function App(){

    const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<HomeLayout />} errorElement={<Error />}>
            <Route index element={<Home />}/>
            <Route path='about' element={<About />} />
            <Route path='vans' element={<Vans />} loader={vansLoader} errorElement={<Error />}/>
            <Route path='vans/:id' element={<VanDetails />} loader={vanDetailsLoader} errorElement={<Error />}/>
            <Route path='host' element={<HostLayout />}>
                <Route index element={<HostDashboard />} loader={hostDashboardLoader} errorElement={<Error />}/>
                <Route path='income' element={<HostIncome />} />
                <Route path='vans' element={<HostVans />} loader={hostVansLoader}  errorElement={<Error />}/>
                <Route path='vans/:id' element={<HostVanLayout />} loader={hostVanLayoutLoader} errorElement={<Error />}>
                    <Route index element={<HostVanDetails />} errorElement={<Error />}/>
                    <Route path='pricing' element={<HostVanPricing />} />
                    <Route path='photos' element={<HostVanPhotos />} loader={hostVanPhotosLoader} errorElement={<Error />}/>
                </Route>
                <Route path='reviews' element={<HostReviews />} />
            </Route>
            <Route path='login' element={<Login />} actionElement={loginAction}/>
            <Route path='*' element={<NotFound />} />
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