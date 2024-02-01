import React from 'react'
import "./../BlackFooter/BlackFooterStyle.css"
import bottomarrow from "./../../Assets/myarrow.png"
import Facebook from "./../../Assets/Facebook.png"
import Twiter from "./../../Assets/Twiter.png"
import Instagram from "./../../Assets/Instagram.png"
import dot from "./../../Assets/dot.png"





function BlackFooter() {
  return (
    <div className='black_main_div'>
      <div className='footer_content' >
        <div className='footer_column_flex' >

            <div className='two_yellow_flex' >
                <div className='your_logo_class' >YOUR LOGO HERE</div>
                <div className='right_offer_btn' >
                    <div className='offer_txt' >Get My offer Now</div>
                    <div className='offer_arrow_div' ><img className='offer_arrow_img   ' src={bottomarrow} /></div>
                </div>
            </div>

            <div><hr  className='myLine'/></div>

            <div className='links_flex' >
                <div className='social_media' >
                    <img  src={Facebook} className='fb_class' />
                    <img  src={Twiter} className='ins_class' />
                    <img  src={Instagram} className='ins_class' />

                </div>

                <div className='quick_links' >Quick Links
                <div className='link_row1' >
                   <img className='myDot'  src={dot} />
                   <div  >About Us</div>
                </div>
                <div className='link_row' >
                   <img className='myDot'  src={dot} />
                   <div>Engineering Services</div>
                </div>
                <div className='link_row' >
                   <img className='myDot'  src={dot} />
                   <div>Business Services</div>
                </div>
                <div className='link_row' >
                   <img className='myDot'  src={dot} />
                   <div>Career</div>
                </div>
                <div className='link_row' >
                   <img className='myDot'  src={dot} />
                   <div>Testimonials</div>
                </div>
                

                </div>
                <div className='call_txt_div' >Or Call Us For FREE  -  866-931-7447</div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default BlackFooter
