import React from 'react'
import "./../Selling/SellingStyle.css"
import long_yellow from "./../../Assets/long_yellow.png"
import first_pic from "./../../Assets/first_pic.png"
import second_pic from "./../../Assets/second_pic.png"
import third_pic from "./../../Assets/third_pic.png"


function Selling() {
    return (
        <div className='selling_main'>
            <div className='selling_content' >
                <div className='selling_text'>Selling your <strong>home </strong>should be simple</div>

                <div className='selling_row_flex' >
                    <img className='selling_yellow_img' src={long_yellow} />
                    <div className='selling_text_col' >
                        <div className='first_row' >

                            <div className='step_head_text'>
                                <div className='three_sellings_headings' >Client Satisfaction Guaranteed</div>
                                <p className='below_step_headings' >We pride ourselves on a world class experience. Inquire today to find out about our client satisfaction guarantee.</p>
                            </div>

                            <img className='selling_images' src={first_pic} />

                        </div>

                        <div className='first_row' >

                            <div className='step_head_text'>
                                < div className='three_sellings_headings' >Client Satisfaction Guaranteed</ div>
                                <p className='below_step_headings' >We pride ourselves on a world class experience. Inquire today to find out about our client satisfaction guarantee.</p>
                            </div>

                            <img className='selling_images' src={second_pic} />

                        </div>

                        <div className='first_row' >

                            <div className='step_head_text'>
                                < div className='three_sellings_headings' >Client Satisfaction Guaranteed</ div>
                                <p className='below_step_headings' >We pride ourselves on a world class experience. Inquire today to find out about our client satisfaction guarantee.</p>
                            </div>

                            <img className='selling_images' src={third_pic} />

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Selling
