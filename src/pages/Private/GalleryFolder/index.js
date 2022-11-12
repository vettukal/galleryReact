import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CardPrimary from '../../../components/UI/Card';
import BeatLoader from "react-spinners/BeatLoader";


const GalleryFolder = () => {

    const navigate = useNavigate();

    const [folders, setFolders] = useState([])
    const [isLoading, setIsloading] = useState(false)

    useEffect(() => {
        getTunes()
    }, [])

    const getTunes = async () => {
        setIsloading(true)
        const body = {
            "user": process.env.REACT_APP_EMAIL
        }

        try {
            const { data } = await axios.post(process.env.REACT_APP_BASE_URL + "/folders", body, {})
            console.log(data)
            setIsloading(false)
            setFolders(data.folders)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container upload my-3 pb-5">
                <div className='row align-items-center justify-content-end mt-4'>
                    <button className='mr-1 mr-md-5 secondary-btn'>
                        <p>Guide</p>
                    </button>
                    <button className='primary-btn'>
                        <p>{`Buy Finetune Cedit ($10)`}</p>
                    </button>
                </div>
                <div className="row">
                    <div className='col-md-12'>
                        <h1 className='mb-4'>Tunes</h1>
                    </div>
                    {!isLoading ?
                        folders.length > 0 && folders.map((item, i) => {
                            return <div key={i} className="col-lg-3">
                                <CardPrimary path={item.folder_image} onClick={() => navigate('/gallery', { state: { folderId: item.folder_id } })} title={item.folder} description="Man 20 images" />
                            </div>
                        })
                        :
                        <div className=' w-100 d-flex align-items-center justify-content-center'>
                            <BeatLoader color="#36d7b7" />
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default GalleryFolder
