import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
    const { _id, name, image, rating, price, description } = service;
    return (
        <div className="card bg-base-100 bordered">
            <PhotoProvider>
                <PhotoView src={image}>
                    <figure><img className='w-full h-[300px]' src={image} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description.slice(0, 100)}...</p>
                <h2>Rating: {rating}</h2>
                <h2>Price: ${price}</h2>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline btn-primary"><Link to={`/service/${_id}`}>View Details</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;