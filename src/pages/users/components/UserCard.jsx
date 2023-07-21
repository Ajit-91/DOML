import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const UserCard = ({ user }) => {
    const { firstName, lastName, age, gender, email, phone, address, image } = user;

    return (
        // <div className='max-w-sm  bg-[#272F43] p-[1px] rounded-md'>
        <div className="bg-[#0b0b0b] border-[1px] border-[#272F43] relative max-w-sm rounded-md px-3 py-3">

            <div className='bg-[#0b0b0b] p-[1px] w-60 mx-auto rounded-full'>
                <div className='w-full rounded-full gradient p-[1px]'>
                    <img className="w-full bg-[#0b0b0b] rounded-full object-cover" src={user.image} alt={user.firstName} />
                </div>
            </div>

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center">{`${user.firstName} ${user.lastName}`}</div>
                <p className="text-gray-300 text-sm text-center">
                    <FontAwesomeIcon icon={faEnvelope} className='mr-3' />
                    {user.email}
                </p>
                <p className="text-gray-300 text-sm text-center">
                    <FontAwesomeIcon icon={faPhone} className='mr-3' />
                    {user.phone}
                </p>
                <p className="text-gray-300 text-sm text-center">
                    <FontAwesomeIcon icon={faLocationDot} className='mr-3' />
                    {user.address.city}
                </p>
            </div>
            <div className="px-6 py-4 text-center">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    Age: {user.age}
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    Gender: {user.gender}
                </span>
            </div>
        </div>
        // </div>
    );
};

export default UserCard;
