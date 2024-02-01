import React from 'react'
import "./../ThreeSteps/ThreeStepsStyle.css"
import selling1 from "./../../Assets/selling1.png"
import selling2 from "./../../Assets/selling2.png"
import selling3 from "./../../Assets/selling3.png"


function ThreeSteps() {
    return (
        <div className='main_steps_div'>
            <div className='steps_heading' >Three Easy Steps</div>
            <div className='steps_content' >

                
                    <div><img className='step_card_img1' src={selling1} /></div>
               

              
                    <div><img className='step_card_img2' src={selling2} /></div>
                    
               

                
                    <div><img className='step_card_img3' src={selling3} /></div>
                    
                

            </div>

        </div>
    )
}

export default ThreeSteps
