import React from 'react';
import avatarLogo from '../../../assets/user.png'

const Avatar = () => {
    const user = false;
    return (
        <img className='rounded-full w-[28px] h-[28px]' referrerPolicy='no-referrer' src={user && user.photoURL ? user.photoURL : avatarLogo} alt="" />
    );
};

export default Avatar;