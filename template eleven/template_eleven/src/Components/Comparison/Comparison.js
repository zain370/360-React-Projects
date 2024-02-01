import React from 'react'
import "./../Comparison/ComparisonStyle.css"
import tick from "./../../Assets/tick.png"
import cross from "./../../Assets/cross.png"
import quest_logo from "./../../Assets/quest_logo.png"


function Comparison() {
    return (
        <div className='main_comparison'>
            <div className='manual_width_div'>
                <div className='comparison_heading' >Selling With Us <br />VS. <br />Listing With A Realtor </div>
                {/* <div className='my_big_img'  > <img className='comparison_pic_img' src={comparison_pic} /> </div> */}
                <div className='row row_class ' >

                    <div className='col-3 left_column'>
                        <div className='first_left' ></div>
                        <div className='left_column_text' >Commision / Fee</div>
                        <div className='left_column_text' >Who Pays Closing<br /> Costs?</div>
                        <div className='left_column_text' >Inspections & <br />Financing Contingency*</div>
                        <div className='left_column_text' >Appraisal Needed</div>
                        <div className='left_column_text' >Average Days <br />Until Sold</div>
                        <div className='left_column_text' >Number of Showings</div>
                        <div className='left_column_text' >Closing Date</div>
                        <div className='left_column_text last_left_cell' >Who Pay For Repairs?</div>

                    </div>




                    <div className='col-5 center_column'>
                        <div className='logo_divv'>  </div>
                        <div className='center_column_text'> <img className='tick_img' src={tick} />NONE</div>
                        <div className='center_column_text'> <img className='tick_img' src={tick} />NO Closing Costs</div>
                        <div className='center_column_text'> <img className='tick_img' src={tick} />NONE</div>
                        <div className='center_column_text'> <img className='tick_img' src={tick} />NONE- We make cash offers</div>
                        <div className='center_column_text'> <img className='tick_img' src={tick} />IMMEDIATE CASH OFFER</div>
                        <div className='center_column_text'> <img className='tick_img' src={tick} />1 (Just Us)</div>
                        <div className='center_column_text'> <img className='tick_img' src={tick} />Close on YOUR TIME FRAME</div>
                        <div className='center_column_text'> <img className='tick_img' src={tick} />NO REPAIRS NEEDED</div>



                    </div>





                    <div className='col-4 right_column'>
                        <div className='first_right' >Listing With a Realtor</div>
                        <div className='right_column_text' >  <img className='cross_img' src={cross} />6% on average is paid by you</div>
                        <div className='right_column_text' >  <img className='cross_img' src={cross} />2% on average is paid by you</div>
                        <div className='right_column_text' >  <img className='cross_img' src={cross} />Yes, up to 15% of sales fall through</div>
                        <div className='right_column_text' >  <img className='cross_img' src={cross} />Yes, sale is often subject to appraisalu</div>
                        <div className='right_column_text' >  <img className='cross_img' src={cross} />+/- 91 Days</div>
                        <div className='right_column_text' >  <img className='cross_img' src={cross} />Multiple Showings</div>
                        <div className='right_column_text' >  <img className='cross_img' src={cross} />30-60 days after buyers offer</div>
                        <div className='right_column_text' >  <img className='cross_img' src={cross} />Paying for Repairs or Upkeep</div>

                    </div>



                </div>


            </div>
        </div>
    )
}

export default Comparison
