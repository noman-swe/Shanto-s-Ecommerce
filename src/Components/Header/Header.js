import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="logo">
                <h2><span>Shanto</span>'s Ecommerce</h2>
            </div>
            <div className="navs">
                <a href="shop">Shop</a>
                <a href="cart">Cart</a>
                <a href="inventory">Inventory</a>
                <a href="about">About</a>
            </div>
        </div>
    );
};

export default Header;