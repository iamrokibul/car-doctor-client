import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className='flex p-[100px] gap-5 justify-around bg-white'>
            <div className='relative'>
                <img className='w-3/4 rounded-lg' src={person} alt="" />
                <img className='w-1/2 absolute right-10 top-1/3 border-8 border-white rounded-lg shadow-2xl' src={parts} alt="" />
            </div>
            <div className='space-y-3 text-black'>
                <h3 className='text-xl text-orange-500'>About Us</h3>
                <h1 className='text-5xl font-bold'>We are qualified & of experience in this field</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="btn btn-warning">Get More Info</button>
            </div>
        </div>
    );
};

export default About;