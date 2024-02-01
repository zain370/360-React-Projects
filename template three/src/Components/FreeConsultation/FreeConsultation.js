import React from 'react'
import "./../FreeConsultation/FreeConsultationStyle.css"
import blackman from "./../../Assets/blackman.png";

function FreeConsultation() {
  return (

    <div className='main_darkblue_div'>
    
    <div className='row uppre_darkblue '>

    <div className='col-lg-2 col-md-2 col-12 '>   </div>

    <div className='col-lg-5 col-md-5  col-12 lightblue_card'>

        <div className='schedulee_text'>Schedule A Free <br/>Consultation Today</div>
        <div className='below_schedule_text'>We can close in less than 72 hours if needed</div>
        <div type="button" className='offer_btn'> Get My Offer Now!</div>
      <div className='conatct_text'>  <p className='call_classs'>Or Call Us For FREE <span className='contact_classs'>866-928-4635</span></p> </div>
      
    </div>

    <div className='col-lg-3 col-md-3 col-12'> <img className='blackmann' src={blackman}/>   </div>
    <div className='col-lg-2 col-md-2 col-12'>   </div>

    

    </div>





    <div className='lower_darkblue'></div>

      
    </div>
  )
}

export default FreeConsultation
