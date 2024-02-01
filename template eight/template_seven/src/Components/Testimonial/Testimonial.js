import React, { useRef } from "react";
import "./../Testimonial/TestimonialStyle.css";
import strip_3 from "./../../Assets/strip_3.png";
import pic1 from "./../../Assets/pic1.png"
import pic2 from "./../../Assets/pic2.png"
import pic3 from "./../../Assets/pic3.png"


function Testimonial() {

  return (
    <div className="colored_main">
      <div className="test_manual_width" >
        <div className="testimonial_content">
          <div className="strip_3_div">
            {" "}
            <img className="strip_3_img" src={strip_3} />{" "}
          </div>
          <div className="testimonial_heading">What Our Client Say</div>              
          <div className="text_para"> “I wanted to thank you for purchasing my home I am very happy with how easy the process was for my family. I really appreciate you giving us a month after closing to move into our new home. I will be   recommending you t anyone I know that needs to sell 
there home.”  </div>

                <div className="my_cards ">
                  <div                 
                    className="col client_1"
                  >
                    <div className='client_1_class' ><img className='client_1_img' src={pic1} /></div>
                    <div className="client_names" >Kim Kardashian<br /> <span className="client_txt"> Client </span></div>
                  </div>

                  <div
                    className="col client_2"
                  >
                    <div className='client_1_class' ><img className='client_1_img' src={pic3} /></div>
                    <div className="client2_name" >Kim Kardashian<br /> <span className="client_txt"> Client </span></div>
                  </div>
                  <div
                 
                    className="col client_1"
                  >
                    <div className='client_1_class' ><img className='client_1_img' src={pic2} /></div>
                    <div className="client_names" >Kim Kardashian<br /> <span className="client_txt"> Client </span></div>
                  </div>
                </div>
            
          
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
