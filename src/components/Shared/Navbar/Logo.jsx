import React from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='flex items-center gap-3'>
            <Link to='/'><img className='w-12  h-12 md:w-24 md:h-16' src={logo} alt="logo"/></Link>
            <h1 className='font-bold hidden md:block uppercase text-sm md:text-xl font-serif text-rose-500'>R&G Traders</h1>
        </div>
    )
};

export default Logo;