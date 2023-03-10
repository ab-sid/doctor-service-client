import React, { useEffect } from 'react';
import img from '../../../assets/humanity/img4jpg.jpg'
import img1 from '../../../assets/chooce/1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Choose = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className='bg-[#17224d] flex mt-36'>
            <div className='py-8 w-1/2'>
                <img className='w-full rounded-tr-[70px] rounded-br-[70px] hidden lg:block' src={img} alt="" />
            </div>
            <div className='ml-12 py-12'>
                <h3 className='text-[#2a6dba] font-bold text-xl'>Why Choose Us</h3>
                <h1 className='text-white font-bold text-5xl py-8'>We are on the side<br /> of humanity.</h1>
                <p className='text-white text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div>
                <img className='hidden lg:block' src={img1} alt="" srcset="" />
            </div>
        </section>
    );
};

export default Choose;