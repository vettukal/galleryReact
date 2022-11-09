import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'https://bbvmd8mpm2.us-east-1.awsapprunner.com';
const lAPI_URL = 'http://127.0.0.1:5000';
export default function FolderComponent(props) {
    function  getFolders() {
        const ujs = {
            "user": "john@gmail.com"
        }
        console.log("getFolders");


        axios.post(API_URL+"/folders", ujs, {
        }).then(res => {
            console.log(res.data)
        })
    }

    return (
        <div>
            <div style={{ height: "15vh" }}/>
            <h3>
            Get Folders
          </h3>
            <button type="button" class="btn btn-primary" onClick={getFolders}>Primary</button>
        </div>
    )
}
