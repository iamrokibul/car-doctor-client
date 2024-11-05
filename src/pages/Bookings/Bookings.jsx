import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider/AuthProvider';

const Bookings = () => {

    const service = useLoaderData();
    const {title, img, price, _id} = service;
    const {user} = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        // const service = form.service.value;
        const email = user?.email;
        const date = form.date.value;
        const mobile = form.mobile.value;

        const bookings = {
            name,
            title,
            email,
            date,
            mobile,
            price,
            img
        }
        
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert("Booking Successfull");
            }
        });
        
        console.log(bookings);
    
    }

    return (
        <div className='bg-base-200 p-5'>
            <div className='card bg-base-100 rounded-md w-full max-w-lg shrink-0 shadow-2xl mx-auto p-5'>
                <img className='mb-3 rounded-md' src={img} alt={title} />
                <h2 className='text-xl mb-2'>{title}</h2>
                <p className='text-orange-500'>Price: ${price}</p>
            </div>

            <div className="hero bg-base-200 min-h-screen">
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
                    <form onSubmit={handleBooking} className="card-body">
                        <div className='flex gap-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" readOnly name='email' defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="number" name='mobile' placeholder="mobile" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input type="date" name='date' className="input input-bordered" required />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Service</span>
                                </label>
                                <input type="text" readOnly name='service' defaultValue={title} placeholder="password" className="input text-orange-500 input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" readOnly name='price' defaultValue={'$'+price} className="input text-orange-500 input-bordered" required />
                            </div>
                        </div>    
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Order Now" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Bookings;