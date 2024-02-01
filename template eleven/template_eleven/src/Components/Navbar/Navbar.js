import React from 'react'
import "./../Navbar/NavbarStyle.css"
import quest_logo from "./../../Assets/quest_logo.png"
import phone_icon from "./../../Assets/phone_icon.png"

function Navbar() {
  return (
    <div className="main_div_navbar">
    <nav class="navbar navbar-expand-lg ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img class="navbar-brand company_logo_image" href="#" src={quest_logo} />
        </a>

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
              <a class="nav-link why_review_faq_text" href="#id_testimonial">
                Reviews
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link why_review_faq_text" href="#id_questions">
                FAQS
              </a>
            </li>
          </ul>

          
            <div className=" button_navbar_end row">
              <div className="phone_div col-lg-2
              col-md-2 col-2">
                <img src={phone_icon} className="phone_logo_navbar" />
              </div>

              <div type="button" className="my_top_blue_btn col-lg-10 col-md-10 col-10">
              866-931-6501
              </div>
            </div>
          

        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navbar
