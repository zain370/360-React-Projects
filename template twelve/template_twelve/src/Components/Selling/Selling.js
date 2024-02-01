import React from 'react'
import "./../Selling/SellingStyle.css"
import house from "./../../Assets/house.png"
import bullet from "./../../Assets/bullet.png"

function Selling() {
    return (
        <div className='main_selling_div'>
            <div className='selling_heading' >We Make It Easy to Sell Your House Fast in Broward County for Cash</div>
            <div className='below_selling' >Are you looking to sell your house fast in Broward County? As Broward County’s top local home buyer we can <br />pay cash for your home in any condition, or situation.</div>

            <div className='sell_row_flex' >
                <div className='bullets_div' >
                    <div className='bullet_heading' >Here’s how you benefit when working with Property Nation:</div>
                    <div className='bullet_row' >
                        <div><img className='blue_bullet' src={bullet} /></div>
                        <div className='bullet_text' ><b>Sell as-is –</b> there’s no need to make any repairs or renovations.</div>
                    </div>

                    <div className='bullet_row' >
                        <div><img className='blue_bullet' src={bullet} /></div>
                        <div className='bullet_text' ><b>Sell without a Realtor – </b>There are no commissions or fees to pay either..</div>
                    </div>

                    <div className='bullet_row' >
                        <div><img className='blue_bullet' src={bullet} /></div>
                        <div className='bullet_text' ><b>Get a fair cash offer –</b> We guarantee no low-ball offers.</div>
                    </div>

                    <div className='bullet_row' >
                        <div><img className='blue_bullet' src={bullet} /></div>
                        <div className='bullet_text' ><b>Flexible – </b>Sell right away if you’re in a hurry or choose a closing date 
that works for you.</div>
                    </div>
                </div>

                <div  >
                    <img className='house_img' src={house} />
                </div>
            </div>

        </div>
    )
}

export default Selling
