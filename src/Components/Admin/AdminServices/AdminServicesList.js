import React, { useEffect, useState } from 'react';
import { Alert, Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faUserPlus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Menu from '../../Home/Menu';
import '../Admin.css';
import LoadImage from '../../LoadImage/LoadImage';

const AdminServicesList = () => {
    const [success, setSuccess] = useState(false);
    const [show, setShow] = useState(true);
    const [loadData, setLoadData] = useState([]);
    const [spinner, setSpinner] = useState(true);
    const [imageFile, setImageFile] = useState([]);
    const hostname = 'https://agile-mesa-01879.herokuapp.com';


    const handleDelete = (id) => {
        fetch(`${hostname}/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                setSuccess(data);
                setShow(true);
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    useEffect(() => {
        setTimeout(() => setSpinner(false), 1000)
    }, []);

    useEffect(() => {
        fetch(`${hostname}/show`)
            .then(response => response.json())
            .then(data => setLoadData(data))
    }, [loadData, imageFile]);

    useEffect(() => {
        fetch(`${hostname}/image`)
            .then(response => response.json())
            .then(data => {
                setImageFile(data);
            })
            .catch(error => {
                console.error(error);
            })
    }, [imageFile]);

    
    document.title = 'Service Lists';
    return (
        <>
            <Menu></Menu>
            <section className="adminHeight animation pt-5">
                <Container className="pt-3">
                    {
                        success && show && <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                            <Alert.Heading className="text-center">Card delete success!!!</Alert.Heading>
                        </Alert>
                    }
                    <div className="d-flex justify-content-between mt-3 w-100">
                        <h4 className="ml-5 pl-5">Service list</h4>
                    </div>

                    <Row>
                        <Col lg={2}>
                            <div className="mt-5">
                                <Link to="/admin/serviceList" className="d-flex w-100 text-decoration-none" style={{ color: '#009444' }}><FontAwesomeIcon icon={faCartArrowDown} className="mt-2 mr-2" /><button className="btn btn-light w-100" style={{ color: '#009444' }}>Service list</button></Link>
                            </div>
                            <div>
                                <Link to="/admin/addService" className="d-flex w-100 text-decoration-none text-dark"><FontAwesomeIcon icon={faPlus} className="mt-2 mr-2" /><button className="btn btn-light w-100">Add Service</button></Link>
                            </div>
                            <div>
                                <Link to="/admin/makeAdmin" className="d-flex w-100 text-decoration-none text-dark"><FontAwesomeIcon icon={faUserPlus} className="mt-2 mr-2" /><button className="btn btn-light w-100">Make Admin</button></Link>
                            </div>
                        </Col>
                        <Col lg={10} className="mt-3 bg-light p-4">
                            <Container>
                                <Row className="d-flex p-2 scrollbar scollbarOtherStyle">
                                    {
                                        loadData && spinner ? <Spinner animation="border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </Spinner> : loadData.map(el =>
                                            <Col lg={4} className="my-2" key={el._id}>
                                                <Card className="card-hover">
                                                    {
                                                        el.fileName && <Card.Img variant="top" height="200" src={`${hostname}/${el.fileName}`} />
                                                    }
                                                    <Card.Body>
                                                        <small>{el._id}</small>
                                                        <Card.Title>{el.title}</Card.Title>
                                                        <Card.Text>{el.description}</Card.Text>
                                                        <button className="btn btn-outline-danger btn-sm float-left" onClick={() => handleDelete(`${el._id}`)}>Delete</button>
                                                    </Card.Body>
                                                </Card>
                                            </Col>)
                                    }
                                </Row>
                                <h3 className="text-primary py-2">Photo of node js application</h3>
                                <Row>
                                    <LoadImage />
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default AdminServicesList;