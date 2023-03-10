import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServiceCard from '../ServiceCard/ServiceCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
    const [services, setServices] = useState([])
    useTitle('Service');
    useEffect(() => {
        fetch('https://doctor-service-review-server-ab-sid.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" className='my-8'>
            <h1 className='text-3xl font-bold text-center py-12'>Ser<span className='text-primary'>vices</span></h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='text-center my-8'>
                <button className="btn btn-outline btn-primary"><Link to='/allservices'>See All</Link></button>
            </div>
        </div>
    );
};

export default Service;