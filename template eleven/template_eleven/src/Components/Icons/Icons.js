import React from 'react'
import "./../Icons/IconsStyle.css"
import icon_1 from "./../../Assets/icon_1.png"
import icon_2 from "./../../Assets/icon_2.png"
import icon_3 from "./../../Assets/icon_3.png"
import icon_4 from "./../../Assets/icon_4.png"
import icon_5 from "./../../Assets/icon_5.png"

function Icons() {
  return (
    <div className='main_beige_colored'>
      <div className='icons_flex' >

        <div className='icon_content' >
          <img className='icons_class' src={icon_1} />
          <div className='icon_text'>Purchase In Any Condition</div>
        </div>

        <div className='icon_content' >
          <img className='icons_class' src={icon_2} />
          <div className='icon_text'>Highest Cash Offer</div>
        </div>

        <div className='icon_content' >
          <img className='icons_class' src={icon_3} />
          <div className='icon_text'>No Repair Needed</div>
        </div>

        <div className='icon_content' >
          <img className='icons_class' src={icon_4} />
          <div className='icon_text'>No Fees or Commision</div>
        </div>

        <div className='icon_content' >
          <img className='icons_class' src={icon_5} />
          <div className='icon_text'>Virtual Consultation Available</div>
        </div>
      </div>
    </div>
  )
}

export default Icons
