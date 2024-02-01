import React from 'react'
import "./../Home/HomeStyle.css"
import house from "./../../Assets/housee.png"
import Navbar from '../Navbar/Navbar'
import BuyerForm from '../BuyerForm/BuyerForm'
import ThreeSteps from '../ThreeSteps/ThreeSteps'
import Comparison from '../Comparison/Comparison'
import yarrow from "./../../Assets/yarrow.png"
import Testimonial from '../Testimonial/Testimonial'
import BlackFooter from '../BlackFooter/BlackFooter'
import Questions from '../Questions/Questions'


function Home() {
  return (
    <div>
    <div className='top_two_components'>
    <Navbar/> 
    <BuyerForm/>

    <div className='offer_form_div' >
        <form action="#">
          <div className='flex_form'>
            <button className="my_form_button " type="submit">
              Get My Offer
              <img src={yarrow} className='yarrow_img' />
            </button>
            <input className="my_form_inputs" type="text" required placeholder='Name*' />
            <input className="my_form_inputs" type="text" required placeholder='Address*' />
            <input className="my_form_input" type="phone" required placeholder='Phone Number*' />
          </div>
        </form>
      </div>

    </div>

    <div id="id_steps"><ThreeSteps/></div>
    <div id="id_comparison"><Comparison/></div>
    <div id="id_feedback"><Testimonial/></div>
    <div id="id_questions"><Questions/></div>
    <BlackFooter/>
      
    </div>
  )
}

export default Home
