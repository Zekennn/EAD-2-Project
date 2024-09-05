import React from 'react'
import NavBar from '../components/NavBar'
import { Carousel } from 'react-bootstrap'
import Carousels from '../components/Carousels'
import Footer from '../components/Footer'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import Description from '../components/Description'
import './home.css'

export default function home() {
  return (
    <div className='homeBody'>
      <NavBar/>
      <Carousels/>
      <Services/>
      <Description/>
      <Reviews/>
      <Footer/>
    </div>
  )
}
