import React from "react";
import "./../ThreeSteps/ThreeStepsStyle.css";
import first from "./../../Assets/first.png";
import second from "./../../Assets/second.png";
import third from "./../../Assets/third.png";
import fourth from "./../../Assets/fourth.png";

function ThreeSteps() {
  return (
    <div className=" satisfy_main">
      <div className="satisfy_left">
        <div className="steps_heading">Three Easy Steps</div>

        <div className="icons_and_text ">
          <div>
            {" "}
            <img className="three_icons" src={first} />{" "}
          </div>

          <div>
            {" "}
            <div className="icons_headings">Client Satisfaction Guaranteed</div>
            <p className="below_icons_headings">
              We will learn about your needs and assess your <br />
              home by walking through the property with you, <br />
              explaining the process as we go.
            </p>
          </div>
        </div>

        <div className="icons_and_text ">
          <div>
            {" "}
            <img className="three_icons" src={second} />{" "}
          </div>
          <div>
            {" "}
            <div className="icons_headings">Be a part of Our Community</div>
            <p className="below_icons_headings">
              After our property analysis is complete, we will <br />
              send you a firm offer based on your wants and <br />
              needs. We make this stress-free.
            </p>
          </div>
        </div>

        <div className="icons_and_text ">
          <div>
            {" "}
            <img className="three_icons" src={third} />{" "}
          </div>
          <div>
            <div className="icons_headings">Our Offer Won't Change</div>
            <p className="below_icons_headings">
              Your property will be purchased with cash, so <br />
              you can close on your schedule.
            </p>
          </div>
        </div>
      </div>

      <div className="satisfy_right">
        <img className="fourth_img" src={fourth} />
      </div>
    </div>
  );
}

export default ThreeSteps;
