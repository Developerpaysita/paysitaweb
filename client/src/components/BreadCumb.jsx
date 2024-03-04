import React, { Fragment } from 'react';
import johnx from '../assets/img/dash.png';
import appx from '../assets/img/apple.png';
import play from '../assets/img/play_black.png';

const BreadCumb = () => {
  return (
    <Fragment>
      <div className='bread'>
        <div className='bread-left text-start nuller'>
          <h1>Welcome</h1>
          <h1>To 
            <span> Paysita</span>
          </h1>
          <p className='py-5'>Where Your Money Meets Innovation!</p>
          <div className='row d-flex mt-2 mx-0'>
            <img
              src={appx}
              style={{ width: "100px", height: "40px", marginLeft:'0px' }}
              alt='eleana'
            />
            <img
              src={play}
              style={{ width: "100px", height: "40px" }}
              alt='eleana'
            />

            <div className='row mt-5'>
              <div className=' col-md-4'>
                <span className='d-flex'>

                  <h2 className='county' style={{ margin: "0px" }}>3952</h2>
                  <div>
                    <p  style={{ fontSize: '16px', marginTop: "10px", marginBottom:"0px", marginLeft:"0px"}}>App</p>
                    <p style={{ fontSize: '16px', marginTop: "0px" }}>Downloads</p>
                  </div>
                <div className='liner mx-4'></div>
                </span>
              </div>
              <div className=' col-md-4'>
                <span className='d-flex'>
                  <h2 className='county' style={{ margin: "0px", marginLeft:"6vw" }}>$5K+</h2>
                  <div>
                    <p style={{ fontSize: '16px', marginTop: "10px", marginBottom:"0px", marginLeft:"0px"}}>Transactions</p>
                    <p style={{ fontSize: '16px', marginTop: "0px" }}>Completed</p>
                  </div>
                </span>
              </div>
            </div>

          </div>
        </div>
        <div className='bread-right'>
          <img
            src={johnx}
            alt='Welcomex'
            className='d-inline-block align-top'
          />
        </div>
      </div>
    </Fragment>
  );
};

export default BreadCumb;
