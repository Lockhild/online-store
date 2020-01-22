import React from 'react';
import './navbar.scss';

function Navbar() {
    return (
        <nav className='navbar-container uk-navbar-container'>
            <div className='uk-navbar-left'>
                <a className='uk-navbar-item uk-logo' href='/'>
                    UNIC
                </a>
            </div>

            <div className='uk-navbar-right'>
                <ul className='uk-navbar-nav'>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/shop'>Shop</a>
                    </li>
                    <li>
                        <a href='/contact'>Contact</a>
                    </li>
                    <li>
                        <a href='/register'>Log in</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
