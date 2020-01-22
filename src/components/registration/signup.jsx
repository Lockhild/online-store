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
                <form className='uk-form-stacked' onSubmit={this.handleSubmit}>
                    <legend className='uk-legend'>Create account</legend>
                    <Input label='Username' type='text' icon='user' />
                    <Input label='Email' type='email' icon='mail' />
                    <Input label='Password' type='password' icon='lock' />
                    <Button text='Register' classList='uk-button-primary' />
                </form>
            </div>
        );
    }
}

export default SignUp;
