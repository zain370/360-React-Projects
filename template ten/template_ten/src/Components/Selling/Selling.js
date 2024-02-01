import React from 'react'
import "./../Selling/SellingStyle.css"
import window from "./../../Assets/window.png"
import first from "./../../Assets/firstt.png"
import second from "./../../Assets/secondd.png"
import third from "./../../Assets/thirdd.png"


function Selling() {
    return (
        <div className='main_selling'>
            <div className='selling_text' >Selling Your Home Should Be Simple</div>
            <div className='selling_content' >
                <div><img className='window_img' src={window} /></div>
                <div className='right_selling_blue' >
                    <div className='selling_row' >
                        <img className='circles' src={first} />
                        <div className='circle_right' >
                            <div className='circle_heading' >Client Satisfaction Guaranteed</div>
                            <div className='below_circle_heading' >We pride ourselves on a world class experience.
                                Inquire today to find out about our client
                                satisfaction guarantee.</div>
                        </div>

                    </div>


                    <div className='selling_row' >
                        <img className='circles' src={second} />
                        <div className='circle_right' >
                            <div className='circle_heading' >Be a part of Our Community</div>
                            <div className='below_circle_heading' >Join the thousands of sellers we've helped get
the cash they need.</div>
                        </div>

                    </div>


                    <div className='selling_row' >
                        <img className='circles' src={third} />
                        <div className='circle_right' >
                            <div className='circle_heading' >Our Offer Won't Change</div>
                            <div className='below_circle_heading' >Unlike websites that give you an online "offer" and
then change it later - we'll provide you with
a real cash offer that doesn't change at closing.</div>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default Selling
