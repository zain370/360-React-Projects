import React from 'react'
import "./../Comparison/ComparisonStyle.css"
import strip_2 from "./../../Assets/strip_1.png"


function Comparison() {
  return (
    <div className='comparison_full_width'>
    <div className='comparison_manual_width' >
        <div className='comparison_content' >
          <div className='strip_2_div' ><img className='strip_2_class' src={strip_2} /></div>
          <div className='comparison_heading' >Selling With Us VS. Listing With A Realtor</div>

          <div className=' row  ' >

            <div className='col-4'>
                <div className='yellow_divs' >Comparing</div>
                <div className='left_column' >Commissions / Fees</div>
                <div className='left_column' >Who Pays Closing Costs?</div>
                <div className='left_column' >Financing Contingency*</div>
                <div className='left_column' >Appraisal Needed</div>
                <div className='left_column' >Average Days Until Sold</div>
                <div className='left_column' >Number of Showings</div>
                <div className='left_column' >Closing Date</div>
                <div className='left_column' >Who Pays For Repairs?</div>
            </div>


            <div className='col-4'>
                <div className='yellow_divs' >With Us</div>
                <div className='center_column' >None</div>
                <div className='center_column' >None – We pay all costs</div>
                <div className='center_column' >None</div>
                <div className='center_column' >None – We make cash offers</div>
                <div className='center_column' >21 Days</div>
                <div className='center_column' >1 (Just Us)</div>
                <div className='center_column' >ASAP or The Date Of YOUR CHOICE</div>
                <div className='center_column' >None – We buy in “AS-IS” Condition</div>
            </div>


            <div className='col-4'>
                 <div className='yellow_divs' >Selling with Realtor</div>
                 <div className='right_column' >6% on average is paid by you, the seller</div>
                 <div className='right_column' >2% on average is paid by you, the seller</div>
                 <div className='right_column' >Yes, up to 15% of sales fall through</div>
                 <div className='right_column' >Yes, sale is often subject to appraisal</div>
                 <div className='right_column' >98 Days</div>
                 <div className='right_column' >Multiple</div>
                 <div className='right_column' >0-60 +/- days after accepting buyers offer</div>
                 <div className='right_column' >Negotiated During Inspection Period</div>

            </div>

          </div>


        </div>
    </div>
      
    </div>
  )
}

export default Comparison
