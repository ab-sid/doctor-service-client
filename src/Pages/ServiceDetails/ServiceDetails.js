import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import AllReview from '../AllReview/AllReview';

const ServiceDetails = () => {
    const { _id, name, description, rating, price, image } = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://doctor-service-review-server-ab-sid.vercel.app/reviews?service=${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [_id])
    useTitle('Service Details');
    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const rating = form.rating.value;
        const email = form.email.value;
        const date = form.date.value;
        const message = form.message.value;
        const review = {
            name,
            rating,
            email,
            date,
            message,
            service: _id,
        }
        fetch('https://doctor-service-review-server-ab-sid.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('review added succesfully')
                    form.reset()
                }

            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <div className="hero bg-base-100 my-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-1/2' src={image} alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{name}</h1>
                        <p className="py-6">{description}</p>
                        <p className="py-2">Rating: {rating}</p>
                        <p className="py-2">Price: ${price}</p>
                    </div>
                </div>
            </div>
            <div className="divider">Review</div>
            <div className='flex space-x-4'>
                {
                    reviews.map(review => <AllReview key={review._id} review={review}></AllReview>)
                }
            </div>
            <div className="divider">Add Review</div>
            <div>
                <form onSubmit={handleReview}>
                    <div className='grid gap-6 grid-cols-1 lg:grid-cols-2'>
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder="Type Name" className="input input-bordered w-full" />
                        <input type="text" name='rating' placeholder="Type Rating" className="input input-bordered w-full" />
                        <input type="text" name='email' placeholder="Type Email" defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                        <input type="date" name='date' className="input input-bordered w-full" />
                        <textarea name='message' className="textarea textarea-bordered" placeholder="Message"></textarea>
                    </div>
                    <div className='text-center my-7'>
                        <button className="btn btn-primary">Add Review</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;