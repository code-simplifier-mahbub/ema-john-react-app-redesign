import React from 'react';
import './Header.css'
import img from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header-section'>
            <img src={img} alt="" />
            <div className="navbar">
                <a href="/home">Home</a>
                <a href="/order">Order</a>
                <a href="/inventory">Manage Inventory</a>
                <a href="/login">Login</a>
            </div>
        </div>
    );
};

export default Header;