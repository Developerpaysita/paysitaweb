import React from 'react';
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import logo from "../assets/img/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faKiwiBird, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';



const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="mt-5">
            <Container>
                <Row>

                    <Col md={3}>
                        <img
                            src={logo}
                            alt="Your Logo"
                            width="50"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        <p>paysita &copy; {currentYear} </p>
                    </Col>


                    <Col md={3}>
                        <h5>Champion of Bill Payment
                            Solution in Africa</h5>

                    </Col>


                    <Col md={3}>
                        <h5>Location</h5>
                        <ul className="icon-list">
                            <li><FontAwesomeIcon icon={faMapMarkerAlt} /> 5A River Benue Street,
                                Maitama Abuja</li>
                        </ul>
                    </Col>


                    <Col md={3}>
                        <h5>Contact Us</h5>
                        <ul className="icon-list">
                            <li><FontAwesomeIcon icon={faEnvelope} /> hello@paysita.com</li>
                            <li><FontAwesomeIcon icon={faPhone} /> +234 902 000 4657</li>
                            <li><FontAwesomeIcon icon={faKiwiBird} /> @paysita_</li>
                            {/* <li><FontAwesomeIcon icon={faInstagram} /> Instagram</li> */}

                        </ul>
                    </Col>
                </Row>
            </Container>

            {/* Navigation List */}
            <hr style={{ color: 'white' }} />
            <Navbar expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="#" style={{ color: 'white' }}>Home</Nav.Link>
                            <Nav.Link href="#" style={{ color: 'white' }} >About</Nav.Link>
                            <Nav.Link href="#" style={{ color: 'white' }} >Services</Nav.Link>
                            <Nav.Link href="#" style={{ color: 'white' }} >Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </footer>
    );
};

export default Footer;
