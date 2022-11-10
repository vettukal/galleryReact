import React from 'react'
import {
    Form,
} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import CardPrimary from '../../../components/UI/Card';

const GalleryFolder = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="container upload my-5 py-5">
                <div className='row align-items-center justify-content-end mt-5'>
                    <button className='mr-1 mr-md-5 secondary-btn'>
                        <p>Guide</p>
                    </button>
                    <button className='primary-btn'>
                        <p>{`Buy Finetune Cedit ($10)`}</p>
                    </button>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <h1 className='mb-5'>Tunes</h1>
                        <div>
                            <CardPrimary path={'/images/card.png'} onClick={() => navigate('/gallery')} title="My First Finetune" description="Man 20 images" />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryFolder
