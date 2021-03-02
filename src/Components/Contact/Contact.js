import React, { useState } from 'react';
import { Alert, Col, Container, Form, Row } from 'react-bootstrap';
import Menu from '../Home/Menu';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [success, setSuccess] = useState(false);
    const [show, setShow] = useState(true);
    const [userInfo, setUserInfo] = useState({});

    const handleBlur = (e) => {
        const newData = { ...userInfo };
        newData[e.target.name] = e.target.value;
        setUserInfo(newData);
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_5h0994a', 'template_rz1wpo4', e.target, 'user_ZGzReYGYrxPS2xdtVuQ6d')
            .then((result) => {
                setUserInfo({});
                // alert("email sent successfully.")
                setSuccess(true);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    }
    document.title = 'Contact';
    return (
        <section className="contactImg animation">
            <Container className="pt-5">
                <Menu></Menu>
                {
                    success && show && <Alert variant="success" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading className="text-center"> Email send success!!! </Alert.Heading>
                    </Alert>
                }
                <Row className="pt-5">
                    <Col md={6} className="mx-auto blurBg p-5 rounded">
                        <h3 className="text-center mt-3 text-primary">Contact us</h3>
                        <Form onSubmit={sendEmail}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name" onBlur={handleBlur} required name="name" />
                                <Form.Text className="text-muted"> </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter Email" onBlur={handleBlur} required name="email" />
                                <Form.Text className="text-muted"> </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicTextarea">
                                <Form.Label>Message</Form.Label>
                                <textarea class="form-control" rows="5" placeholder="Enter comment" onBlur={handleBlur} required name="message"></textarea>
                            </Form.Group>
                            <button className="btn btn-primary w-100 mt-2" type="submit">
                                Submit
                            </button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;