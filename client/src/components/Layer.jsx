import React, { Fragment } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import lock from "../assets/img/lock.png"
import clock from "../assets/img/clock.png"
import head from "../assets/img/headphone.png"

const Layer = () => {
    return (
        <Fragment >
            <div className='layer'>
                <Container>
                    <Row>
                        
                        <Col md={4} className="mb-4">
                            <Card bg="transparent" style={{ border: 'none', color: "white" }}>
                                <Card.Img variant="top" src={clock} style={{ width: '50px', height: '50px' }} className="mx-auto" />
                                <Card.Body>
                                    <Card.Title className="text-center" >Solve problems real time</Card.Title>
                                    <Card.Text style={{ color: "white" }}>
                                        Lorem ipsum dolor sit amet consectetur. Elit vitae sit nec convallis est purus q Lorem ipsum dolor sit amet consectetur. Elit vitae sit nec convallis est purus q
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card bg="transparent" style={{ border: 'none', color: "white" }}>
                                <Card.Img variant="top" src={lock} style={{ width: '50px', height: '50px' }} className="mx-auto" />
                                <Card.Body>
                                    <Card.Title className="text-center" >Secured & safe payments</Card.Title>
                                    <Card.Text style={{ color: "white" }}>

                                        Lorem ipsum dolor sit amet consectetur. Elit vitae sit nec convallis est purus q Lorem ipsum dolor sit amet consectetur. Elit vitae sit nec convallis est purus q
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="mb-4">
                            <Card bg="transparent" style={{ border: 'none', color: "white" }}>
                                <Card.Img variant="top" src={head} style={{ width: '50px', height: '50px' }} className="mx-auto" />
                                <Card.Body>
                                    <Card.Title className="text-center" >24/7 Customer service</Card.Title>
                                    <Card.Text style={{ color: "white" }}>

                                        Lorem ipsum dolor sit amet consectetur. Elit vitae sit nec convallis est purus q Lorem ipsum dolor sit amet consectetur. Elit vitae sit nec convallis est purus q
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

export default Layer
