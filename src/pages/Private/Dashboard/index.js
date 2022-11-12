import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="container dashboard my-4">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <h2 className='mb-4'>Welcome to PicFilter</h2>
                        <div className='box'>
                            <p>You are ready to start creating your first fine-tune. Upload 20 <br></br>photos</p>
                            <div className='row align-items-center justify-content-end mt-3'>
                                <button className='mr-1 mr-md-5 secondary-btn'>
                                    <p>See some examples</p>
                                </button>
                                <button className='primary-btn' onClick={() => navigate('/upload')}>
                                    <p>{`Buy Finetune credit ($10)`}</p>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 mt-5">
                        <div className="video-responsive2">
                            <iframe
                                width="853"
                                height="480"
                                src={`https://www.youtube.com/embed/ea462CVMa68`}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Embedded youtube"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
