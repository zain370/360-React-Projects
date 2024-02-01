import React from 'react';
import './QuestionsStyle.css'; // Make sure to adjust the path to your CSS file
import meeting2 from './../../Assets/meeting2.png';
import strip4 from './../../Assets/strip_3.png';
import yellowarrow from "./../../Assets/yellowarrow.png"

function Questions() {
    const accordionItems = [
        {
            heading: 'How does the process work to sell my house?',
            content: 'Content for Section 1 goes here.',
            id: 1,
        },
        {
            heading: 'Are you REALTORS™?',
            content: 'Content for Section 2 goes here.',
            id: 2,
        },
        {
            heading: 'What sort of houses do you buy?',
            content: 'Content for Section 3 goes here.',
            id: 3,
        },
        {
            heading: 'What will your service cost me?',
            content: 'Content for Section 1 goes here.',
            id: 4,
        },
        {
            heading: 'Is my information kept confidential?',
            content: 'Content for Section 2 goes here.',
            id: 5,
        },
        {
            heading: 'What do you mean “any condition, area, price range, or situation”?',
            content: 'Content for Section 3 goes here.',
            id: 6,
        },
    ];

    return (
        <div className='main_questions_div'>
            <div className='questions_content'>
                <div className='left_faq_flex'>
                    <img className='strip4_class' src={strip4} alt='Strip' />
                    <div className='faq_text'>FAQs</div>
                   
                    <div className='my_accordion '>
                        {accordionItems.map((data) => (
                            <div className='row'>
                                <div className='col-lg-1 col-2 my_divvv'> <img src={yellowarrow} className='yellow_arr'  /></div>
                                <div className='col-lg-11 col-10 '>   <div className='accordion' key={data.id}>
                                <div className='accordion-item xyz'>
                                    <h2 className='accordion-header' id={`heading${data.id}`}>
                                        <button
                                            className='accordion-button collapsed abc'
                                            type='button'
                                            data-bs-toggle='collapse'
                                            data-bs-target={`#collapse${data.id}`}
                                            aria-expanded='false'
                                            aria-controls={`collapse${data.id}`}
                                        >
                                            {data.heading}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapse${data.id}`}
                                        className='accordion-collapse collapse'
                                        aria-labelledby={`heading${data.id}`}
                                        data-bs-parent='.my_accordion'
                                    >
                                        <div className='accordion-body'>{data.content}</div>
                                    </div>
                                </div>
                            </div></div>
                            </div>
                         
                        ))}
                    </div>
                </div>
                <div className='meeting2_div' ><img className='meeting2class' src={meeting2} /></div>
            </div>
        </div>
    );
}

export default Questions;
