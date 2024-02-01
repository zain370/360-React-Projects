import React from 'react'
import "./../Home/HomeStyle.css"
import Navbar from '../Navbar/Navbar'
import BuyerForm from '../BuyerForm/BuyerForm'
import Icons from '../Icons/Icons'
import Comparison from '../Comparison/Comparison'
import ThreeSteps from '../ThreeSteps/ThreeSteps'
import Consultation from '../Consultation/Consultation'
import Convenience from '../Convenience/Convenience'
import Selling from '../Selling/Selling'
import Testimonial from '../Testimonial/Testimonial'
import Questions from '../Questions/Questions'


function Home() {
    return (
        <div>
            <div className='combined_div'>
                <Navbar />
                <BuyerForm/>
            </div>

                <Icons/>
                <div id="id_steps" ><ThreeSteps/></div>
                <div id="id_comparison" ><Comparison/></div>
                
                <Consultation/>
                <Selling/>
                <div id="id_testimonial" ><Testimonial/></div>
                <div id="id_questions" ><Questions/></div>
                
                
                <Convenience/>

        </div>
    )
}

export default Home
