import React from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';

const Logo = () => {
    return <Link to='/'><img className='hidden md:block' src={logo}  width='100' height='100'  alt="logo"/></Link>
};

export default Logo;