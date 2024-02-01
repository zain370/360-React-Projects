import React from 'react'
import "./../Convenience/ConvenienceStyle.css"
import sunset from "./../../Assets/sunset.png"

function Convenience() {
  return (
    <div className='main_convenience_blue'>

    <div className='left_flex_div' >
        <div className='convenience_text'>Close At Your Conven<span className='underline_convenience'>ience</span> </div>
        <div className='below_convenience_text'>Selling your home has never been so easy!</div>
        <div type="button" className='offer_btn_two'> Get My Offer Now!</div>
        <div className='conatct_text'>  <p className='call_classs'>Or Call Us For FREE <span className='contact_classs'>866-928-4635</span></p> </div>
    </div>


    <div className='sunset_img_div'>
        <img className='sunset_img' src={sunset} />
    </div>
      
    </div>
  )
}

export default Convenience
