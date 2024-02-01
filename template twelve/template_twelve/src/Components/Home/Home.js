import React from 'react'
import "./../Home/HomeStyle.css"
import Navbar from '../Navbar/Navbar'
import BelowNav from '../BelowNav/BelowNav'
import Comparison from '../Comparison/Comparison'
import Trusted from '../Trusted/Trusted'
import Selling from '../Selling/Selling'
import Details from '../Details/Details'
import Testimonial from '../Testimonial/Testimonial'
import Questions from '../Questions/Questions'
import Process from '../Process/Process'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <BelowNav/>
      <div id="id_comparison" ><Comparison/></div>
      <Trusted/>
      <Selling/>
      <Details/>
      <div id="id_feedback" ><Testimonial/></div>
      <div id="id_questions" ><Questions/></div>
      <div id="id_steps" ><Process/></div>
      <Footer/>
    </div>
  )
}

export default Home
