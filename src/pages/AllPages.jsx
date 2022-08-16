import React from 'react'
import {Routes,Route} from 'react-router-dom'
import All from './All'
import Navbar from '../comp/navbar'
import Home from './Home'
import Html from './Html'
import Css from './Css'
import Javascript from './Javascript'




const AllPages = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all' element={<All/>}/>
        <Route path='/html' element={<Html/>}/>
        <Route path='/css' element={<Css/>}/>
        <Route path='/javascript' element={<Javascript/>}/>
      </Routes>
        
    </div>
  )
}

export default AllPages