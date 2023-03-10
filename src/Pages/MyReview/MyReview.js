import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewRow from './MyReviewRow';

const MyReview = () => {
    const { user } = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
    useTitle('My Review');
    useEffect(() => {
        fetch(`https://doctor-service-review-server-ab-sid.vercel.app/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [user?.email])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            fetch(`https://doctor-service-review-server-ab-sid.vercel.app/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        alert('Review deleted succesfully')
                        const remaining = reviews.filter(rev => rev._id !== id)
                        setReviews(remaining);
                    }
                })
        }
    }
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Service</th>
                        <th>Message</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review => <MyReviewRow key={review._id} review={review} handleDelete={handleDelete}></MyReviewRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyReview;