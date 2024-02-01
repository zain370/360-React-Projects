import React from 'react'
import "./../Navbar/NavbarStyle.css"
import navlogo from "./../../Assets/logo512.png"
function Navbar() {
    return (
        <div className='main_navbar_div'>
            <div className='my_navbar '>
                <nav class="navbar navbar-expand-lg navbar-light bg-light pt-4">
                    <a class="navbar-brand" href="#"><div className='myLogo' ><img className='myLogoClass' src={navlogo} /></div></a>
                    <div className='spacee' ></div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">


                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0  mynav">
                            <li class="nav-item mx-3">
                                <a class="nav-link " href="#id_">Sell Your House </a>
                            </li>

                            <li class="nav-item  mx-3 ">
                                <a class="nav-link " href="#id_steps">How it Works </a>
                            </li>

                            <li class="nav-item  mx-3">
                                <a class="nav-link" href="#id_comparison">Our Company</a>
                            </li>

                            <li class="nav-item  mx-3">
                                <a class="nav-link " href="#id_feedback">Reviews</a>
                            </li>

                            <li class="nav-item  mx-3">
                                <a class="nav-link " href="#id_questions">FAQs</a>
                            </li>

                            <li class="nav-item  mx-3">
                                <a class="nav-link " href="#id_">Contact Us</a>
                            </li>
                        </ul>




                    </div>
                </nav>


            </div>
        </div>

    )
}

export default Navbar
