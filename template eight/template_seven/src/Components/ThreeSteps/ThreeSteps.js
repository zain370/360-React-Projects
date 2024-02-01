import React from 'react'
import "./../ThreeSteps/ThreeStepsStyle.css"
import meeting from "./../../Assets/meeting.png"
import strip_1 from "./../../Assets/strip_1.png"
import first from "./../../Assets/first.png"
import second from "./../../Assets/second.png"
import third from "./../../Assets/third.png"



function ThreeSteps() {
  return (
    <div main_steps_div>
      <div className='steps_content' >
        <div className='meeting_img_div' > <img className='meeting_img' src={meeting} /></div>

        <div className='steps_right_div' >
          <div className='strip_1_div' ><img className='strip_1_class' src={strip_1} /></div>
          <div className='step_text' >Three Easy Steps</div>
          <div className='circle_text_flex' >
            <div className='circles_div' > <img className='circle_imgs' src={first} /> </div>
            <div className='circles_text' >Schedule a Free Home Consultation</div>
          </div>

          <div className='circle_text_flex' >
            <div className='circles_div' > <img className='circle_imgs' src={second} /> </div>
            <div className='circles_text' >Get A Cash Offer Today</div>
          </div>

          <div className='circle_text_flex' >
            <div className='circles_div' > <img className='circle_imgs' src={third} /> </div>
            <div className='circles_text' >Close At Your Convenience</div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ThreeSteps
