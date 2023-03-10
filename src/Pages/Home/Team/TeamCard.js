import React, { useEffect } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './team.css';

const TeamCard = ({ member }) => {
    const { name, category, details, image } = member;
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="card bg-base-100 border">
            <figure><img data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000" className='w-full h-[200px] box' src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h3 className='font-semibold'>{category}</h3>
                <h2 className="card-title font-bold text-2xl">{name}</h2>
                <p>{details}</p>
                <div className='flex space-x-4 ml-auto text-[#989898]'>
                    <span className='border-[#989898] rounded-[50%] border-[1px] p-1 hover:bg-[#989898] hover:text-white'><FaFacebookF /></span>
                    <span className='border-[#989898] rounded-[50%] border-[1px] p-1 hover:bg-[#989898] hover:text-white'><FaTwitter /></span>
                    <span className='border-[#989898] rounded-[50%] border-[1px] p-1 hover:bg-[#989898] hover:text-white'><FaGooglePlusG /></span>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;