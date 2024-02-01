import React from 'react'
import "./../Selling/SellingSTyle.css"
import sell_img from './../../Assets/sell_img.png'
import bill from './../../Assets/bill.png'
import people from './../../Assets/people.png'
import percent from './../../Assets/percent.png'

function Selling() {
    return (
        <div className='main_selling_div'>
            <div className='selling_img_div' ><img className='selling_img' src={sell_img} /></div>

            <div className='selling_right' >
                <h2 className='selling_heading' >SELLING YOUR HOME <br />SHOULD BE SIMPLE</h2>

                <div className='selling_content'>

                    <div className='selling_row' >
                        <img className='selling_icon' src={bill} />
                        <div className='selling_textual' >
                            <h3 className='selling_three_headings' >Client Satisfaction Guaranteed</h3>
                            <p className='below_three_headings' >We pride ourselves on a world class experience.
                                Inquire today to find out about our client
                                satisfaction guarantee.</p>
                        </div>
                    </div>

                    <div className='selling_row' >
                        <img className='selling_icon' src={people} />
                        <div className='selling_textual' >
                            <h3 className='selling_three_headings' >Be a part of Our Community</h3>
                            <p className='below_three_headings' >Join the thousands of sellers we've helped get
the cash they need..</p>
                        </div>
                    </div>

                    <div className='selling_row' >
                        <img className='selling_icon' src={percent} />
                        <div className='selling_textual' >
                            <h3 className='selling_three_headings' >Our Offer Won't Change</h3>
                            <p className='below_three_headings' >Unlike websites that give you an online "offer" and
then change it later - we'll provide you with
a real cash offer that doesn't change at closing.</p>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Selling
