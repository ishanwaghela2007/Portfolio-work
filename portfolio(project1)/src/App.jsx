import { useState } from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFoundPage from './pages/NotFound-page'
import Project from './pages/Project'



function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='Contact' element={
            <Contact/>
            }/>
          <Route path='Project' element={<Project/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App