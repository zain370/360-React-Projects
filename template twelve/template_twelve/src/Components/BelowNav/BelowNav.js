import React from 'react'
import "./../BelowNav/BelowNavStyle.css"
import modalpic from "./../../Assets/modalpic.png"

function BelowNav() {
    return (<>




        <div className='main_below_nav'>
            <div className='below_nav_content' >

                <div className='below_nav_heading'>We <b>Buy</b> Houses. Any <b>Condition</b>, Any <br />     <b>Situation</b>, & Any <b>Problem</b>
                </div>

                <div className='hassle_txt' >We take the hassle out of selling, with an "as is" purchase. Click below for a no obligation offer! </div>

                <div className='top_btn' type="button" data-toggle="modal" data-target=".bd-example-modal-lg">SELL YOUR HOUSE </div>

            </div>

        </div>






        <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">

                    <div className='my_modal row' >
                        <div className='col-lg-6 col-xl-6 col-12' >
                            <img className="modal_pic_style" src={modalpic} />
                        </div>
                        <div className='col-lg-6 col-xl-6 col-12' >
                            <div className='modal_margin' >
                                <div className='modla_heading' >SELL YOUR HOME FAST</div>
                                <div className='modal_para' >We Buy Homes Fast in the Greater Sacramento Area. Fill out
                                    the form and we'll get back to you within 24 hours.
                                </div>

                                <div className="actual_form" >

                                    <form className="myformFields" action="#">
                                        <div className="form_row" >
                                            <label className="my_form_labels">Name: </label>
                                            <input className="myy_form_inputs" type="text" required />
                                        </div>


                                        <div className="form_row" >
                                            <label className="my_form_labels">Email:</label>

                                            <input className="myy_form_inputs" type="email" required />

                                        </div>

                                        <div className="form_row" >
                                            <label className="my_form_labels third_input">Phone:</label>

                                            <input className="myy_form_inputs" type="phone" required />
                                        </div>


                                        <div className="form_row" >
                                            <label className="my_form_labels third_input">Address:</label>

                                            <input className="myy_form_inputs" type="text" required />

                                        </div>


                                        <div className="my_form_btn"  >
                                            <div className="my_form_button " type="submit">
                                            Send Message
                                            </div>
                                        </div>





                                    </form>
                                </div>


                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    </>


    )
}

export default BelowNav
