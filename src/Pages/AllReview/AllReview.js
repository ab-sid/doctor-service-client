import React, { useContext } from 'react';
import img from '../../assets/chooce/img.jpg';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const AllReview = ({ review }) => {
    const { name, rating, message, date } = review;
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={img} alt='' />
                    </div>
                </div>
                <div className="chat-header">
                    {name}
                    <time className="text-xs opacity-50 ml-4">{date}</time>
                </div>
                <div className="chat-bubble">{message}</div>
                <div className="chat-footer opacity-50">
                    Rating: {rating}
                </div>
            </div>
        </div>
    );
};

export default AllReview;