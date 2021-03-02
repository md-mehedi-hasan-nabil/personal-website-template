import React, { useState } from 'react';
import { Alert, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Menu from '../Home/Menu';
import './SignUp.css';
import firebase from "firebase/app";
import "firebase/auth";


const SignUp = () => {
    const [success, setSuccess] = useState(false);
    const [show, setShow] = useState(true);
    const [allData, setAllData] = useState({});
    const [createUser, setCreateUser] = useState();

    console.log(allData);
    const handleBlur = (e) => {
        const newData = { ...allData };
        newData[e.target.name] = e.target.value;
        setAllData(newData);
    }
    console.log(allData);
    
    const createNewUser = (e) => {
        e.preventDefault();
        const email = allData.email;
        const password = allData.password;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result.user);
                e.target.reset();
            })
            .catch((error) => {
                console.error(error);
            });
    }
    document.title = 'Sign up page';
    return (
        <Container fluid>
            <Menu color="dark"></Menu>
            <Row className="px-5 d-flex align-items-center signupBackground animation position-relative">
                {
                    success && show && <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading className="text-center">Oh snap! Data submit success!!!</Alert.Heading>
                    </Alert>
                }
                <Col lg={6} className="mx-auto bg-light d-flex divBox">
                    <Row>
                        <Col lg={4} className="backgroundImg px-5 text-light">
                            <p className="lead text-center">Be able to take new experiences here</p>
                            <br />
                            <h5 className="text-center">Create an account to join the community</h5>
                            <br />
                            <Link to="/login" className="btn btn-primary w-100">Login</Link>
                        </Col>
                        <Col lg={8} className="p-5">
                            <h4 className="text-center p-2">Create an Account</h4>
                            <form onSubmit={createNewUser}>
                                <Form.Group>
                                    {/* <Form.Label><b>Username</b></Form.Label> */}
                                    <Form.Control type="name" name="name" onBlur={handleBlur} placeholder="Enter name" required />
                                </Form.Group>
                                <Form.Group>
                                    {/* <Form.Label><b>Email</b></Form.Label> */}
                                    <Form.Control type="email" name="email" onBlur={handleBlur} placeholder="Enter email" required />
                                </Form.Group>
                                <Form.Group>
                                    {/* <Form.Label><b>Password</b></Form.Label> */}
                                    <Form.Control type="password" name="password" onBlur={handleBlur} placeholder="Enter password" required />
                                </Form.Group>
                                <Form.Group>
                                    {/* <Form.Label><b>Password</b></Form.Label> */}
                                    <Form.Control type="password" name="confirmPassword" onBlur={handleBlur} placeholder="Confirm password" required />
                                </Form.Group>
                                <Form.Group>
                                    <button type="submit" className="btn btn-primary text-center w-100">Sign Up</button>
                                    {/* <Spinner animation="border" size="sm" className="mx-2" /> */}
                                </Form.Group>
                            </form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;