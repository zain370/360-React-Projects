import React from 'react'
import "./../Home/HomeStyle.css"
import homepic from "./../../Assets/homepic.png"
import Navbar from '../Navbar/Navbar'
import BuyerForm from '../BuyerForm/BuyerForm'
import Icons from '../Icons/Icons'
import Steps from '../Steps/Steps'
import Comparison from '../Comparison/Comparison'
import Questions from '../Questions/Questions'
import Convenience from '../Convenience/Convenience'
import Consultation from '../Consultation/Consultation'
import Selling from '../Selling/Selling'
import Feedback from '../Feedback/Feedback'

function Home() {
  return (
    <div>

    <div className='my_background'>
         <Navbar/>
         <BuyerForm/> 
    </div>

    <Icons/>
    <div id="id_steps" ><Steps/></div>
    <div id="id_comparison"><Comparison/></div>
    <Consultation/>
    <Selling/>
    <div id="id_testimonial" ><Feedback/></div>
    <div id="id_questions"><Questions/></div>
    <Convenience/>
      
    </div>
  )
}

export default Home
