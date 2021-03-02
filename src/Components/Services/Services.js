import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import './Services.css';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {
    const [loadData, setLoadData] = useState([]);
    useEffect(() => {
        fetch('/show')
            .then(response => response.json())
            .then(data => setLoadData(data))
    }, [loadData]);
    
    return (
        <section className="container text-center mt-5">
            <h2 className="textColor">OUR SERVICES</h2>
            <Row className="my-5">
                {
                    loadData.map(service => service._id ? <ServiceDetail service={service} key={service._id}></ServiceDetail>: <div className="color-dark">loading...</div>)
                }
            </Row>
        </section>
    );
};

export default Services;