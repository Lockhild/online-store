import React from 'react';
import Input from './components/input.jsx';
import Button from './components/button.jsx';

import { signInWithGoogle, auth } from '../../firebase/firebase.utils.js';

class LogIn extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        let email = this.state.email;
        let password = this.state.password;

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                // resetting the form
                let form = document.getElementById('login-form');
                console.log('User logged in successfully!');
            })
            .catch(function(error) {
                console.error(
                    `oops...an error occured -> ${error.code}: ${error.message}`
                );
            });
    };

    getEmail = e => {
        e.persist();
        this.setState({
            email: e.target.value
        });
    };

    getPassword = e => {
        e.persist();
        this.setState({
            password: e.target.value
        });
    };

    render() {
        return (
            <div>
                <h3>Log into your account</h3>
                <form
                    id='login-form'
                    className='uk-form-stacked'
                    onSubmit={this.handleSubmit}>
                    <Input
                        onValueChange={this.getEmail}
                        label='Email'
                        type='email'
                        icon='mail'
                    />
                    <Input
                        onValueChange={this.getPassword}
                        label='Password'
                        type='password'
                        icon='lock'
                    />
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
