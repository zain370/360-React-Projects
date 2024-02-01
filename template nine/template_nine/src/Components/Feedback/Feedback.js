import React from 'react'
import "./../Feedback/FeedbackStyle.css"
import stars from "./../../Assets/stars.png"
import feedbackk from "./../../Assets/feedbackk.png"


function Feedback() {
  return (
    <div className='main_feedback'>
      <div className='feedback_content'  >
            <div className='feedback_headings' >WHAT OUR <strong>CLIENTS</strong> SAY</div>
            <div className='feedback_flex' >

                <div className='feedback_flex_col' >
                    <div className='feedback' >
                        <div className='client_name' >Michael Miller</div>
                        <div className='client_profession' >Software Engineer</div>
                        <div><img className='star_img' src={stars}  /></div>
                        <div><img className='feedbackk_img' src={feedbackk}  /></div>
                    </div>

                    <div className='feedback' >
                        <div className='client_name' >Michael Miller</div>
                        <div className='client_profession' >Software Engineer</div>
                        <div><img className='star_img' src={stars}  /></div>
                        <div><img className='feedbackk_img' src={feedbackk}  /></div>
                    </div>
                </div>

                <div className='feedback_flex_col' >
                    <div className='feedback' >
                        <div className='client_name' >Michael Miller</div>
                        <div className='client_profession' >Software Engineer</div>
                        <div><img className='star_img' src={stars}  /></div>
                        <div><img className='feedbackk_img' src={feedbackk}  /></div>
                    </div>

                    <div className='feedback' >
                        <div className='client_name' >Michael Miller</div>
                        <div className='client_profession' >Software Engineer</div>
                        <div><img className='star_img' src={stars}  /></div>
                        <div><img className='feedbackk_img' src={feedbackk}  /></div>
                    </div>
                </div>

            </div>
      </div>
    </div>
  )
}

export default Feedback
