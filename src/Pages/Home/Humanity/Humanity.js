import React, { useEffect } from 'react';
import img1 from '../../../assets/humanity/img1.png';
import img2 from '../../../assets/humanity/img2.jpg';
import img3 from '../../../assets/humanity/img3.jpg';
import './Humanity.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Humanity = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className='mt-24' >
            <div className='my-8'>
                <h1 className='text-3xl font-bold text-center'>Huma<span className='text-primary'>nity</span></h1>
            </div>
            <div className="hero bg-base-100 my-8">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='image-container'>
                        <img src={img1} className="rounded-lg w-full" alt='' />
                        <img data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" src={img2} className=" rounded-lg w-1/3 image-2" alt='' />
                        <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" src={img3} className="rounded-lg w-1/3 image-3" alt='' />
                    </div>
                    {/* <img data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" src={img2} className=" rounded-lg w-1/6 -mt-60 -mr-36 z-10 hidden lg:block" alt='' />
                    <img data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000" src={img3} className="rounded-lg w-1/6 mt-48 -mr-[650px] z-20 hidden lg:block" alt='' /> */}
                    <div>
                        <h1 className="text-5xl font-bold">We are on the<br /> side of humanity.</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda<br /> excepturi exercitationem quasi.Quaerat fugiat ut assumenda excepturi exercitationem quasi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Humanity;