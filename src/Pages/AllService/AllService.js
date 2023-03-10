import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllService = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://doctor-service-review-server-ab-sid.vercel.app/allservices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mb-8'>
            <h1 className='text-3xl font-bold text-center py-12'>All Service</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default AllService;