import React from 'react'
import "./../Navbar/NavbarStyle.css"
import navlogo from "./../../Assets/navlogo.png"
import phone from "./../../Assets/phone.png"

function Navbar() {
  return (
 <div className='main_navbar_div'>
    <div className='my_navbar '>
      <nav class="navbar navbar-expand-lg navbar-light bg-light pt-4">
        <a class="navbar-brand" href="#"><div className='myLogo' ><img className='myLogoClass' src={navlogo} /></div></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">


          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item ">
              <a class="nav-link nav1" href="#id_steps">How It Works </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#id_comparison">Why US</a>
            </li>

            <li class="nav-item">
              <a class="nav-link " href="#id_feedback">Reviews</a>
            </li>

            <li class="nav-item">
              <a class="nav-link " href="#id_questions">FAQs</a>
            </li>
          </ul>



          <div className='navbtn row'>
            <div className='col-3' ><img className='phone_img' src={phone} /></div>
            <div className='col-9' >Call US For Free<br/><strong className='strong_PHONE'>866-928-4635</strong></div>
          </div>
        </div>
      </nav>


    </div>
    </div>

  )
}

export default Navbar
