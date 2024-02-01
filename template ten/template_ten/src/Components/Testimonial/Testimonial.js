import React from 'react'
import "./../Testimonial/TestimonialStyle.css"
import lbtn from "./../../Assets/lbtn.png"
import rbtn from "./../../Assets/rbtn.png"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="main_button_slider_div ">
        <div className={className} style={{ ...style }} onClick={onClick} />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="main_button_slider_div">
        <div className={className} style={{ ...style }} onClick={onClick} />
      </div>
    );
  }


function Testimonial() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };
      return (
        <>
          <div className="main_div_client_review mb-5">
          <div className='testimonial_heading' >What our clients say</div>
            <div className="below_main_div">
              
    
              <Slider {...settings}>
                <div className="backg_black">
                  
                </div>
    
                <div className="backg_black">
                  
                </div>
    
                <div className="backg_black">
                  
                </div>
    
                <div className="backg_black">
                  
                </div>

                
              </Slider>
            </div>
          </div>
        </>
      );
    }

export default Testimonial
