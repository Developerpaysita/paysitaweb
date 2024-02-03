import React, { Fragment } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';


const Counter = () => {
    return (
        <Fragment >
            <div className='counter'>

                <Container>
                    <Row><h3 className='text-center mt-4'>Join millions getting secured payments</h3></Row>
                    <Row>
                        <Col md={4} className="mb-4">
                            <Card bg="transparent" style={{ border: 'none' }}>
                                <Card.Body>
                                    <Card.Title className="text-center" >1.5M</Card.Title>
                                    <Card.Text>
                                        <p>Which is approximately 56% of the
                                            consumer population of Nigeria</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card bg="transparent" style={{ border: 'none' }}>
                                <Card.Body>
                                    <Card.Title className="text-center" >41%</Card.Title>
                                    <Card.Text >
                                        The largest adopter due to being
                                        comfortable with technology
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card bg="transparent" style={{ border: 'none' }}>
                                <Card.Body>
                                    <Card.Title className="text-center" >3964+</Card.Title>
                                    <Card.Text >
                                        The online payment system offer
                                        electronic alternatives to traditional
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>


                    </Row>

                </Container>
            </div>

        </Fragment>
    )
}

export default Counter

