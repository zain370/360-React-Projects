import React from 'react'
import "./../Comparison/ComparisonStyle.css"

function Comparison() {
    return (
        <div className='main_comparison'>
            <div className='comparison_manual' >
                <div className='comparison_text' >
                What are the differences between selling your house with a realtor 
and selling to Property Nation?
                </div>
                <div className='below_comp'>Selling a House by Owner vs. Realtor – A Comparison Chart</div>

                <div className='table_row_flex' >

                    <div className='left_column' >
                        <div className='left_col_heading' > Comparing</div>
                        <div className='left_col_rows'>
                             
                            <div className='left_col_text' >Commissions / Fees</div>
                        </div>
                        <div className='left_col_rows'>
                             
                            <div className='left_col_text' >Who Pays Closing Costs?</div>
                        </div>
                        <div className='left_col_rows'>
                             
                            <div className='left_col_text' >Financing Contingency*</div>
                        </div>
                        <div className='left_col_rows'>
                             
                            <div className='left_col_text' >Appraisal Needed</div>
                        </div>
                        <div className='left_col_rows'>
                             
                            <div className='left_col_text' >Average Days Until Sold</div>
                        </div>
                        <div className='left_col_rows'>
                             
                            <div className='left_col_text' >Number of Showings</div>
                        </div>
                        <div className='left_col_rows'>
                             
                            <div className='left_col_text' >Closing Date</div>
                        </div>
                        <div className='left_col_rows'>
                             
                            <div className='left_col_text' >Who Pays For Repairs?</div>
                        </div>

                    </div>

                    <div className='middle_column' >
                        <div className='middle_col_heading' >Property Nation</div>
                        <div className='middle_col_row' >None</div>
                        <div className='middle_col_row' >None – We pay all costs</div>
                        <div className='middle_col_row' >None</div>
                        <div className='middle_col_row' >None – We make cash offers</div>
                        <div className='middle_col_row' >21 Days</div>
                        <div className='middle_col_row' >1 (Just Us)</div>
                        <div className='middle_col_row' >ASAP or The Date Of YOUR CHOICE</div>
                        <div className='middle_col_row' >None – We buy in “AS-IS” Condition</div>
                    </div>

                    <div className='right_column' >
                        <div className='right_col_heading' >Selling with Realtor</div>
                        <div className='right_col_row' >6% on average is paid by you, the seller</div>
                        <div className='right_col_row' >2% on average is paid by you, the seller</div>
                        <div className='right_col_row' >Yes, up to 15% of sales fall through</div>
                        <div className='right_col_row' >Yes, sale is often subject to appraisal</div>
                        <div className='right_col_row' >98 Days</div>
                        <div className='right_col_row' >Multiple</div>
                        <div className='right_col_row' >0-60 +/- days after accepting buyers offer</div>
                        <div className='right_col_row' >Negotiated During Inspection Period</div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Comparison
