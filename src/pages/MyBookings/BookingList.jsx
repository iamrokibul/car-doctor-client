import React from 'react';

const BookingList = ({booking, handleDelete, handleBookingConfirm}) => {
    const {title, img, price, date, _id, status} = booking
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-square">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </th>
            <td>
            <div className="flex items-center gap-3">
                <div className="avatar">
                <div className="rounded-xl h-24 w-24">
                    {
                        img && <img
                        src={img}
                        alt="Avatar Tailwind CSS Component" />
                    }
                </div>
                </div>
                <div>
                <div className="font-bold">{title}</div>
                <div className="text-sm opacity-50">${price}</div>
                </div>
            </div>
            </td>
            <td>{date}</td>
            <th>
            {
                status === 'confirm' ? <button className='btn btn-success btn-sm'>Confirmed</button> :
                <button onClick={() => handleBookingConfirm(_id)} className="btn btn-danger btn-sm">Confirm</button>
            }
            </th>
        </tr>
    );
};

export default BookingList;