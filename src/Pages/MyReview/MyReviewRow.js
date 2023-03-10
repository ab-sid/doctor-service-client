import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyReviewRow = ({ review, handleDelete }) => {
    const [services, setServices] = useState([]);
    const { _id, message, service, rating } = review;
    useEffect(() => {
        fetch(`https://doctor-service-review-server-ab-sid.vercel.app/service/${service}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [service])

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-ghost">X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={services?.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{services?.name}</div>
                        <div className="text-sm opacity-50">Rating: {rating}</div>
                    </div>
                </div>
            </td>
            <td>
                {message}
            </td>
            <td>${services?.price}</td>
            <th>
                <Link to={`/updatereview/${_id}`}>
                    <button className="btn btn-ghost btn-xs">details</button>
                </Link>
            </th>
        </tr>
    );
};

export default MyReviewRow;