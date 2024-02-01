import React from 'react'
import "./../Footer/FooterStyle.css"
import logo from "./../../Assets/logo192.png"
import user from "./../../Assets/user.png"
import sms from "./../../Assets/sms.png"




function Footer() {
    return (
        <div className='main_footer_div'>
            <div className='footer_row_contet' >

                <div className='left_footer' >
                    <div><img className='logo_image' src={logo} /></div>
                    <div className='below_logo_img' >We are strongly focused on
                        providing Business operatios,
                        Consulting services and
                        Software solutions.</div>

                </div>

                <div className='middle_footer' >
                    <div className='link_heading' >Quick Links</div>
                    <ul className='mylist'> <li>About Us</li>
                         <li>Engineering Services</li>
                         <li>Business Services</li>
                         <li>Career</li>
                         <li>Testimonials</li>
                    
                    </ul>
                </div>

                <div className='last_footer' >
                    <div className='contact_txt' >Contact Us</div>
                    <div className='below_contact' >Want Job or Want to Submit  some Feedback. Feel Free to Contact</div>

                <div className='footer_form_div' >
                    <form className='footer_form'>
                    <div className='first_two_inputs' >
                        <div><img className='user_img' src={user} /></div>
                        <div>  <input className="footer_form_input" type="text" required placeholder='Name' /> </div>
                    </div>
                    <div className='first_two_inputs' >
                        <div><img className='user_img' src={sms} /></div>
                        <div>  <input className="footer_form_input" type="email" required placeholder='Email' /> </div>
                    </div>
              
                    <textarea className='myTextarea' ></textarea>
                    <button type="submit"  className='footer_btn'>Submit</button>
                   
                    </form>
                </div>

                </div>

            </div>

        </div>
    )
}

export default Footer
