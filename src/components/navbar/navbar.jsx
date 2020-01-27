import React from 'react';
import './navbar.scss';
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

import LogIn from '../registration/login';
import SignUp from '../registration/signup';

function Navbar({ currentUser }) {
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
                        {currentUser ? (
                            <a onClick={() => auth.signOut()}>Log out</a>
                        ) : (
                            <a data-uk-toggle='target: #modal-full'>Log in</a>
                        )}
                    </li>
                </ul>
            </div>
            <div id='modal-full' className='uk-modal-full' data-uk-modal>
                <div className='uk-modal-dialog'>
                    <button
                        className='uk-modal-close-full uk-close-large'
                        type='button'
                        data-uk-close></button>
                    <div
                        className='uk-grid-collapse uk-child-width-1-2@s uk-flex-middle'
                        data-uk-grid>
                        <div
                            className='uk-background-cover'
                            data-uk-height-viewport
                            style={{
                                backgroundImage: 'url(images/register.jpg)'
                            }}></div>
                        <div className='register-container'>
                            <div>
                                <ul
                                    className='uk-tab'
                                    data-uk-tab="{connect:'#registration'}">
                                    <li className='uk-active'>
                                        <a href='#'>Log In</a>
                                    </li>
                                    <li>
                                        <a href='#'>Register</a>
                                    </li>
                                </ul>
                                <ul
                                    id='registration'
                                    className='uk-switcher uk-margin'>
                                    <li>
                                        <LogIn />
                                    </li>
                                    <li>
                                        <SignUp />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Navbar);
