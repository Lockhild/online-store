import React from 'react';
import Input from './components/input.jsx';
import Button from './components/button.jsx';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('suppp??');
    }

    render() {
        return (
            <div>
                <h3>Create new account</h3>
                <form className='uk-form-stacked' onSubmit={this.handleSubmit}>
                    <Input label='Username' type='text' icon='user' />
                    <Input label='Email' type='email' icon='mail' />
                    <Input label='Password' type='password' icon='lock' />
                    <Button text='Register' classList='uk-button-secondary' />
                </form>
            </div>
        );
    }
}

export default SignUp;
