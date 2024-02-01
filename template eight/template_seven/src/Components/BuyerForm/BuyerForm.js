import React from 'react'
import "./../BuyerForm/BuyerFormStyle.css"
import yarrow from "./../../Assets/yarrow.png"

function BuyerForm() {
  return (
    <div className='buyer_full_width'>
      <div className='buyer_content' >
        <div className='america_heading'>AMERICA’S MOST <br />TRUSTED HOME<br /> BUYER</div>
        <div className='below_america_heading'>Get Your Cash Offer In 30 Minutes<br /> Or Less!</div>
      </div>


      {/* <div className='offer_form_div' >
        <form action="#">
          <div className='flex_form'>
            <button className="my_form_button " type="submit">
              Get My Offer
              <img src={yarrow} className='yarrow_img' />
            </button>
            <input className="my_form_inputs" type="text" required placeholder='Name*' />
            <input className="my_form_inputs" type="phone" required placeholder='Address*' />
            <input className="my_form_input" type="text" required placeholder='Phone Number*' />
          </div>
        </form>
      </div> */}


    </div>
  )
}

export default BuyerForm
