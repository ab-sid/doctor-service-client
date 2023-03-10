import React from 'react';
import './Banner.css';
import img1 from '../../../assets/banner/slide-1.jpg'
import img2 from '../../../assets/banner/slide-2.jpg'
import img3 from '../../../assets/banner/slide-3.jpg'
import img4 from '../../../assets/banner/slide-4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='absolute top-1/4 z-10 p-12'>
                    <h1 className='text-white text-5xl font-bold mb-8'>Discoverd</h1>
                    <p className='text-white text-xl mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Saepe facilis unde ipsa rerum, laborum ducimus aliquid quo sed adipisci repudiandae!</p>
                    <button className="btn btn-outline btn-info mr-4">Discover More</button>
                    <button className="btn btn-outline btn-success">Latest Works</button>
                </div>
                <div className='w-full carousel-img'>
                    <img src={img1} className="w-full h-[500px]" alt='' />
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='absolute top-1/4 z-10 p-12'>
                    <h1 className='text-white text-5xl font-bold mb-8'>Discoverd</h1>
                    <p className='text-white text-xl mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Saepe facilis unde ipsa rerum, laborum ducimus aliquid quo sed adipisci repudiandae!</p>
                    <button className="btn btn-outline btn-info mr-4">Discover More</button>
                    <button className="btn btn-outline btn-success">Latest Works</button>
                </div>
                <div className='w-full carousel-img'>
                    <img src={img2} className="w-full h-[500px]" alt='' />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle  mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className='absolute top-1/4 z-10 p-12'>
                    <h1 className='text-white text-5xl font-bold mb-8'>Discoverd</h1>
                    <p className='text-white text-xl mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Saepe facilis unde ipsa rerum, laborum ducimus aliquid quo sed adipisci repudiandae!</p>
                    <button className="btn btn-outline btn-info mr-4">Discover More</button>
                    <button className="btn btn-outline btn-success">Latest Works</button>
                </div>
                <div className='w-full carousel-img'>
                    <img src={img3} className="w-full h-[500px]" alt='' />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className='absolute top-1/4 z-10 p-12'>
                    <h1 className='text-white text-5xl font-bold mb-8'>Discoverd</h1>
                    <p className='text-white text-xl mb-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Saepe facilis unde ipsa rerum, laborum ducimus aliquid quo sed adipisci repudiandae!</p>
                    <button className="btn btn-outline btn-info mr-4">Discover More</button>
                    <button className="btn btn-outline btn-success">Latest Works</button>
                </div>
                <div className='w-full carousel-img'>
                    <img src={img4} className="w-full h-[500px]" alt='' />
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;