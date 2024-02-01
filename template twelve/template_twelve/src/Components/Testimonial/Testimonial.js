import React from 'react'
import "./../Testimonial/TestimonialStyle.css"
import Slider from "react-slick";
import women from "./../../Assets/women.png"


function Testimonial() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='main_testimonial_divv'>
            <div className='feedback_strip' >Our Clients Feedback</div>
            <div className='myslider'>

                <Slider {...settings}>
                    <div className="review_div">
                        <div className='review_content'>
                            <div>
                                <img className='women_img' src={women} />
                                <div className='person_name' >Tangotag</div>
                            </div>

                            <div className='client_review'>“Imperdiet purus tristique pulvinar mDictum ullamcorper pretium mi quis. Vel at pellentesque ligula neque. Amet tincidunt”</div>
                        </div>

                    </div>


                    <div className="review_div">
                        <div className='review_content'>
                            <div>
                                <img className='women_img' src={women} />
                                <div className='person_name' >Tangotag</div>
                            </div>

                            <div className='client_review'>“Imperdiet purus tristique pulvinar mDictum ullamcorper pretium mi quis. Vel at pellentesque ligula neque. Amet tincidunt”</div>
                        </div>

                    </div>

                    <div className="review_div">
                        <div className='review_content'>
                            <div>
                                <img className='women_img' src={women} />
                                <div className='person_name' >Tangotag</div>
                            </div>

                            <div className='client_review'>“Imperdiet purus tristique pulvinar mDictum ullamcorper pretium mi quis. Vel at pellentesque ligula neque. Amet tincidunt”</div>
                        </div>

                    </div>

                </Slider>

            </div>
        </div>
    )
}

export default Testimonial
