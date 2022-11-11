import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="footer-bottom">
            <div className="">
                <div className="">
                    <div className=" d-flex">
                        <div className="copyright">
                            <img className='logo' src='/images/logo.webp' />
                            <h6 className='mt-3'>Pic Filter</h6>
                        </div>
                        <div className="bottom">
                            <h3>Company</h3>
                            <p>Terms & Conditions</p>
                            <p>Content Policy</p>
                            <p>Privacy</p>
                        </div>
                        <div className="bottom">
                            <h3>Resources</h3>
                            <p>How to</p>
                            <p>PROs corner</p>
                            <p>API</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer