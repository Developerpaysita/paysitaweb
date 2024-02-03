import React, { Fragment, useState } from 'react'
import freq from '../assets/img/freq.png';
const FAQList = [
    {
        question: 'What is React?',
        answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
        question: 'How do I install React?',
        answer: 'You can install React by using the npm package manager.',
    },
];

const Frequent = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
    };
    return (
        <Fragment>
            <div className='bread'>
                <div className='bread-left m-0 text-start'>
                    <h1>Frequently
                        Asked
                        Que<span>stions</span>
                    </h1>
                    <p>Get relatively asked questions from the modules below.</p>
                </div>
                <div className='bread-right'>
                    <img
                        src={freq}
                        alt='Welcomex'
                        className='d-inline-block align-top'
                    />
                </div>
            </div>

            <div className='card p-4 mx-5'>
                <ol>
                    {FAQList.map((faq, index) => (
                        <li key={index} className='mb-4'>
                            <div
                                className="faq-item"
                                onClick={() => toggleFAQ(index)}
                            >
                                <h5 className="question">{faq.question}</h5>
                                {openIndex === index && <div className="answer">{faq.answer}</div>}
                            </div>
                        </li>
                    ))}
                </ol>

            </div>


        </Fragment>
    )
}

export default Frequent
