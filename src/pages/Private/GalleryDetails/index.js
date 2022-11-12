import React, { useEffect, useState } from 'react'
import {
    Form,
} from "react-bootstrap";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useLocation, useNavigate } from 'react-router-dom';
import BeatLoader from "react-spinners/BeatLoader";
import axios from 'axios';


const GalleryDetails = () => {

    const { state } = useLocation();
    const { folderId } = state


    const navigate = useNavigate();

    const [gallery, setGallery] = useState([])
    const [isLoading, setIsloading] = useState(false)

    useEffect(() => {
        getGallery()
    }, [])

    const getGallery = async () => {
        setIsloading(true)
        const body = {
            "user": process.env.REACT_APP_EMAIL,
            "folder_id": folderId
        }
        try {
            const { data } = await axios.post(process.env.REACT_APP_BASE_URL + "/gallery", body, {})
            console.log(data)
            setIsloading(false)
            setGallery(data.gallery)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container upload mt-4 mb-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className='d-flex align-items-center mb-3'>
                            <button onClick={() => navigate('/folder')} className='cursor-pointer border-0 bg-transparent'>
                                <AiOutlineArrowLeft size={30} />
                            </button>
                            <h1 className='ml-4'>My First finetune</h1>
                        </div>
                        <div className='d-flex align-items-start justify-content-center w-100'>
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
                                {!isLoading ?
                                    gallery.length > 0 && gallery.map((item, i) => {
                                        return <div key={i} className='col-3 mb-3'>
                                            <img src={item.image} style={{
                                                height: 400
                                            }} />
                                        </div>
                                    })
                                    :
                                    <div className=' w-100 d-flex align-items-center justify-content-center'>
                                        <BeatLoader color="#36d7b7" />
                                    </div>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryDetails
