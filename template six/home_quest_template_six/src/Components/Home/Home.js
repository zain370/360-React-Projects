import React from "react";
import "./../Home/HomeStyle.css";
import Navbar from "../Navbar/Navbar";
import BuyerForm from "../BuyerForm/BuyerForm";
import ThreeSteps from "../ThreeSteps/ThreeSteps";
import Comparison from "../Comparison/Comparison";
import Satisfaction from "../Satisfaction/Satisfaction";
import Testimonial from "../Testimonial/Testimonial";
import Questions from "../Questions/Questions";
import Convenience from "../Convenience/Convenience";

function Home() {
  return (
    <div>
      <div className="myDiv">
        <Navbar />
        <BuyerForm />
      </div>
      <div id="id_steps">
        {" "}
        <ThreeSteps />{" "}
      </div>
      <div id="id_comparison">
        {" "}
        <Comparison />
      </div>
      <Satisfaction />
      <div id="id_feedback">
        <Testimonial />
      </div>
      <div id="id_questions">
        <Questions />
      </div>
      <Convenience />
    </div>
  );
}

export default Home;
