import React, { Fragment } from 'react'
import about from '../assets/img/abbtt.png';
import fargo from '../assets/img/fargo.png';
import mastercard from '../assets/img/mastercard.png';
import visa from '../assets/img/visa.png';
import hsvg from '../assets/img/hsvg.png';
import city from '../assets/img/city.png';
import capital from '../assets/img/capital.png';
import shak from '../assets/img/shak.png';
import great from '../assets/img/great.png';
import david from '../assets/img/dav.png';
import osita from '../assets/img/osita.png';

const About = () => {
    return (
        <Fragment>
            <div className='bread'>
                <div className='bread-left'>
                    <h1>About
                        <span> Us</span>
                    </h1>

                    <div className='mt-4 pt-4 txt-justify'>

                        Welcome to the heart of financial innovation!
                        At Paysita, we believe that managing your finances should be as exciting as achieving your goals.
                        Established with the vision of simplifying financial transactions, we're committed to providing a secure and user-centric platform.


                    </div>
                </div>
                <div className='bread-right'>
                    <img
                        src={about}
                        alt='Welcomex'
                        className='d-inline-block align-top'
                    />
                </div>
            </div>

            <div className='bg-black p-5 partners'>


                <h5 className='d-flex justify-content-center align-items-center bg-black text-white mb-4'>Our Global Investors & Partners</h5>

                <div className='row'>

                    <div class="image-container">
                        <img class="image" src={mastercard} alt="Image1" />
                        <img class="image" src={visa} alt="Image2" />
                        <img class="image" src={fargo} alt="Image3" />
                        <img class="image" src={city} alt="Image4" />
                        <img class="image" src={hsvg} alt="Image5" />
                        <img class="image" src={capital} alt="Image6" />

                    </div>
                </div>
            </div>
            <div className='row d-flex flex-row p-5'>

           
                <div className='col-md-3'>
                <img class="author-main" src={osita} alt="AuthorImage4" />
                </div>

                <div className='col-md-9 pt-4'>
                    <h2>Osita Onovo</h2>
                    <p>FOUNDER</p>
                    <p  className='txt-justify' style={{fontSize:"20px"}}>
                        At Paysita, In the ever-evolving landscape of financial technology, the success and innovation of Paysita are not only attributed to cutting-edge solutions but also to the visionary leadership that propels the company forward. At the helm, a dynamic team of leaders steers the organization with a unique blend of expertise, experience, and a shared commitment to pushing boundaries.
                        Together, the leadership team fosters a collaborative and innovative environment, empowering every member of staff to contribute meaningfully to the company's growth and achievements. With a commitment to innovation, integrity, and collaboration, the leadership team is poised to guide the company to new heights, cementing its status as a trailblazer in the world of financial technology.

                    </p>

                </div>
                <div className='row team'>

                    <div class="image-container d-flex ">

                        <div class="author-card">
                            <img class="author-image" src={shak} alt="AuthorImage" />
                            {/* <div class="author-info">
                                <div class="author-name">Andrew Ishaku</div>
                                <div class="author-role">Author</div>
                            </div> */}
                        </div>
                        <div class="author-card">
                            <img class="author-image" src={shak} alt="AuthorImage2" />
                            {/* <div class="author-info">
                                <div class="author-name">John Doe</div>
                                <div class="author-role">Author</div>
                            </div> */}
                        </div>
                        <div class="author-card">
                            <img class="author-image" src={great} alt="AuthorImage3" />
                            {/* <div class="author-info">
                                <div class="author-name">Greatness Marshal</div>
                                <div class="author-role">Chief technology Officer</div>
                            </div> */}
                        </div>
                        <div class="author-card">
                            <img class="author-image" src={david} alt="AuthorImage4" />
                            {/* <div class="author-info">
                                <div class="author-name">David</div>
                                <div class="author-role">Chief Financial Officer</div>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About
