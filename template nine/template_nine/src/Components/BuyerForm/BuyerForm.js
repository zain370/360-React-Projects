import React from 'react'
import "./../BuyerForm/BuyerFormStyle.css"


function BuyerForm() {
  return (
    <div className="main_img_div">
            <div className="div_for_centering">
                <div className="buyer_form_content">
                    <div className="america_text">
                        AMERICA’S MOST <br/>
                         <span className='trusted_text'>TRUSTED</span>
                          <br />
                        HOME BUYER
                    </div>
                    <div className="below_america_text">
                        Schedule your free consultation today to <br />
                        find out how we can help you
                    </div>

                  
                        <div className="blurry_card">
                            <div className="card_content">
                                <div className="blurry_card_heading">
                                    {" "}
                                    Get Your Cash Offer In 30 Minutes Or Less!
                                </div>

                                <div className="form_div">
                                    <form className="actual_form" action="#">
                                        <div className="form_row">
                                            <input
                                                className="my_form_inputs"
                                                type="text"
                                                placeholder=" First Name*"
                                                required
                                            />

                                            <input
                                                className="my_form_inputs"
                                                type="text"
                                                placeholder=" Last Name*"
                                                required
                                            />
                                            <br />
                                        </div>

                                        <div className="form_row">
                                            <input
                                                className="my_form_inputs"
                                                type="email"
                                                required
                                                placeholder=" Email*"
                                            />
                                            <input
                                                className="my_form_inputs"
                                                type="phone"
                                                placeholder=" Phone Number*"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <input
                                                className="address_inputs"
                                                type="text"
                                                placeholder=" Address*"
                                                required
                                            />
                                            <br />
                                        </div>

                                        <div className="btn_class_center">
                                            <button className="my_form_button " type="submit">
                                                Get My Offer Now!
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        
                    
                </div>
            </div>
        </div>
  )
}

export default BuyerForm
