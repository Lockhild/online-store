import React from 'react';
import './navbar.scss';
import { auth } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

import RegistrationModal from '../registration/registration-modal';

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
            <RegistrationModal />
        </nav>
    );
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Navbar);
