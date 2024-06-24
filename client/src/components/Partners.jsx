import React, { Fragment } from 'react';
import { Row, Container } from 'react-bootstrap';
import partners from '../assets/img/partners.png';


const Partners = () => {
    return (
        <Fragment >
            <div className='counter'>

                <Container>
                    <Row><h3 className='text-center mt-4'> Our Partners</h3></Row>
                    <Row>
                        <img
                            src={partners}
                            style={{ width: "100vw", height: "20vh"}}
                            alt='eleana'
                        />
                    </Row>

                </Container>
            </div>

        </Fragment>
    )
}

export default Partners
