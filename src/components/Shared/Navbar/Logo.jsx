import React from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';

const Logo = () => {
    return <Link to='/'><img className='w-12 h-12 md:w-24 md:h-16' src={logo} alt="logo"/></Link>
};

export default Logo;