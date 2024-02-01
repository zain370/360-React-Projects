import React from 'react'
import "./../Questions/QuestionsStyle.css"
import plus_icon from "./../../Assets/plus_icon.png"

function Questions() {
  return (
    <div className='main_questions_div'>
      <div className='inner_questions_div' >
        {/* <div className='questions_headings'>Questions? We Have Answers.</div> */}

        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div className='questions_headings'>Questions? We Have Answers.</div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                How does the process works to sell my house?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div class="accordion-body">
                We buy houses in any condition, in any area, in any price range,
                in any situation! We will buy your house as-is, you don’t need
                to do ANY repairs!
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                What sort of houses do you buy?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div class="accordion-body">
                We buy houses in any condition, in any area, in any price range,
                in any situation! We will buy your house as-is, you don’t need
                to do ANY repairs!
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                Are you REALTORS™?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div class="accordion-body">
                We buy houses in any condition, in any area, in any price range,
                in any situation! We will buy your house as-is, you don’t need
                to do ANY repairs!
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFour"
              >
                What do you mean “any condition, area, price range, or
                situation”?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <div class="accordion-body">
                We buy houses in any condition, in any area, in any price range,
                in any situation! We will buy your house as-is, you don’t need
                to do ANY repairs!
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseFive"
              >
                What if I am behind on my payments, in foreclosure or
                bankruptcy? Are you still able help?{" "}
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingFive"
            >
              <div class="accordion-body">
                We buy houses in any condition, in any area, in any price range,
                in any situation! We will buy your house as-is, you don’t need
                to do ANY repairs!
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingSix">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseSix"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseSix"
              >
                What will your service cost me?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingSix"
            >
              <div class="accordion-body">
                We buy houses in any condition, in any area, in any price range,
                in any situation! We will buy your house as-is, you don’t need
                to do ANY repairs!
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseSeven"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseSeven"
              >
                Is my information kept confidential?
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseSeven"
              class="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingSeven"
            >
              <div class="accordion-body">
                We buy houses in any condition, in any area, in any price range,
                in any situation! We will buy your house as-is, you don’t need
                to do ANY repairs!
              </div>
            </div>
          </div>
        </div>

        <div className='more_questions' >
          <div className='more_text'>Ask a different question</div>
          <form action="#">
            <label className="my_form_labels">Name </label>
            <br />
            <input className="myy_form_inputs" type="text" required />
            <br />

            <label className="my_form_labels">Email</label>
            <br />
            <input className="myy_form_inputs" type="email" required />
            <br />

            <label className="my_form_labels third_input">Message</label>
            <br />
            <input className="myy_form_inputs" type="text" required />
            <br />
            <br />



          </form>
        </div>

      </div>

    </div>
  )
}

export default Questions
