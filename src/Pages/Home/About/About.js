import React, { useEffect } from 'react';
import img from '../../../assets/about/image2.jpg'
import img1 from '../../../assets/about/ex.jpg'
import img3 from '../../../assets/about/treatment.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section data-aos="flip-right" className='mt-24'>
            <div className='my-8'>
                <h1 className='text-3xl font-bold text-center'>About <span className='text-primary'>Us</span></h1>
            </div>
            <div className="hero bg-base-100 my-8">
                <div className="hero-content flex-col lg:flex-row">
                    <img className='w-full rounded-lg' src={img} alt='' />
                    <div className='md:ml-8'>
                        <p className='text-xl font-bold my-4'>About Us</p>
                        <h1 className="text-5xl font-bold">Dedicated to Hope, Healing, and Recovery.</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className='md:flex mt-5 hidden'>
                            <div className='flex items-center'>
                                <img className='w-[150px]' src={img1} alt='' />
                                <h3 className='text-xl font-semibold ml-2'>30+ Years<br /> Experienced</h3>
                            </div>
                            <div className='flex items-center'>
                                <img className='w-[150px]' src={img3} alt='' />
                                <h3 className='text-xl font-semibold ml-2'>Different Types <br />of Treatment</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;