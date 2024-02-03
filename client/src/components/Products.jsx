import React, { Fragment } from 'react';
import johnx from '../assets/img/dash.png';
import bill from '../assets/img/bills.png';
import cable from '../assets/img/cableTv.png';
import airtime from '../assets/img/airtime.png';
import bundle from '../assets/img/bundle.png';
import token from '../assets/img/token.png';
import bet from '../assets/img/betting.png';



const Products = () => {
    return (
        <Fragment>
            <div className='bread'>
                <div className='bread-left text-start nuller'>
                    <h1>Products</h1>

                    <p className='py-5 txt-justify'>
                        Welcome to the heart of financial innovation! At Paysita, we believe that managing your finances should be as exciting as achieving your goals. Established with the vision of simplifying financial transactions, we're committed to providing a secure and user-centric platform.

                    </p>

                </div>
                <div className='bread-right'>
                    <img
                        src={johnx}
                        alt='Welcomex'
                        className='d-inline-block align-top'
                    />
                </div>
            </div>

            <div className='row mx-5 px-6 justify-content-center align-items-center '>
               
                <div className="col-md-3 d-flex flex-row justify-content-center align-items-center cardy py-3 mx-3">
                    <img
                        src={bill}
                        alt='Welcomexx'
                        
                    />
                    <div className='d-flex flex-column mx-1'>
                        <h4>Electricity Bills</h4>
                        <p>Pay your electricity bills with just few clicks never run out of energy supply</p>
                    </div>
                </div>
                <div className="col-md-3 d-flex flex-row justify-content-center align-items-center cardy py-3 mx-3">
                    <img
                        src={cable}
                        alt='Welcomexxx'
                    />
                    <div className='d-flex flex-column mx-1'>
                        <h4>Cable TV</h4>
                        <p>Enjoy your favorite TV show when you recharge your cable TV with Paysita</p>
                    </div>
                </div>
                <div className="col-md-3 d-flex flex-row justify-content-center align-items-center cardy py-3 mx-3">
                    <img
                        src={airtime}
                        alt='Welcomexxxx'
                    />
                    <div className='d-flex flex-column mx-1'>
                        <h4>Airtime Topup</h4>
                        <p>Unlock the world of communication with loved ones. Topup your airtime with Paysita</p>
                    </div>
                </div>
            </div>
            <div className='row mx-5 px-6 justify-content-center align-items-center '>
               
                <div className="col-md-3 d-flex flex-row justify-content-center align-items-center cardy py-3 mx-3">
                    <img
                        src={bet}
                        alt='Welcomexx'
                        
                    />
                    <div className='d-flex flex-column mx-1'>
                        <h4>Betting</h4>
                        <p>Fund your betting wallet with paysita to win reward for your passion</p>
                    </div>
                </div>
                <div className="col-md-3 d-flex flex-row justify-content-center align-items-center cardy py-3 mx-3">
                    <img
                        src={bundle}
                        alt='Welcomexxx'
                    />
                    <div className='d-flex flex-column mx-1'>
                        <h4>Data Bundle</h4>
                        <p> Stay up-to-date with trends when you topup your data bundle with paysita</p>
                    </div>
                </div>
                <div className="col-md-3 d-flex flex-row justify-content-center align-items-center cardy py-3 mx-3">
                    <img
                        src={airtime}
                        alt='Welcomexxxx'
                    />
                    <div className='d-flex flex-column mx-1'>
                        <h4>Paysita Tokens</h4>
                        <p>Get instant Paysita worth up to 1m when you transact with paysita</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Products
