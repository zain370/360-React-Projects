import React from "react";
import "./../Testimonial/TestimonialStyle.css";
import testiminoal_img from "./../../Assets/myreview.png";
import lightb from "./../../Assets/lightb.png";
import random_left from "./../../Assets/random_left.png";

import Slider from "react-slick";
function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="main_testimonial_divv">
      <div className="random_left_div">
        {" "}
        <img className="random_left_img" src={random_left} />
      </div>
      <div className="testimonial_heading">What Our Clients Say</div>

      <Slider {...settings}>
        <div className="abc">
          <div className="main_testimonial_div">
            <div className="testiminoal_img_div">
              {" "}
              <img className="testimonial_img" src={testiminoal_img} />
            </div>
          </div>
        </div>

        <div className="main_testimonial_div">
          <div className="testiminoal_img_div ttt">
            {" "}
            <img className="testimonial_img" src={testiminoal_img} />
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Testimonial;
