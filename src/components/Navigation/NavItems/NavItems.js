import React from 'react';
import NavItem from './NavItem/NavItem';
import './NavItems.css'


const navItems = () => {
    return (
        <ul className='NavItems'>
            <NavItem link='/' active={true}>Burger Builder</NavItem>
            <NavItem link='/'>Checkout</NavItem>
        </ul>
    );
}

export default navItems;