import React, { Fragment } from 'react'
import apple from '../assets/img/abt.png';
import tele from '../assets/img/tele.png';
import mess from '../assets/img/mess.png';
import iphone from '../assets/img/iphone.png';
import what from '../assets/img/what.png';

const Contact = () => {
    return (
        <Fragment>
            <div className='bread'>
                <div className='bread-left m-0 '>
                    <h1 className='text-start'>Contact
                        <span> Us</span>
                    </h1>
                    <div className='text-start'>
                        Get in Touch with Paysita <br />
                        Have questions, feedback, or just want to connect<br />
                        We'd love to hear from you! Reach out through<br />
                        of the following<br />
                    </div>

                    <h1 style={{ fontSize: "30px" }} className='pt-5'> Customer Support: </h1>

                    <div className='d-flex flex-column support text-start'>
                        <div className='d-flex flex-row '>
                            <img
                                src={mess}
                                alt='messge'
                            />
                            <h5 className='pl-3 pt-3'> hello@paysita.com </h5>
                        </div>
                        <div className='d-flex flex-row'>
                            <img
                                src={iphone}
                                alt='phonec'
                            />
                            <h5 className='pl-3 pt-3'>
                                Phone line: +2347046685260 </h5>
                        </div>
                        <div className='d-flex flex-row'>
                            <img
                                src={tele}
                                alt='tele'
                            />
                            <h5 className='pl-3 pt-3'> Telegram: +2349165359173 </h5>
                        </div>
                        <div className='d-flex flex-row'>
                            <img
                                src={what}
                                alt='what'
                            />
                            <h5 className='pl-3 pt-3'> WhatApp: +2349165359173</h5>
                        </div>
                    </div>


                </div>
                <div className='bread-right'>
                    <img
                        src={apple}
                        alt='Welcomex'
                        className='d-inline-block align-top'
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default Contact
