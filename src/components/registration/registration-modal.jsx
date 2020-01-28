import React from 'react';

import LogIn from './login';
import SignUp from './signup';

import { connect } from 'react-redux';

function RegistrationModal({ currentUser }) {
    return (
        <div
            id='modal-full'
            className='uk-modal-full'
            data-uk-modal
            style={{
                display: currentUser ? 'none' : ''
            }}>
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
    );
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(RegistrationModal);
