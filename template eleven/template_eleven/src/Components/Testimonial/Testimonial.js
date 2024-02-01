import React from 'react'
import "./../Testimonial/TestimonialStyle.css"
import client_1 from "./../../Assets/client_1.png"
import client_2 from "./../../Assets/client_2.png"
import client_3 from "./../../Assets/client_3.png"
import review from "./../../Assets/review.png"
import arrow from "./../../Assets/arrow.png"


function Testimonial() {
    return (
        <div className='main_testimonial_div'>
            <div className='client_heading' >WHAT OUR CLIENTS SAY</div>

            <div className='testimonial_col_flex' >

                <div className='testimonial_row' >
                    <div className='profile' >
                        <img className='profile_pic' src={client_1} />
                        <div className='profile_textual' >
                            <div className='client_name' >Michael Miller</div>
                            <div className='client_profession' >Software Engineer</div>
                        </div>
                    </div>
                    <div>
                        <img className='review_img' src={review} />
                    </div>
                </div>

                <div className='testimonial_row' >
                    <div className='profile' >
                        <img className='profile_pic' src={client_2} />
                        <div className='profile_textual' >
                            <div className='client_name' >Tracy M.</div>
                            <div className='client_profession' >Software Engineer</div>
                        </div>
                    </div>
                    <div>
                        <img className='review_img' src={review} />
                    </div>
                </div>

                <div className='testimonial_row' >
                    <div className='profile' >
                        <img className='profile_pic' src={client_3} />
                        <div className='profile_textual' >
                            <div className='client_name' >Michael Miller</div>
                            <div className='client_profession' >Software Engineer</div>
                        </div>
                    </div>
                    <div>
                        <img className='review_img' src={review} />
                    </div>
                </div>

            </div>

            <div className='btn_center_flex' >
                <div className='testimonial_btn' type="button" >
                    <div className='t_btn_text'>See More</div>
                    <img className='arrow_img'  src={arrow}/>
                </div>
            </div>

        </div>
    )
}

export default Testimonial
