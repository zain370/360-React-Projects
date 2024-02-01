import React from 'react'
import "./../Consultation/ConsultationStyle.css"
import meet from "./../../Assets/meet.png"

function Consultation() {
  return (
   <div className='consult_full_width'>
     <div className='main_consultation_div'>
      <div className='consultation_content' >

        <div className='consult_textual' >
          <div className='consultation_text' >Schedule A Free <br />Consultation Today</div>
          <div className='below_consultation_text' >We can close in less than 72 hours if needed</div>
          <button className='consultBtn' type='button' >Get My Offer Now!</button>
          <div className='consult_call_txt' >Or Call Us For FREE <strong>866-928-4635</strong></div>
        </div>
      </div>
    </div>


    <div className='meet_img_class' >
      <img className='meet_img' src={meet}  />
    </div>
   </div>
  )
}

export default Consultation
