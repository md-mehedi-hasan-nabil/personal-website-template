import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import firebase from "firebase/app";
import "firebase/auth";

const Menu = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            setLoggedInUser({
                name: "",
                email: "",
                emailVerified: false,
                photo: ""
            });
        }).catch((error) => {
            console.error(error);
        });

    }
    return (
        <Navbar expand="lg" className="navbarEffect mx-auto">
            <Container>
                <Link to="/" className="navbar-brand" ><span className="letter text-primary font-weight-bold">N</span><span className={`${props.color}`}>ABI</span><span className="letter text-primary font-weight-bold">L</span></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/" className={`nav-link mx-2 text-center ${props.color}`}>Home</Link>
                        <Link to="/about" className={`nav-link mx-2 text-center ${props.color}`}>About</Link>
                        <Link to="/contact" className={`nav-link mx-2 text-center ${props.color}`}>Contact</Link>
                        {
                            loggedInUser.emailVerified && <button className="nav-link mx-2 text-light px-3 btn btn-danger" onClick={handleSignOut}>Sign out</button>
                        }
                        {
                            loggedInUser.email === "mehedihasannabil49@gmail.com" && <Link to="/admin/addService" className="nav-link mx-2 text-light px-3 btn btn-success">Admin</Link>
                        }
                        {
                            loggedInUser.name ? <div>
                                <img src={loggedInUser.photo} alt="user" style={{ width: '16%', borderRadius: '50%' }} />
                                <small className="ml-2">{loggedInUser.name}</small>
                            </div> : <Link to="/login" className="nav-link mx-2 text-light px-3 btn btn-primary">Login</Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;