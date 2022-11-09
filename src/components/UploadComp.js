import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'https://bbvmd8mpm2.us-east-1.awsapprunner.com';
export default class FilesUploadComponent extends Component {
    
    constructor(props) {
        super(props);
        this.onFileChange = this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            imgCollection: ''
        }
    }
    onFileChange(e) {
        this.setState({ imgCollection: e.target.files })
    }
    onSubmit(e) {
        e.preventDefault()
        var formData = new FormData();
        for (const key of Object.keys(this.state.imgCollection)) {
            formData.append('imgCollection', this.state.imgCollection[key])
        }
        formData.append('user', 'john@gmail.com')

        axios.post(API_URL+"/upload", formData, {
        }).then(res => {
            console.log(res.data)
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="file" name="imgCollection" onChange={this.onFileChange} multiple />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}