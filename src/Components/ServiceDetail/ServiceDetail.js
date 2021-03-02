import React from 'react';
import './ServiceDetail.css';
import { Col, Image } from 'react-bootstrap';

const ServiceDetail = ({service}) => {
    const hostname = "https://agile-mesa-01879.herokuapp.com";
    return (
        <Col md={4} className="my-3">
            <div className="clipEffect">
                <div className="card py-3">
                    <Image className="card-img-top mx-auto img-fluid" src={`${hostname}/${service.fileName}`} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{service.title}</h5>
                        <p className="card-text">{service.description}</p>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default ServiceDetail;