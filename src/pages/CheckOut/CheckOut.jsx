import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {

    const service = useLoaderData();
    const {title, img, price} = service;

    return (
        <div className='bg-base-200 p-5'>
            <div className='card bg-base-100 rounded-md w-full max-w-lg shrink-0 shadow-2xl mx-auto p-5'>
                <img className='mb-3 rounded-md' src={img} alt={title} />
                <h2 className='text-xl mb-2'>{title}</h2>
                <p className='text-orange-500'>Price: ${price}</p>
            </div>

            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className='flex gap-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Checkout" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;