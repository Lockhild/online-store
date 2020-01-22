import React from 'react';
import SignIn from '../components/registration/sign-in.jsx';

function RegistrationPage() {
    return (
        <div className='registration-container'>
            <ul className='uk-tab' data-uk-tab="{connect:'#registration'}">
                <li className='uk-active'>
                    <a href='#'>Sign In</a>
                </li>
                <li>
                    <a href='#'>Sign Up</a>
                </li>
            </ul>
            <ul id='registration' className='uk-switcher uk-margin'>
                <li>
                    <a href='#' data-uk-switcher-item='next'></a>
                    <SignIn />
                </li>
                <li>Content 2</li>
            </ul>
        </div>
    );
}

export default RegistrationPage;
