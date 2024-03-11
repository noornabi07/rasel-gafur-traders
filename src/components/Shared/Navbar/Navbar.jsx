import React from 'react';
import Container from '../Container/Container';
import Logo from './Logo';
import MenuDropdown from './MenuDropdown';
import MenuItem from './MenuItem';

const Navbar = () => {
    return (
        <div className=' w-full fixed z-10 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
                <Container>
                    <div className='flex justify-between items-center gap-3 md:gap-3 flex-row'>
                        <Logo></Logo>
                        <MenuItem></MenuItem>
                        <MenuDropdown></MenuDropdown>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;