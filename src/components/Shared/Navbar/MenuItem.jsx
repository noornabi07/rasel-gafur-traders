import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = () => {
    return (
        <div className='flex gap-2 md:gap-5 items-center font-semibold text-sm md:text-lg text-orange-400'>
            <Link to='/' className='hover:text-green-600'>Home</Link>
            <Link className='hover:text-green-600'>About US</Link>
            <Link className='hover:text-green-600'>Product</Link>
            <Link className='hover:text-green-600'>Contact</Link>
        </div>
    );
};

export default MenuItem;