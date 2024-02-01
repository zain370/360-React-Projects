import React from "react";
import "./../NavbarHomeOffer/navbarHome.css";
import homeOfferLogo from "./../../Assets/logohome.png";
import phone from "./../../Assets/phone (2).png";
function navbarHome() {
  return (
    <div className="main_div_navbar">
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img class="navbar-brand company_logo_image" href="#" src={homeOfferLogo} />
          </a>
          <div className="row topic_name">
            <p className="home_offer_text">HOME OFFER</p>
            <p className="direct_text">DIRECT</p>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar_text_links">
              <li class="nav-item">
                <a
                  class="nav-link why_review_faq_text"
                  aria-current="page"
                  href="#id_steps"
                >
                  How It Works
                </a>
              </li>
              <li class="nav-item">

                <a class="nav-link why_review_faq_text" href="#id_comparison">
                  Why US
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link why_review_faq_text" href="#id_feedback">
                  Reviews
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link why_review_faq_text" href="#id_questions">
                  FAQS
                </a>
              </li>
            </ul>

            <form>
              <div className=" button_navbar_end row">
                <div className=" col-lg-2
                col-md-2 col-2">
                  <img src={phone} className="phone_logo_navbar" />
                </div>

                <div type="button" className="my_top_blue_btn col-lg-10 col-md-10 col-10">
                    <p className="call_us_for_free ">Call US for Free</p>
                    <p className="phone_number_navbar  ">866-928-4635</p>
                </div>
              </div>
            </form>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default navbarHome;
