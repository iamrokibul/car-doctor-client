import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="carousel w-full h-[500px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                src={img1}
                className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex justify-center flex-col gap-4 text-white h-full w-1/3 pl-10 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <h2 className='text-6xl font-bold'>Affordable Price for Car Servicing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit iure dolores voluptas explicabo id necessitatibus cumque odit.</p>
                    <div>
                        <button className="btn btn-warning mr-5">Discover More</button>
                        <button className="btn btn-outline text-white border-white">Latest Projects</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide6" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                src={img2}
                className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex justify-center flex-col gap-4 text-white h-full w-1/3 pl-10 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <h2 className='text-6xl font-bold'>Affordable Price for Car Servicing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit iure dolores voluptas explicabo id necessitatibus cumque odit.</p>
                    <div>
                        <button className="btn btn-warning mr-5">Discover More</button>
                        <button className="btn btn-outline text-white border-white">Latest Projects</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide1" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                src={img3}
                className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex justify-center flex-col gap-4 text-white h-full w-1/3 pl-10 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <h2 className='text-6xl font-bold'>Affordable Price for Car Servicing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit iure dolores voluptas explicabo id necessitatibus cumque odit.</p>
                    <div>
                        <button className="btn btn-warning mr-5">Discover More</button>
                        <button className="btn btn-outline text-white border-white">Latest Projects</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide2" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                src={img4}
                className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex justify-center flex-col gap-4 text-white h-full w-1/3 pl-10 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <h2 className='text-6xl font-bold'>Affordable Price for Car Servicing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit iure dolores voluptas explicabo id necessitatibus cumque odit.</p>
                    <div>
                        <button className="btn btn-warning mr-5">Discover More</button>
                        <button className="btn btn-outline text-white border-white">Latest Projects</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide3" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide5" className="carousel-item relative w-full">
                <img
                src={img5}
                className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex justify-center flex-col gap-4 text-white h-full w-1/3 pl-10 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <h2 className='text-6xl font-bold'>Affordable Price for Car Servicing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit iure dolores voluptas explicabo id necessitatibus cumque odit.</p>
                    <div>
                        <button className="btn btn-warning mr-5">Discover More</button>
                        <button className="btn btn-outline text-white border-white">Latest Projects</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide4" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide6" className="carousel-item relative w-full">
                <img
                src={img6}
                className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex justify-center flex-col gap-4 text-white h-full w-1/3 pl-10 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <h2 className='text-6xl font-bold'>Affordable Price for Car Servicing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reprehenderit iure dolores voluptas explicabo id necessitatibus cumque odit.</p>
                    <div>
                        <button className="btn btn-warning mr-5">Discover More</button>
                        <button className="btn btn-outline text-white border-white">Latest Projects</button>
                    </div>
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                    <a href="#slide5" className="btn btn-circle mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;