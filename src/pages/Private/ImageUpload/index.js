import React, { useState } from 'react'
import {
    Form,
} from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';


const ImageUpload = () => {


    const navigate = useNavigate();

    const [imgCollection, setImgCollection] = useState(null)
    const [title, setTitle] = useState('')
    const [classname, setClassname] = useState('')
    const [isLoading, setIsloading] = useState(false)


    const fileUpload = (e) => {
        setImgCollection(e.target.files)
    }

    const submit = async (e) => {
        e.preventDefault()
        setIsloading(true)
        var formData = new FormData();
        for (const key of Object.keys(imgCollection)) {
            formData.append('imgCollection', imgCollection[key])
        }
        formData.append('user', process.env.REACT_APP_EMAIL)
        formData.append('title', title)
        formData.append('classname', classname)

        try {
            const uapiUrl = process.env.REACT_APP_BASE_URL
            console.log('uapiUrl', uapiUrl);
            const { data } = await axios.post(uapiUrl + "/upload", formData, {})
            console.log(data)
            setIsloading(false)
            navigate('/folder')
        } catch (error) {
            console.log(error)
            setIsloading(false)
        }
    }

    return (
        <div className="container upload my-4 pb-5">
            <div className="row">
                <div className="col-lg-12">
                    <h1 className='mb-5'>New Finetune</h1>
                    <Form id="info" onSubmit={submit}>
                        <Form.Group className="mb-4" >
                            <Form.Label className='title'>Title</Form.Label>
                            <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="topic" placeholder="Enter a title" />
                            <p style={{
                                fontSize: 12,
                                color: 'grey',
                                marginTop: 5
                            }}>This should NOT be a person name</p>
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label className='title'>Class name</Form.Label>
                            <Form.Control value={classname} onChange={(e) => setClassname(e.target.value)} type="topic" placeholder="Enter a class name" />
                            <p style={{
                                fontSize: 12,
                                color: 'grey',
                                marginTop: 5
                            }}>Upload 20 images of the subject for anything between (4-30), images should include subject in different variations, expressions</p>
                        </Form.Group>
                        <Form.Group className="mb-4">
                            <Form.Label className='title'>Images</Form.Label>
                            <Form.Control onChange={fileUpload} className='file' type="file" multiple />
                        </Form.Group>
                        <div className='row align-items-center justify-content-end mt-5'>
                            <Button className='mr-1 mr-md-5 secondary-btn'>
                                Advance
                            </Button>
                            <Button className='mr-1 mr-md-5 secondary-btn'>
                                Back
                            </Button>
                            <Button className='primary-btn' type="submit">
                                {isLoading ? 'Loading...' : "Create"}
                            </Button>
                        </div>
                    </Form>

                </div>
            </div>
        </div>
    )
}

export default ImageUpload
