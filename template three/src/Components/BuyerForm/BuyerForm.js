import React from "react";
import formback from "./../../Assets/formback.png";
import first from "./../../Assets/first.png";
import second from "./../../Assets/second.png";
import third from "./../../Assets/third.png";
import fourth from "./../../Assets/fourth.png";
import fifth from "./../../Assets/fifth.png";
import "./../BuyerForm/BuyerFormStyle.css";

function BuyerForm() {
  return (
    <div className="namebuyform">
      <div className="row behind_form">
        <div className="col-lg-2 col-2 col-md-1 col-sm-1"> </div>

        <div className="col-lg-7 col-12 col-md-7  main_america">
          <p className="america_text">
            {" "}
            AMERICA'S
            <br />
            MOST TRUSTED HOME <span className="buyer_text">BUYER</span>{" "}
          </p>
          <p className="schedule_text">
            Schedule your free consultation today
            <br /> to find out how we can help you
          </p>
        </div>

        <div className="col-lg-3 col-12 col-md-3 third_div"  >
          <div className="side_form_background">
            <div className="form_heading">
              {" "}
              Get Your Cash Offer
              <br /> In 30 Minutes Or Less!{" "}
            </div>

            <div className="actual_form">
              <form action="#">
                <label className="my_form_labels">Name* </label>
                <br />
                <input className="my_form_inputs" type="text" required />
                <br />

                <label className="my_form_labels">Phone Number*</label>
                <br />
                <input className="my_form_inputs" type="phone" required />
                <br />

                <label className="my_form_labels">Email*</label>
                <br />
                <input className="my_form_inputs" type="email" required />
                <br />

                <label className="my_form_labels">Address*</label>
                <br />
                <input className="my_form_inputs" type="text" required />
                <br />
                <br />

                <div className="btn_class_center">
                <button className="my_form_button container" type="submit">
                  Get My Offer Now!
                </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>

        <div className="lower_buttons">
            <div className="end_five_buttons leftmost_button">
                <img class="buttons_icon"  src={first} />
                <p className="icons_text"> Purchase In Any Condition</p>
            </div>

            <div className="end_five_buttons">
                <img class="buttons_icon"  src={second} />
                <p className="icons_text"> Highest Cash Offer</p>
            </div>

            <div className="end_five_buttons">
                <img class="buttons_icon"  src={third} />
                <p className="icons_text">No Repair Needed</p>
            </div>

            <div className="end_five_buttons">
                <img class="buttons_icon"  src={fourth} />
                <p className="icons_text"> No Fees or Commision</p>
            </div>

            <div className="end_five_buttons rightmost_button">
                <img class="buttons_icon"  src={fifth} />
                <p className="icons_text">Virtual Consultation Available</p>
            </div>

        </div>

    </div>
  );
}

export default BuyerForm;
