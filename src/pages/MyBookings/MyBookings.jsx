// import { useContext } from 'react';
// import { AuthContext } from '../../providers/AuthProvider/AuthProvider';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import BookingList from './BookingList';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
    const {user} = useAuth();
    const [bookings, setBookings] = useState([]);
    const secureAxios = useAxiosSecure();
    // const url = `http://localhost:5000/totalbookings?email=${user?.email}`;
    const url = `/totalbookings?email=${user?.email}`;
    
    useEffect( () => {

        secureAxios.get(url)
        .then(res => {
            setBookings(res.data);
        });

        // axios.get(url, {withCredentials: true})
        // .then(res => {
        //     setBookings(res.data)
        // })

        // fetch(url)
        // .then(res => res.json())
        // .then(data => setBookings(data));
        // console.log(bookings);
    } ,[]);

    const handleDelete = id => {
        const proceed = confirm("Are you sure, you want to delete?");
        if(proceed){
            fetch(`http://localhost:5000/totalbookings/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount){
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            });
        }
    }

    const handleBookingConfirm = id => {
        const proceed = confirm("Are you sure, you want to Update?");
        if(proceed){
            fetch(`http://localhost:5000/totalbookings/${id}`, {
                method: "PATCH",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({status: 'confirm'})
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount){
                    // Update State
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            });
        }
    }

    return (
        <div className="overflow-x-auto bg-slate-500">
        <table className="table text-white">
            {/* head */}
            <thead>
            <tr className='text-white'>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
            {
                bookings.map(booking => <BookingList
                    key={booking._id}
                    booking={booking}
                    handleDelete={handleDelete}
                    handleBookingConfirm={handleBookingConfirm}
                ></BookingList>)
            }
            </tbody>
        </table>
    </div>
    );
};

export default MyBookings;