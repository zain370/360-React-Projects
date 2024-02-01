import React from 'react'
import "./../ThreeSteps/ThreeStepsStyle.css"
import step_1 from "./../../Assets/step_1.png"
import step_2 from "./../../Assets/step_2.png"
import step_3 from "./../../Assets/step_3.png"


function ThreeSteps() {
  return (
    <div className='main_steps_div'>
    <div className='steps_heading' >THREE EASY STEPS</div>
    <div className='steps_content' >

        <div className='step_card' >
            <img className='step_icon_img' src={step_1}  />
            <div className='step_card_heading' >Schedule a Free Home <br/>Consultation</div>
            <p className='step_para' >We will learn about your needs and assess your home by walking through the property with you, explaining the process as we go</p>
        </div>

        <div className='step_card' >
            <img className='step_icon_img' src={step_2}  />
            <div className='step_card_heading' >Get A Cash Offer Today</div>
            <p className='step_para' >We will learn about your needs and assess your home by walking through the property with you, explaining the process as we go.</p>
        </div>

        <div className='step_card' >
            <img className='step_icon_img' src={step_1}  />
            <div className='step_card_heading' >Close At Your Convenience</div>
            <p className='step_para' >Your property will be purchased with cash, so you can close on your schedule. </p>
        </div>
    </div>
      
    </div>
  )
}

export default ThreeSteps
