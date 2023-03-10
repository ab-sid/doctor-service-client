import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const UpdateReview = () => {
    const review = useLoaderData();
    useTitle('Update Review');
    return (
        <div>
            <form>
                <div className='grid gap-6 grid-cols-1 lg:grid-cols-2'>
                    <input type="text" name='name' defaultValue={review.name} placeholder="Type Name" className="input input-bordered w-full" />
                    <input type="text" name='rating' defaultValue={review.rating} placeholder="Type Rating" className="input input-bordered w-full" />
                    <textarea name='message' defaultValue={review.message} className="textarea textarea-bordered" placeholder="Message"></textarea>
                </div>
                <div className='text-center my-7'>
                    <button className="btn btn-primary">Update Review</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateReview;