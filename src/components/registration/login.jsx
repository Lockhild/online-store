import React from 'react';
import Input from './components/input.jsx';
import Button from './components/button.jsx';

import { signInWithGoogle } from '../../firebase/firebase.utils.js';

class LogIn extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('supp?');
    }

    render() {
        return (
            <div>
                <form className='uk-form-stacked' onSubmit={this.handleSubmit}>
                    <legend className='uk-legend'>Log in</legend>
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
