import React from 'react';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../../components/Button';

const UserCard = ({ user }) => {

    return (
        <div className="bg-[#0b0b0b] border-[1px] mt-8 border-[#272F43] relative  rounded-md px-3 py-3">
            {/* Image Section */}
            <div className='mb-[130px] relative'>
                <div className='bg-[#0b0b0b] border-[1px] border-[#272F43] p-2 w-3/5 rounded-full absolute left-1/2  -translate-x-2/4 -translate-y-2/4'>
                    <div className='w-full rounded-full gradient p-[1px]'>
                        <img className="w-full bg-[#0b0b0b] rounded-full object-cover" src={user.image} alt={user.firstName} />
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className='flex flex-col justify-center items-center w-full '>
                <div className="font-bold text-xl mb-2 text-center">{`${user.firstName} ${user.lastName}`}</div>
                <p className="text-sm mb-2 text-center text-gray-300">Department - {`${user.company.department}`}</p>

                <div className='mt-5'>
                    <div className='flex mb-3 items-center'>
                        <FontAwesomeIcon icon={faEnvelope} className='mr-3' />
                        <a className="text-gray-300 text-sm text-center" href={`mailto:${user.email}`}>
                            {user.email}
                        </a>
                    </div>
                    <div className='flex mb-3 items-center'>
                        <FontAwesomeIcon icon={faPhone} className='mr-3' />
                        <a className="text-gray-300 text-sm text-center" href={`tel:${user.phone}`}>
                            {user.phone}
                        </a>
                    </div>
                    <div className='flex items-center'>
                        <FontAwesomeIcon icon={faLocationDot} className='mr-3' />
                        <p className="text-gray-300 text-sm text-center">
                            {user.address.city}
                        </p>
                    </div>
                </div>

                <div className='my-5'>
                    <Button gradientOutline rounded={'full'} >
                        View Profile
                    </Button>
                </div>
            </div>

        </div>
    );
};

export default UserCard;
