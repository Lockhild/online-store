import React from 'react';
import LogIn from '../components/registration/login.jsx';
import SignUp from '../components/registration/signup.jsx';

import './pages.scss';

function RegistrationPage() {
    return (
        <div className='registration-page'>
            <div className='registration-container'>
                <ul className='uk-tab' data-uk-tab="{connect:'#registration'}">
                    <li className='uk-active'>
                        <a href='#'>Log In</a>
                    </li>
                    <li>
                        <a href='#'>Register</a>
                    </li>
                </ul>
                <ul id='registration' className='uk-switcher uk-margin'>
                    <li>
                        <LogIn />
                    </li>
                    <li>
                        <SignUp />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default RegistrationPage;
