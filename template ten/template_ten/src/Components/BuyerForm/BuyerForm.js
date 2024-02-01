import React from "react";
import "./../BuyerForm/BuyerFormStyle.css";
import bullet from "./../../Assets/bullet.png"
function BuyerForm() {
    return (
        <div className="main_buter_pic">
            <div className="buyer_form_content">
                <div className="textual">

                    <div className="america_text">
                        AMERICA’S <br />
                        MOST TRUSTED <br />
                        HOME BUYER
                    </div>

                    <div className="below_america_text">
                        Schedule your free consultation today to <br />
                        find out how we can help you
                    </div>

                    <div className="my_bullets">
                        <div className="bullet_row" >
                            <div className="bullet" ><img className="bullet_img" src={bullet} /></div>
                            <div className="bullet_txt" >Highest Cash Offer</div>
                        </div>
                        <div className="bullet_row" >
                            <div className="bullet" ><img className="bullet_img" src={bullet} /></div>
                            <div className="bullet_txt" >No Repairs Needed</div>
                        </div>
                        <div className="bullet_row" >
                            <div className="bullet" ><img className="bullet_img" src={bullet} /></div>
                            <div className="bullet_txt" >Purchase In Any Condition</div>
                        </div>
                        <div className="bullet_row" >
                            <div className="bullet" ><img className="bullet_img" src={bullet} /></div>
                            <div className="bullet_txt" >No Fees or Commission</div>
                        </div>
                        <div className="bullet_row" >
                            <div className="bullet" ><img className="bullet_img" src={bullet} /></div>
                            <div className="bullet_txt" >Virtual Consultations Available</div>
                        </div>
                    </div>

                </div>



                <div className="my_form">
                    <div className="form_content">
                        <div className="form_heading">Get your cash offer <br />in less than 30 minutes!</div>
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
                                <button className="my_form_button " type="submit">
                                Get My Offer Now!
                                </button></div>
                                



                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BuyerForm;
