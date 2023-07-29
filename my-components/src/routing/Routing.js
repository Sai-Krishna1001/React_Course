import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Dashboard from './Dashboard'
import About from './About'
const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" exact element = {<Home />} />
            <Route path="/dashboard/:name" element = {<Dashboard />} />
            <Route path="/about" element = {<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
