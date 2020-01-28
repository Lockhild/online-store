import React from 'react';
import Input from './components/input.jsx';
import Button from './components/button.jsx';

import { auth } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            username: '',
            email: '',
            password: ''
        };
    }

    handleSubmit = e => {
        e.preventDefault();

        let email = this.state.email;
        let password = this.state.password;

        auth.createUserWithEmailAndPassword(email, password).catch(function(
            error
        ) {
            console.error(
                `oops...I did it again -> ${error.code}: ${error.message}`
            );
        });
        // reset the form
        let form = document.getElementById('signup-form');
        form.reset();
    };

    getUsername = e => {
        e.persist();
        this.setState({
            username: e.target.value
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
                <h3>Create new account</h3>
                <form
                    id='signup-form'
                    className='uk-form-stacked'
                    onSubmit={this.handleSubmit}>
                    <Input
                        onValueChange={this.getUsername}
                        label='Username'
                        type='text'
                        icon='user'
                    />
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
                    <Button text='Register' classList='uk-button-secondary' />
                </form>
            </div>
        );
    }
}

export default SignUp;
