import React, { useState } from "react";
import "./../Questions/QuestionsStyle.css";
import plus_icon from "./../../Assets/plus_iconn.png";
import minus_icon from "./../../Assets/minus_iconn.png";

function Questions() {
  const [activeIndex, setActiveIndex] = useState(-1); // State to keep track of the active panel index

  // Function to toggle the active panel
  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const accordionItems = [
    {
      heading: "How does the process work to sell my house?",
      content: "Content for Section 1 goes here.",
    },
    {
      heading: "What sort of houses do you buy?",
      content: "Content for Section 2 goes here.",
    },
    {
      heading: "Are you REALTORS™?",
      content: "Content for Section 3 goes here.",
    },
    {
      heading: "What do you mean “any condition, area, price range, or situation”?",
      content: "Content for Section 1 goes here.",
    },
    {
      heading: "What if I am behind on my payments, in foreclosure or bankruptcy? Are you still able help?",
      content: "YES! Home Offer Direct is a professional real estate solutions company with years of experience solving these types of difficult situations. Please contact us for a confidential consultation.",
    },
    {
      heading: "What will your service cost me?",
      content: "Content for Section 3 goes here.",
    },
  ];

  return (
    <div className="main_question_colored">
      <div className="questions_content">
        <div className="question_heading">
          <strong>Questions?</strong> We Have Answers.
        </div>

        {accordionItems?.map((data, index) => (
          <div
            class="accordion"
            id="accordionPanelsStayOpenExample"
            key={index}
          >
            <>
              <div class="accordion-item">
                <h2
                  class="accordion-header"
                  id={`panelsStayOpen-heading-${index}`}
                >
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#panelsStayOpen-collapse-${index}`}
                    aria-expanded={activeIndex === index ? "true" : "false"}
                    aria-controls={`panelsStayOpen-collapse-${index}`}
                    onClick={() => togglePanel(index)}
                  >
                    <div className="row width_row_accordian">
                      <div className="col-1">
                        <img
                          className="plus_img"
                          src={activeIndex === index ? minus_icon : plus_icon}
                          alt={activeIndex === index ? "Minus" : "Plus"}
                        />
                      </div>
                      <div className="col-10">
                        <p className="btn_text">{data.heading}</p>
                      </div>
                    </div>
                  </button>
                </h2>
                <div
                  id={`panelsStayOpen-collapse-${index}`}
                  class={`accordion-collapse collapse ${
                    activeIndex === index ? "show" : ""
                  }`}
                  aria-labelledby={`panelsStayOpen-heading-${index}`}
                >
                  <div class="accordion-body">{data.content}</div>
                </div>
              </div>
            </>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Questions;
