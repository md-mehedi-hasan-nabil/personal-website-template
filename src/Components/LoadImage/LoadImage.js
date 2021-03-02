import React, { useEffect, useState } from 'react';
import { Alert, Col, Image } from 'react-bootstrap';

const LoadImage = () => {
    const hostname = 'https://agile-mesa-01879.herokuapp.com';
    const [isLoading, setIsLoading] = useState(true);
    const [imageFile, setImageFile] = useState([]);
    const [show, setShow] = useState(true);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        fetch(`${hostname}/image`)
            .then(response => response.json())
            .then(data => {
                setImageFile(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error(error);
            })
    }, [imageFile]);

    const handleDeletePhoto = (name) => {
        fetch(`${hostname}/delete/image/${name}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(result => {
                setShow(true);
                setSuccess(result);
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {
                success && show && <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading className="text-center">Photo delete success!!!</Alert.Heading>
                </Alert>
            }
            {
                isLoading ? <div>loading...</div> :
                    imageFile.map(imageName => imageName.name &&
                        <Col lg={4} key={imageName.name}>
                            <div className="mx-auto serverImgDiv">
                                <Image variant="top" className="p-2 serverImg" src={`${hostname}/${imageName.name}`} />
                                <div className="serverImgBtn">
                                    <button className="btn btn-outline-danger" onClick={() => handleDeletePhoto(imageName.name)}>Delete</button>
                                </div>
                            </div>
                        </Col>
                    )
            }
        </>
    );
};

export default LoadImage;