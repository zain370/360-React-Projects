import React from 'react'
import "./../Steps/StepsStyle.css"
import yellow1 from "./../../Assets/yellow1.png"
import yellow2 from "./../../Assets/yellow2.png"
import yellow3 from "./../../Assets/yellow3.png"


function Steps() {
  return (
    <div className='main_steps_width'>
    <div className='steps_content' >
      <div className="steps_heading" >Three <strong>Easy</strong> Steps</div>
      <div className='steps_flex_row' >

        <div className='step_col' >
          <img className='circles'  src={yellow1} />
          <div className='three_steps_headings' >Schedule a Free Home Consultation</div>
          <p className='below_headings' >We will learn about your needs and assess your
home by walking through the property with you, 
explaining the process as we go</p>
        </div>

        <div className='step_col' >
          <img className='circles'  src={yellow2} />
          <div className='three_steps_headings' >Get A Cash Offer Today</div>
          <p className='below_headings' >We will learn about your needs and assess your
home by walking through the property with you, 
explaining the process as we go</p>
        </div>

        <div className='step_col' >
          <img className='circles'  src={yellow3} />
          <div className='three_steps_headings' >Close At Your Convenience</div>
          <p className='below_headings' >Your property will be purchased with cash,<br/> so you can close on your schedule. </p>
        </div>

      </div>

    </div>
      
    </div>
  )
}

export default Steps
