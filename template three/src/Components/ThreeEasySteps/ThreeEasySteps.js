import React from "react";
import "./../ThreeEasySteps/ThreeEasyStepsStyle.css";
import house from "./../../Assets/house.png"
import bluecircles from "./../../Assets/bluecircles.png"



function ThreeEasySteps() {
  return (
    <div className="container-fluid">
      <div className="div_behind_house">

        {/* <div className="col-lg-1 col-sm-1 "></div> */}

        <div className="col-lg-6 col-md-6 col-sm-5">
            <img className="house_image" src={house}/>
        </div>

        <div className="col-lg-6  col-md-6 col-sm-5 div_behind_div" >
            <p className="steps_text">Three Easy Steps</p>
            <img className="blue_circles" src={bluecircles} />
            <div className="circle_text row">
            
              <div className="col-lg-4 col-4">
              <p className="heading_below_circles">Schedule a Free<br/> Home Consultation</p>
              <p className="text_below_cirlces">We will learn about your needs and assess your home by walking through the property with you,  explaining the process as we go</p>
              </div>

              <div className="col-lg-4 col-4">
                <p className="heading_below_circles">Get A Cash<br/> Offer Today</p>
                <p className="text_below_cirlces">We will learn about your needs and assess your home by walking through the property with you explaining the process as we go</p>
              </div>

              <div className="col-lg-4 col-4">
                <p className="heading_below_circles">Close At<br/> Your Convenience</p>
                <p className="text_below_cirlces">Your property will be purchased with cash, so you can close on your schedule. </p>
              </div>
              
            </div>

        </div>

        {/* <div className="col-lg-1 col-sm-1"></div> */}
        
      </div>
    </div>
  );
}

export default ThreeEasySteps;
