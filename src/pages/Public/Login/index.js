import React from 'react'
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-login">
                            <div className="panel-heading">
                                <div className="row">
                                    <div className="col-xs-6">
                                        <a href="#" className="active" id="login-form-link">Login</a>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <input onClick={() => navigate('/dashboard')} type="submit" name="login-submit" id="login-submit" tabindex="4" className="form-control btn btn-login" value="Log In with google"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
