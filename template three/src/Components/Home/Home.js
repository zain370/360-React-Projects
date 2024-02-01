import React from "react";
import ThreeEasySteps from "../ThreeEasySteps/ThreeEasySteps";
import SellingComparison from "../SellingComparison/SellingComparison";
import FreeConsultation from "../FreeConsultation/FreeConsultation";
import Satisfaction from "../Satisfaction/Satisfaction";
import HomeFeedback from "../HomeFeedback/HomeFeedback";
import OfferQuestions from "../OfferQuestions/OfferQuestions";
import BuyerForm from "../BuyerForm/BuyerForm";
import Convenience from "../Convenience/Convenience";
import NavbarHomeOffer from "../NavbarHomeOffer/navbarHome.js";

function Home() {
  return (
    <div>
      <NavbarHomeOffer />
      <BuyerForm />
      <div id="id_steps">
        <ThreeEasySteps />
      </div>
      <div id="id_comparison">
        <SellingComparison />
      </div>
      <div id="id_consultation">
        <FreeConsultation />
      </div>
      <div id="id_satisfaction">
        <Satisfaction />
      </div>
      <div id="id_feedback">
        <HomeFeedback />
      </div>
      <div id="id_questions">
        <OfferQuestions />
      </div>
      <Convenience />
    </div>
  );
}

export default Home;
