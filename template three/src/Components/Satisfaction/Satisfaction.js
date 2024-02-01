import React from 'react'
import "./../Satisfaction/SatisfactionStyle.css"
import faces from "./../../Assets/faces.png"
import persons from "./../../Assets/persons.png"
import hand from "./../../Assets/hand.png"
import handshaking from "./../../Assets/handshaking.png"


function Satisfaction() {
  return (
    <div className=' satisfy_main'>

    <div className='satisfy_left'>
    
        <div className='icons_and_text '>
          <div> <img className='three_icons' src={faces}/> </div> 

          <div > <div className='icons_headings'>Client Satisfaction Guaranteed</div>
            <p className='below_icons_headings'>We will learn about your needs and assess your <br/>home by walking through the property with you, <br/>explaining the process as we go.</p>
          </div> 
        
        </div>


        <div className='icons_and_text '>
        <div> <img className='three_icons' src={persons}/> </div>
        <div> <div className='icons_headings'>Be a part of Our Community</div> 
              <p className='below_icons_headings'>After our property analysis is complete, we will <br/>send you a firm offer based on your wants and <br/>needs. We make this stress-free.</p>
        </div>
        </div>

        <div className='icons_and_text '>
        <div> <img className='three_icons' src={hand}/> </div>
        <div ><div className='icons_headings'>Our Offer Won't Change</div>
             <p className='below_icons_headings'>Your property will be purchased with cash, so <br/>you can close on your schedule.</p>
        </div>
        </div>
    </div>


    <div className='satisfy_right'>
        <div className='handshake_left'></div>

        <div className='handshake_right mr-5'>
            <div className='handshaking_img_div'> <img className='handshaking_img' src={handshaking} /> </div>
            <div className='selling_home_text'>Selling<br/> Your Home Should Be Simple</div>
        </div>
    </div>
      
    </div>
  )
}

export default Satisfaction
