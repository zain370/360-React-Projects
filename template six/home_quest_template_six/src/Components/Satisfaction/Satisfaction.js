import React from "react";
import "./../Satisfaction/SatisfactionStyle.css";
import overlaped_pics from "./../../Assets/overlaped_pics.png";
import random_right from "./../../Assets/random_right.png";
import myarrow from "./../../Assets/myarrow.png";

function Satisfaction() {
  return (
    <div className="satisfaction_main">
      <span className="random_right_div">
        {" "}
        <img className="random_right_img" src={random_right} />
      </span>

      <div className="satisfaction_content">
        <div className="overlaped_right_div">
          {" "}
          <img className="overlaped_img" src={overlaped_pics} />
        </div>

        <div className="simple_sellings">
          <div className="selling_heading">
            Selling Your Home <br />
            Should Be Simple
          </div>

          <div className="arrow_text">
            <div className="arrow_img_div">
              {" "}
              <img className="myarrow_img" src={myarrow} />{" "}
            </div>
            <div className="arrow_text_div">
              <div className="satisfaction_heading">
                Client Satisfaction Guaranteed
              </div>
              <p className="below_satisfaction_heading">
                We pride ourselves on a world class experience <br />
                Inquire today to find out about our client <br />
                satisfaction guarantee.
              </p>
            </div>
          </div>

          <div className="arrow_text">
            <div className="arrow_img_div">
              {" "}
              <img className="myarrow_img" src={myarrow} />{" "}
            </div>
            <div className="arrow_text_div">
              <div className="satisfaction_heading">
                Be a part of Our Community
              </div>
              <p className="below_satisfaction_heading">
                Join the thousands of sellers we've helped get <br />
                the cash they need.
              </p>
            </div>
          </div>

          <div className="arrow_text">
            <div className="arrow_img_div">
              {" "}
              <img className="myarrow_img" src={myarrow} />{" "}
            </div>
            <div className="arrow_text_div">
              <div className="satisfaction_heading">Our Offer Won't Change</div>
              <p className="below_satisfaction_heading">
                Unlike websites that give you an online "offer" and <br />
                then change it later - we'll provide you with <br />a real cash
                offer that doesn't change at closing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Satisfaction;
