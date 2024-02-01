import React from 'react'
import "./../Convenience/ConvenienceStyle.css"
import dual from "./../../Assets/dual.png"

function Convenience() {
  return (
    <div className='main_convenience_div'>

      <div className='convenience_content' >
      

        <div className='dual_img_div' >      
            <img className='dual_img' src={dual} />        
        </div>

        <div className='consult_textuall' >

          <div className='consultation_text' >Close At Your Convenience</div>
          <div className='below_consultation_text' >Selling your home has never been so easy!</div>
          <button className='consultBtn' type='button' >Get My Offer Now!</button>
          <div className='consult_call_txt' >Or Call Us For FREE <strong>866-928-4635</strong></div>

        </div>

      </div>

    </div>
  )
}

export default Convenience
