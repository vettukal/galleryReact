import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import YoutubeEmbed from '../../../components/Youtube';


const Home = () => {

    const navigate = useNavigate();

    return (
        <>
            <section className='home-main'>
                <h2 className='title text-center'>Talor-made Image filters</h2>
                <h2 className='sub-title text-center'>Start creating your unique images</h2>
                <div className='d-flex mx-auto my-5 py-3'>
                    <button className='mr-1 mr-md-5 secondary-btn'>
                        Examples
                    </button>
                    <button className='primary-btn' onClick={() => navigate('/login')}>
                        <p className='mr-1 mr-md-4'>Try it now</p>
                        <AiOutlineArrowRight className='icon' />
                    </button>
                </div>
                <YoutubeEmbed
                    embedId="ea462CVMa68"
                />
                <div className='container bottom-part py-5 my-5'>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-12 col-lg-6'>
                            <div className='sec'>
                                <h1>Audio Production</h1>
                                <p>Align your crew with the most detailed. custom-made visul references. Previs to the max</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 mt-5 mt-md-0'>
                            <img className='image-fluid' src='/images/banner.png' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
