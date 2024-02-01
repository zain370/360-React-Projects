import React from 'react'
import "./../Process/ProcessStyle.css"
import one from "./../../Assets/one.png"
import two from "./../../Assets/two.png"
import three from "./../../Assets/three.png"
import onepic from "./../../Assets/onepic.png"
import twopic from "./../../Assets/twopic.png"
import threepic from "./../../Assets/threepic.png"
import grey_arrow from "./../../Assets/grey_arrow.png"


function Process() {
    return (
        <div className='main_process_div'>

            <div className='process_content'>
                <div className='process_heading'>How Our Process Works in Broward County</div>
                <div className='below_process_heading' >At Property Nation, you get an offer that works for you and works within the time you need to sell your house in
                    Broward County. At any time, if you have any questions about how it works,<br />
                    give us a call at <span className='blue'>000000000000 </span>or <span className='blue'>fill out our 30-second form.</span></div>

                <div className='buy_heading' >We Buy Broward County Houses Fast In 3 Simple Steps:</div>

                <div className='steps_flex_row' >
                    <div className='steps_col' >
                        <div><img className='num_pic' src={one} /></div>
                        <div className='below_num_pic' >GET IN TOUCH</div>
                        <div><img className='silver_pics' src={onepic} /></div>
                        <div className='below_silver' >Get started by filling out the secure form
                            below or giving us a call to (305) 928-
                            2711. Don’t worry, we do not share your
                            info with anyone else!</div>
                    </div>
                    <div><img className='grey_arrow' src={grey_arrow} /></div>
                    <div className='steps_col' >
                        <div><img className='num_pic' src={two} /></div>
                        <div className='below_num_pic' >GET YOUR OFFER</div>
                        <div><img className='silver_pics' src={twopic} /></div>
                        <div className='below_silver' >Once we go over any questions
                            or concerns you may have, and present you
                            with a no-obligation offer. You decide if to
                            accept it or not.</div>
                    </div>
                    <div><img className='grey_arrow' src={grey_arrow} /></div>


                    <div className='steps_col' >
                        <div><img className='num_pic' src={three} /></div>
                        <div className='below_num_pic' >GET PAID</div>
                        <div><img className='silver_pics' src={threepic} /></div>
                        <div className='below_silver' >Close on the date of your choice at a title
                            company's office or in the comfort of your
                            home – Cash in your hands!</div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Process
