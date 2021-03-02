import React from 'react';
import './About.css';
import { Col, Container, Row } from 'react-bootstrap';
import Menu from '../Home/Menu';
import Footer from '../Footer/Footer';
import CardAnimation from '../CardAnimation/CardAnimation';

const About = () => {
    document.title = 'About';
    return (
        <section className="animation aboutBg">
            <Container>
                <Menu></Menu>
                <Row style={{height: "80vh"}} className="align-items-center">
                    <Col md={6} className="pt-5" id="react-animation">
                        <CardAnimation />
                    </Col>
                    <Col md={6}>
                        <h4>About me</h4>
                        <h2>Creative Art Director And Designer</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, deserunt accusantium? Excepturi nisi ratione aliquid?</p>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </section>
    );
};

export default About;