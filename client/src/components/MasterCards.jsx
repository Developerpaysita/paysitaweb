import React, { Fragment } from 'react'
import card from '../assets/img/cards.png';
import eleana from '../assets/img/eleana.png';

const MasterCards = () => {
    return (

        <Fragment>
            <div className='container-fluid'>
                <div className='bread'>
                    <div className='bread-left m-0 pt-5'>
                        <h3>The backbone for
                            internet business
                        </h3>
                        <div className='p-2 txt-justify'> Every transaction is a step towards your goals. Earn rewards and exclusive offers tailored just for you. Take advantage of Paysita Tokens</div>
                        <p className='p-2'>
                            “There’s a way to do it better. Find it.”
                        </p>

                        <div className='row'>
                            <div className='col-md-3 align-items-center justify-content-center'>
                                <img
                                    src={eleana}
                                    style={{width:"30px", height:"30px"}}
                                    alt='eleana'
                                />
                            </div>

                            <div className='col-md-6'>
                                <p className='text-start'>
                                <h6>Eleanor Pena</h6>
                                    Director of technology .creativegig</p>
                            </div>
                        </div>
                    </div>
                    <div className='bread-right'>
                        <img
                            src={card}
                            alt='cards'
                            className='d-inline-block align-top'
                        />
                    </div>
                </div>
            </div>
        </Fragment>

    )
}

export default MasterCards
