import React from 'react';
import Input from './components/input.jsx';
import Button from './components/button.jsx';

import { signInWithGoogle } from '../../firebase/firebase.utils.js';

class LogIn extends React.Component {
    constructor() {
        super();
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('supp?');
    }

    render() {
        return (
            <div>
                <h3>Log into your account</h3>
                <form className='uk-form-stacked' onSubmit={this.handleSubmit}>
                    <Input label='Email' type='email' icon='mail' />
                    <Input label='Password' type='password' icon='lock' />
                    <Button text='Log In' classList='uk-button-primary' />
                    <Button
                        clicked={signInWithGoogle}
                        text='Log In with Google'
                        classList='uk-button-secondary'
                    />
                </form>
            </div>
        );
    }
}

export default LogIn;
