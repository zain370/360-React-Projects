import React from 'react'
import "./../Consultation/ConsultationStyle.css"
import meet from "./../../Assets/meet.png"

function Consultation() {
  return (
    <div className='main_consultation_div'>
    <div className='consultation_content' >
        <div className='meet_img_div' ><img className='meet_img' src={meet} /></div>
        <div className='meet_right_div' >
            <div className='consult_text' >SCHEDULE A FREE<br/> CONSULATION TODAY!</div>
            <div className='below_consult_text' >We can close in less than 72 hours if needed</div>
            <div className='below_consult_text' >Or Call Us For FREE <strong className='bold_num' >866-928-4635</strong></div>

            <div className='consult_btn' type="button" >Get My Offer Now!</div>
        </div>
    </div>
      
    </div>
  )
}

export default Consultation
