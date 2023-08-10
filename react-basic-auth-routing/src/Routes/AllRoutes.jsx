import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import About from '../Pages/About'
import AllProducts from '../Pages/Products'
import Contact from '../Pages/Contact'
import { PrivateRoute } from './PrivateRoute'

const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/products' element={<PrivateRoute><AllProducts/></PrivateRoute>}/>
            </Routes>
        </div>
    )
}

export {AllRoutes}