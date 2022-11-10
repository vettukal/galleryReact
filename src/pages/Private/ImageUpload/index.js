import React from 'react'
import {
    Form,
} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const ImageUpload = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="container upload my-5 py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className='mb-5'>New Finetune</h1>
                        <Form id="info">
                            <Form.Group className="mb-4">
                                <Form.Label className='title'>Title</Form.Label>
                                <Form.Control type="topic" placeholder="Enter a title" />
                                <p style={{
                                    fontSize: 12,
                                    color: 'grey',
                                    marginTop: 5
                                }}>This should NOT be a person name</p>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label className='title'>Class name</Form.Label>
                                <Form.Control type="topic" placeholder="Enter a class name" />
                                <p style={{
                                    fontSize: 12,
                                    color: 'grey',
                                    marginTop: 5
                                }}>Upload 20 images of the subject for anything between (4-30), images should include subject in different variations, expressions</p>
                            </Form.Group>
                            <Form.Group className="mb-4">
                                <Form.Label className='title'>Images</Form.Label>
                                <Form.Control className='file' type="file" multiple />
                            </Form.Group>
                        </Form>
                        <div className='row align-items-center justify-content-end mt-5'>
                            <button className='mr-1 mr-md-5 secondary-btn'>
                                <p>Advance</p>
                            </button>
                            <button className='mr-1 mr-md-5 secondary-btn'>
                                <p>Back</p>
                            </button>
                            <button className='primary-btn' onClick={() => navigate('/folder')}>
                                <p>Create</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ImageUpload
