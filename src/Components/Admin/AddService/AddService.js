import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faUserPlus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Menu from '../../Home/Menu';

const AddService = () => {
    const hostname = 'https://agile-mesa-01879.herokuapp.com';
    const [success, setSuccess] = useState(false);
    const [show, setShow] = useState(true);
    const [info, setInfo] = useState({});
    const [file, setFile] = useState({});
    const [finaldata, setFinaldata] = useState({
        title: '',
        description: '',
        fileName: ''
    });

    useEffect(() => {
        const { title, description } = info;
        const { name } = file;
        const data = {
            title: title,
            description: description,
            fileName: name
        }
        setFinaldata(data);
    }, [info, file]);


    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleChange = (e) => {
        e.preventDefault();
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();

        if (file !== {} && info !== {}) {
            const formData = new FormData()
            formData.append('file', file);

            fetch(`${hostname}/addPhoto`, {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.error(error);
                })
        }
        if (file !== {} && info !== {}) {
            fetch(`${hostname}/addServices`, {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(finaldata),
            })
                .then(response => response.json())
                .then(data => {
                    setSuccess(data);
                    setShow(true);
                    setFinaldata({
                        title: '',
                        description: '',
                        fileName: ''
                    });
                    setFile({});
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }

    }
    document.title = 'Add Service';
    return (
        <>
            <Menu></Menu>
            <section className="animation adminHeight pt-5">
                {
                    success && show && <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading className="text-center">Oh snap! Data submit success!!!</Alert.Heading>
                    </Alert>
                }
                <Container className="pt-3">
                    <div className="d-flex justify-content-between mt-3 w-100">
                        <h4 className="ml-5 pl-5">Add Service</h4>
                    </div>
                    <Row>
                        <Col md={2}>
                            <div className="mt-5">
                                <Link to="/admin/serviceList" className="d-flex w-100 text-decoration-none text-dark"><FontAwesomeIcon icon={faCartArrowDown} className="mt-2 mr-2" /><button className="btn btn-light w-100">Service list</button></Link>
                            </div>
                            <div>
                                <Link to="/admin/addService" className="d-flex w-100 text-decoration-none" style={{ color: '#009444' }}><FontAwesomeIcon icon={faPlus} className="mt-2 mr-2" /><button className="btn btn-light w-100" style={{ color: '#009444' }}>Add Service</button></Link>
                            </div>
                            <div>
                                <Link to="/admin/makeAdmin" className="d-flex w-100 text-decoration-none text-dark"><FontAwesomeIcon icon={faUserPlus} className="mt-2 mr-2" /><button className="btn btn-light w-100">Make Admin</button></Link>
                            </div>
                        </Col>
                        <Col md={10} className="mt-3 bg-light p-5">
                            <div style={{ backgroundColor: '#fff', borderRadius: '20px' }} className="p-2">
                                <Form className="pb-5 p-3" onSubmit={handleSubmit}>
                                    <Form.Group controlId="">
                                        <Form.Label>Service Title</Form.Label>
                                        <Form.Control type="text" name="title" onBlur={handleBlur} placeholder="Enter title" required />
                                    </Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Group controlId="">
                                        <Form.Control as="textarea" rows={3} name="description" onBlur={handleBlur} placeholder="Enter Description" required />
                                    </Form.Group>
                                    <Form.Label>Icon</Form.Label>
                                    <Form.Group controlId="">
                                        <Form.Control type="file" className="w-25 btn btn-light" name="file" onChange={handleChange} placeholder="Upload project file" required />
                                    </Form.Group>
                                    <Button variant="dark px-5" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default AddService;