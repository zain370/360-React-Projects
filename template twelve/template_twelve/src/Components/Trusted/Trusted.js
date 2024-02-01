import React from 'react'
import "./../Trusted/TrustedStyle.css"
import phone from "./../../Assets/Phone.png"
import cash from "./../../Assets/cash.png"


function Trusted() {
  return (
    <div className='main_trusted_div'>
    <div className='tri_div' >

        <div className='trusted_content' >
            <div className='trusted_text' >Get A Trusted Offer For<br/> Your Broward County Home!</div>
            <div className='below_trusted' >We Offer Cash Advacne, Options & <br/>Flexibility Based On YOUR Needs!</div>
            <div className='trusted_btn' type="button" >
                <div> <img className='phone_img' src={phone} /></div>
                <div className='tr_btn_txt' >CALL US</div>
            </div>
        </div>

        <div>
            <img className='cash_img' src={cash} />
        </div>
    </div>
      
    </div>
  )
}

export default Trusted
