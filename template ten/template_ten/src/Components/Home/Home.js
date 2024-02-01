import React from 'react'
import Navbar from '../Navbar/Navbar'
import BuyerForm from '../BuyerForm/BuyerForm'
import ThreeSteps from '../ThreeSteps/ThreeSteps'
import Comparison from '../Comparison/Comparison'
import Consultation from '../Consultation/Consultation'
import Selling from '../Selling/Selling'
import Questions from '../Questions/Questions'
import Convenience from '../Convenience/Convenience'
import Testimonial from '../Testimonial/Testimonial'



function Home() {
  return (
    <div>
    <Navbar/>
    <BuyerForm/>
    <div id="id_steps" ><ThreeSteps/></div>
    <div id="id_comparison" ><Comparison/></div>
    
    <Consultation/>
    <Selling/>
    <div id="id_feedback" > <Testimonial/></div>
    <div id="id_questions" > <Questions/></div>
   
    <Convenience/>
      
    </div>
  )
}

export default Home
