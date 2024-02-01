import React from "react";
import "./../SellingComparison/SellingComparisonStyle.css";
import homeOfferLogo from "./../../Assets/logohome.png";
import tick from "./../../Assets/tick.png"
import cross from "./../../Assets/cross.png"


function SellingComparison() {
  return (
    <div className=" comparison_main_div">
      <div>
        <p className="comparison_heading">
          Selling With Us <br />
          VS. <br /> Listing With A Realtor
        </p>
      </div>

      <div className="comparison_box">
        <div className=" row comparison_headings">
          <div className="col-6 comparison_left_heading ">
            <img className="realtor_logo" src={homeOfferLogo} />
            {/* <p className="home_offer_texts">HOME OFFER <br/><span className="direct_texts">DIRECT</span></p> */}

            <div className=" logo_text">
              <p className="home_offer_texts">HOME OFFER</p>
              <p className="direct_texts">DIRECT</p>
            </div>
          </div>
          <div className="col-6 comparison_right_heading">
            <div className="listing_text">Listing With a Realtor</div>
          </div>
        </div>

        <div className="all_capsules">
        
          <div className=" comparison_capsule">

            <div className=" row capsule_left">  
            <div className="col-lg-2 col-md-2 col-2 tick_outer_box "> <img className="tick_img" src={tick} /></div>           
            <div className="col-lg-10 col-md-10 col-10 left_capsule_text">  None </div>         
            </div>

            <div className="capsule_middle">Commision / Fee</div>


            <div className="row capsule_right">
                <div className="col-lg-10 col-md-10 col-10 right_capsule_text">6% on average is paid by you</div>
                <div className="col-lg-2 col-md-2 col-2 cross_outer_box"><img className="cross_img" src={cross} /></div>
            </div>
            
          </div>

          <div className=" comparison_capsule">

            <div className=" row capsule_left">  
            <div className="col-lg-2 col-md-2 col-2 tick_outer_box "> <img className="tick_img" src={tick} /></div>           
            <div className="col-lg-10 col-md-10 col-10 left_capsule_text"> NO Closing Costs </div>         
            </div>

            <div className="capsule_middle">Who Pays Closing <br/>Costs?</div>


            <div className="row capsule_right">
                <div className="col-lg-10 col-md-10 col-10 right_capsule_text">2% on average is paid by you</div>
                <div className="col-lg-2 col-md-2 col-2 cross_outer_box"><img className="cross_img" src={cross} /></div>
            </div>
            
          </div>

          <div className=" comparison_capsule">

            <div className=" row capsule_left">  
            <div className="col-lg-2 col-md-2 col-2 tick_outer_box "> <img className="tick_img" src={tick} /></div>           
            <div className="col-lg-10 col-md-10 col-10 left_capsule_text">  None </div>         
            </div>

            <div className="capsule_middle">Inspections & <br/>Financing Contingency*</div>


            <div className="row capsule_right">
                <div className="col-lg-10 col-md-10 col-10 right_capsule_text">Yes, up to 15% of sales fall<br/> through</div>
                <div className="col-lg-2 col-md-2 col-2 cross_outer_box"><img className="cross_img" src={cross} /></div>
            </div>
            
          </div>


          <div className=" comparison_capsule">

            <div className=" row capsule_left">  
            <div className="col-lg-2 col-md-2 col-2 tick_outer_box "> <img className="tick_img" src={tick} /></div>           
            <div className="col-lg-10 col-md-10 col-10 left_capsule_text">NONE- We make cash offers</div>         
            </div>

            <div className="capsule_middle">Appraisal Needed</div>


            <div className="row capsule_right">
                <div className="col-lg-10 col-md-10 col-10 right_capsule_text">Yes, sale is often subject <br/>to appraisal</div>
                <div className="col-lg-2 col-md-2 col-2 cross_outer_box"><img className="cross_img" src={cross} /></div>
            </div>
            
          </div>

          <div className=" comparison_capsule">

            <div className=" row capsule_left">  
            <div className="col-lg-2 col-md-2 col-2 tick_outer_box "> <img className="tick_img" src={tick} /></div>           
            <div className="col-lg-10 col-md-10 col-10 left_capsule_text">IMMEDIATE CASH OFFER</div>         
            </div>

            <div className="capsule_middle">Average Days <br/>Until Sold</div>


            <div className="row capsule_right">
                <div className="col-lg-10 col-md-10 col-10 right_capsule_text">+/- 91 Days</div>
                <div className="col-lg-2 col-md-2 col-2 cross_outer_box"><img className="cross_img" src={cross} /></div>
            </div>
            
          </div>

          <div className=" comparison_capsule">

            <div className=" row capsule_left">  
            <div className="col-lg-2 col-md-2 col-2 tick_outer_box "> <img className="tick_img" src={tick} /></div>           
            <div className="col-lg-10 col-md-10 col-10 left_capsule_text"> 1 (Just Us)</div>         
            </div>

            <div className="capsule_middle">Number of Showings</div>


            <div className="row capsule_right">
                <div className="col-lg-10 col-md-10 col-10 right_capsule_text">Multiple Showings</div>
                <div className="col-lg-2 col-md-2 col-2 cross_outer_box"><img className="cross_img" src={cross} /></div>
            </div>
          </div>

          <div className=" comparison_capsule">

            <div className=" row capsule_left">  
            <div className="col-lg-2 col-md-2 col-2 tick_outer_box "> <img className="tick_img" src={tick} /></div>           
            <div className="col-lg-10 col-md-10 col-10 left_capsule_text"> Close on YOUR TIME FRAME </div>         
            </div>

            <div className="capsule_middle">Closing Date</div>


            <div className="row capsule_right">
                <div className="col-lg-10 col-md-10 col-10 right_capsule_text">30-60 days after buyers offer</div>
                <div className="col-lg-2 col-md-2 col-2 cross_outer_box"><img className="cross_img" src={cross} /></div>
            </div>
            
          </div>

          <div className=" comparison_capsule">

            <div className=" row capsule_left">  
            <div className="col-lg-2 col-md-2 col-2 tick_outer_box "> <img className="tick_img" src={tick} /></div>           
            <div className="col-lg-10 col-md-10 col-10 left_capsule_text"> NO REPAIRS NEEDED </div>         
            </div>

            <div className="capsule_middle">Who Pay For Repairs?</div>


            <div className="row capsule_right">
                <div className="col-lg-10 col-md-10 col-10 right_capsule_text">Paying for Repairs or Upkeep</div>
                <div className="col-lg-2 col-md-2 col-2 cross_outer_box"><img className="cross_img" src={cross} /></div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default SellingComparison;
