import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from '../src/about'
import Contact from '../src/contact'
import Services from '../src/services'
import Project from '../src/project'
import Layout from '../src/layout'

const MainRouter = () => {
return (<div>
 <Layout/>
 <Routes>
<Route exact path="/" element={<Home />} />
<Route exact path="/about" element={<About />} />
<Route exact path="/project" element={<Project />} />
<Route exact path="/services" element={<Services />} />
<Route exact path="/contact" element={<Contact />} />

</Routes>
</div>
)
}
export default MainRouter
