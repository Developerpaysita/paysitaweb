import React, { Fragment } from 'react'
import apple from '../assets/img/apple.png';
import play from '../assets/img/play.png';
import shop from '../assets/img/shop.png';

const GetReady = () => {
    return (
        <Fragment>
            <div className='container-fluid mt-4 p-5 bg-white mb-0'>
                <div className='ready'>
                    <div className='ready-left m-0'>
                        <h3 className='text-start' >Ready to get started ?</h3>
                        <div className='text-start col-md-6'>
                            Join us on this financial adventure!
                            Download the Paysita app now.
                            Your future, your finances, your way.

                        </div>

                        <div className='row d-flex mt-4'>
                            <img
                                src={apple}
                                style={{ width: "142px", height: "44px" }}
                                alt='eleana'
                            />
                            <img
                                src={play}
                                style={{ width: "142px", height: "44px" }}
                                alt='eleana'
                            />

                        </div>
                    </div>
                    <div className='ready-right'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div class="card">
                                    <div class="card-body">
                                        <img
                                            src={shop}
                                            style={{ width: "62px", height: "62px" }}
                                            alt='shoppy'
                                        />
                                        <h5 class="card-title"> Shop online with ease</h5>
                                        <p class="card-text">Our intuitive interface ensures a hassle-free experience for every user.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div class="card">
                                    <div class="card-body">
                                        <img
                                            src={shop}
                                            style={{ width: "62px", height: "62px" }}
                                            alt='shoppy'
                                        />
                                        <h5 class="card-title mt-2"> Get Paid FreeLancing</h5>
                                        <p class="card-text mt-2 txt-justify">Get paid without hidden charges on our app</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default GetReady
