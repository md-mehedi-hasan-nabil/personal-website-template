import React from 'react';
import { Carousel, Col, Container, ProgressBar, Row } from 'react-bootstrap';
import './Home.css';
import Menu from './Menu';
import OwlCarouselSlider from '../OwlCarouselSlider/OwlCarouselSlider';
import personal from '../../images/Personal.png';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';
import mehedi2 from '../../images/mehedi2.jpg';
import mehedi3 from '../../images/mehedi3.jpg';


const Home = () => {
    document.title = 'Home';
    return (
        <div className="bgEffect">
            <Menu color="dark"></Menu>
            <main className="header-bg-img">
                <Container className="animation">
                    <section>
                        <Row style={{ height: "80vh" }} className="align-items-center">
                            <Col md={5} className="align-middle text-dark">
                                <h3>Hey There !</h3>
                                <h1>I am Mehedi Hasan Nabil</h1>
                                <p className="lead">Web design and development</p>
                                <button className="btn btn-primary px-5">Hire me</button>
                            </Col>
                            <Col md={7}>
                                <div>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-50 mx-auto img-border"
                                                src={mehedi3}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-50 mx-auto img-border"
                                                src={mehedi2}
                                                alt="Third slide"
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </main>

            <section>
                <Services />
            </section>

            <section>
                <OwlCarouselSlider></OwlCarouselSlider>
            </section>

            <section className="skillbar-img">
                <div className="bg-blur">
                    <div className="container p-5" >
                        <div className="my-4">
                            <h2 className="text-info my-3 text-center">My Skills</h2>
                            <p>HTML</p>
                            <ProgressBar now="70" label={`${70}%`} />
                            <p>CSS</p>
                            <ProgressBar now="90" label={`${90}%`} />
                            <p>Bootstrap</p>
                            <ProgressBar now="95" label={`${95}%`} />
                            <p>JavaScript</p>
                            <ProgressBar now="60" label={`${60}%`} />
                            <p>React.js</p>
                            <ProgressBar now="80" label={`${80}%`} />
                            <p>Node.js</p>
                            <ProgressBar now="40" label={`${40}%`} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
};

export default Home;