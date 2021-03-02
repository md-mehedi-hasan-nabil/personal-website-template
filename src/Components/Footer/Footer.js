import React from 'react';
import './Footer.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter, faVimeo } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-dark">
            <div className="text-center d-block py-4">
                <Link to="/" className="navbar-brand text-light"><span className="letter text-primary font-weight-bold">N</span>ABI<span className="letter text-primary font-weight-bold">L</span></Link>
            </div>
            <Navbar>
                <Nav className="mx-auto">
                    <Link to="/" className="nav-link mx-2 text-light">Home</Link>
                    <Link to="/about" className="nav-link mx-2 text-light">About</Link>
                    <Link to="/contact" className="nav-link mx-2 text-light">Contact</Link>
                </Nav>
            </Navbar>

            <Container className="py-5">
                <section className="mx-auto text-center" style={{width: '300px'}}>
                    <Link to="/" className="customIcon m-3 p-1">
                        <FontAwesomeIcon icon={faTwitter} className="customSvg" />
                    </Link>
                    <Link to="/" className="customIcon m-3 p-1">
                        <FontAwesomeIcon icon={faFacebook} className="customSvg" />
                    </Link>
                    <Link to="/" className="customIcon m-3 p-1">
                        <FontAwesomeIcon icon={faGoogle} className="customSvg" />
                    </Link>
                    <Link to="/" className="customIcon m-3 p-1">
                        <FontAwesomeIcon icon={faVimeo} className="customSvg" />
                    </Link>
                </section>
                <p className="text-center text-light mt-5">Copyright ©{ new Date().getFullYear() } All rights reserved | This template is made with  by Nabil</p>
            </Container>

        </footer>
    );
};

export default Footer;