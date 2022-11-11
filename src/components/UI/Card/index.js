import React from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';

const CardPrimary = ({ path, title, description, onClick }) => {

    return (
        <div onClick={onClick} className="card">
            <img className="card-img-top" src={path} alt="Card image cap"></img>
            <div className="card-body d-flex align-items-center justify-content-between">
                <div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
                <RiDeleteBin6Line color='red' size={20} />
            </div>
        </div>
    )
}

export default CardPrimary
