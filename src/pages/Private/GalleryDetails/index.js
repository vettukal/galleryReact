import React from 'react'
import {
    Form,
} from "react-bootstrap";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const GalleryDetails = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="container upload my-5 py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className='d-flex align-items-center mb-5'>
                            <button onClick={() => navigate('/folder')} className='cursor-pointer border-0 bg-transparent'>
                                <AiOutlineArrowLeft size={30} />
                            </button>
                            <h1 className='ml-4'>My First finetune</h1>
                        </div>
                        <div className='mb-4 d-flex align-items-start justify-content-center w-100'>
                            <Form.Group className="mr-3" style={{ width: '87%' }}>
                                <Form.Control type="topic" placeholder="" />
                                <p style={{
                                    fontSize: 12,
                                    color: 'grey',
                                    marginTop: 5
                                }}>Try searching</p>
                            </Form.Group>
                            <button className='primary-btn primary-btn-sec'>
                                <p className='primary-btn-text'>{`Generate image`}</p>
                            </button>
                        </div>
                        <div>
                            <div className='row'>
                                <div className='col-3'>
                                    <img src='/images/card.png' />
                                </div>
                                <div className='col-3'>
                                    <img src='/images/card.png' />
                                </div>
                                <div className='col-3'>
                                    <img src='/images/card.png' />
                                </div>
                                <div className='col-3'>
                                    <img src='/images/card.png' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryDetails
