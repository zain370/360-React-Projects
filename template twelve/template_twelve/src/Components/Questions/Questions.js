import React from "react";
import "./../Questions/QuestionsStyle.css";
import faqarrow from "./../../Assets/faqarrow.png";

function Questions() {
  return (
    <div className="main_faq_div">
    <div className="faqtxt" >FAQ</div>
      <div className="faq_content">
          <div class="accordion" id="accordionPanelsStayOpenExample">
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
                  Will you be listing my house on the MLS or actually buying it?

                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  We buy houses in any condition, in any area, in any price
                  range, in any situation! We will buy your house as-is, you
                  don’t need to do ANY repairs!
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
                 Will you be listing my house on the MLS or actually buying it?

                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div class="accordion-body">
                  We buy houses in any condition, in any area, in any price
                  range, in any situation! We will buy your house as-is, you
                  don’t need to do ANY repairs!
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
                  Will you be listing my house on the MLS or actually buying it?

                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div class="accordion-body">
                  We buy houses in any condition, in any area, in any price
                  range, in any situation! We will buy your house as-is, you
                  don’t need to do ANY repairs!
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
                  Will you be listing my house on the MLS or actually buying it?

                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingFour"
              >
                <div class="accordion-body">
                  We buy houses in any condition, in any area, in any price
                  range, in any situation! We will buy your house as-is, you
                  don’t need to do ANY repairs!
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
                  Will you be listing my house on the MLS or actually buying it?

                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingFive"
              >
                <div class="accordion-body">
                  We buy houses in any condition, in any area, in any price
                  range, in any situation! We will buy your house as-is, you
                  don’t need to do ANY repairs!
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
                  Will you be listing my house on the MLS or actually buying it?

                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseSix"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingSix"
              >
                <div class="accordion-body">
                  We buy houses in any condition, in any area, in any price
                  range, in any situation! We will buy your house as-is, you
                  don’t need to do ANY repairs!
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
                  Will you be listing my house on the MLS or actually buying it?

                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseSeven"
                class="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingSeven"
              >
                <div class="accordion-body">
                  We buy houses in any condition, in any area, in any price
                  range, in any situation! We will buy your house as-is, you
                  don’t need to do ANY repairs!
                </div>
              </div>
            </div>
          </div>


        <div className="qmark">
        Frequently <br/>Asked <br/>Questions.
        </div>
      </div>
    </div>
  );
}

export default Questions;
