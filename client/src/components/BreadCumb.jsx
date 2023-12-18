import React, { Fragment } from 'react';
import johnx from '../assets/img/johnx.png';
import apple from '../assets/img/app.png';

const BreadCumb = () => {
  return (
    <Fragment>
      <div className='bread'>
        <div className='bread-left'>
          <h1>The next generation payment
          <span> method</span>
          </h1>
          <img
            src={apple}
            alt='Welcomex'
            className='d-inline-block align-top'
          />
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
