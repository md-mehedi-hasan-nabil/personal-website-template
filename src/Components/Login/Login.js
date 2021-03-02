import React, { useContext, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Menu from '../Home/Menu';
import './Login.css';
import google from '../../images/google.png';
import firebaseConfig from '../../firebaseConfig';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [signedInUser, setSignedInUser] = useState({
        email: '',
        password: ''
    });
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        name: "",
        email: "",
        emailVerified: false,
        photo: ""
    });

    const provider = new firebase.auth.GoogleAuthProvider();
    const handleSignUpGoogle = () => {
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, emailVerified, photoURL } = result.user;
                const signedInUser = {
                    name: displayName,
                    email: email,
                    emailVerified: emailVerified,
                    photo: photoURL
                };
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                console.error(error)
            });
    }

    const handleSignedInUser = (e) => {
        const newData = { ...signedInUser };
        newData[e.target.name] = e.target.value;
        setSignedInUser(newData);
    }

    const signInEmailPassword = (e) => {
        e.preventDefault();
        const { email, password } = loggedInUser;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result);
                setSignedInUser({
                    email: '',
                    password: ''
                })
                e.target.reset();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    document.title = 'Login page';
    return (
        <Container fluid>
            <Menu color="dark"></Menu>
            <Row className="p-5 d-flex align-items-center loginBackground animation">
                <Col lg={6} className="mx-auto bg-light d-flex divBox">
                    <Row>
                        <Col lg={8} className="p-5">
                            <h4 className="text-center p-2">Login Account</h4>
                            <Form onSubmit={signInEmailPassword}>
                                <Form.Group>
                                    <Form.Label><b>Email</b></Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" name="email" onBlur={handleSignedInUser} required />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label><b>Password</b></Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" name="password" onBlur={handleSignedInUser} required />
                                </Form.Group>
                                <Form.Group>
                                    <button type="submit" className="btn btn-primary text-center w-100">Login</button>
                                </Form.Group>
                            </Form>
                            <img className="googleIcon" src={google} alt="" />
                            <button className="btn w-100 btnIcon" onClick={handleSignUpGoogle}>Continue with Google</button>
                        </Col>
                        <Col lg={4} className="backgroundImg p-5 text-light">
                            <p className="lead text-center">Be able to take new experiences here</p>
                            <br />
                            <h4 className="text-center">Login our website</h4>
                            <br />
                            <Link to="/signup" className="btn btn-primary w-100">Sign up</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;