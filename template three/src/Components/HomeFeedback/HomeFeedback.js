import React from "react";
import "./../HomeFeedback/HomeFeedbackStyle.css";
import feedback_one from "./../../Assets/feedback_one.png"
import feedback_two from "./../../Assets/feedback_two.png"
import feedback_three from "./../../Assets/feedback_three.png"
function HomeFeedback() {
  return (
    <div className="feedback_main_div">
      <div className="feedback_heading">WHAT OUR CLIENTS SAY </div>

      <div className="feedback_cards">

      <div className="f_img_div">  <img className="f_img" src={feedback_one} />   </div>

      <div className="f_img_div">  <img className="f_img" src={feedback_two} />   </div>

      <div className="f_img_div">  <img className="f_img" src={feedback_three} />   </div>


      </div>




    </div>
  );
}

export default HomeFeedback;
