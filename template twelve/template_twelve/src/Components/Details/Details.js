import React from 'react'
import "./../Details/DetailsStyle.css"
import building from "./../../Assets/building.png"
import lady from "./../../Assets/lady.png"

function Details() {
    return (
        <div className='main_detail_div'>

            <div className='details_background' >
                <div className='first_detail' >
                    <div className='first_detail_head' >TOP Dollar for Your Broward County Home</div>
                    <div className='below_first_detail' >Selling a house in Broward County with a Realtor is not always the best option for everyone. There are plenty of headaches when working with a licensed real estate agent to sell your home.</div>


                    <div className='below_first_detail2'>There is lots of paperwork, months of uncertainty, fees, and the inconvenience of showing your home to multiple people at
                        odd hours of the day and night.</div>

                    <div className='first_detail_btn' type="button">GET MY CASH OFFER NOW</div>

                </div>

                <div className='second_detail'  >

                    <div className='second_detail_left'>
                        <div className='second_detail_heading' >If you’re wondering, yes, there is a better way to sell your home…
                        </div>

                        <div className='second_detail_buttons' >No fees or commissions</div>
                        <div className='second_btns_text' >With Property Nation, there are<br />
                            no realtor commissions or closing fees to pay.</div>


                        <div className='second_detail_buttons' >No repairs or cleaning</div>
                        <div className='second_btns_text' >Forget cleaning up your home or spending money to repair
                            it in order to show it to potential buyers,we’ll buy your
                            house exactly the way it is.</div>

                        <div className='second_detail_buttons' >Less paperwork</div>
                        <div className='second_btns_text' >When working with agents, you have to deal with mountains
                            of paperwork. At Property Nation, we have one simple easy
                            to understand sales agreement.</div>

                        <div className='second_detail_buttons' >No long-term commitments</div>
                        <div className='second_btns_text' >When working with an agent, you can get locked into a
                            lengthy long term contract hoping your agent finds you a
                            buyer. We are the buyer.</div>

                    </div>
                    <div  ><img className='building_img' src={building} /></div>


                </div>

                <div className='third_detail' >
                    <div> <img className='lady_img' src={lady} /></div>

                    <div className='third_detail_right' >
                        <div className='third_detail_text' >The traditional home selling experience can take
                            months to complete from beginning to end, on top of
                            having to pay Realtor commissions. With Property
                            Nation, it’s much easier!</div>
                        <div className='third_detail_text' ><b className='mybold'>We’re not listing your house…</b> we’re actually the ones
                            buying your house. Since we pay cash, we’re able to
                            close quickly… or on your schedule. Like we’ve
                            mentioned, when you work with us there are no
                            fees… like there are when you list your house with
                            an agent.

                            .</div>

                        <div className='third_detail_text' >Once you send us your info, we’re usually able to
                            make you a fair all-cash offer within 24 hours. From
                            there, we can close as quickly as 7 days… or on your
                            schedule (sometimes we can have a check in your
                            hand the very same day!)</div>



                    </div>
                </div>

            </div>

        </div>
    )
}

export default Details
