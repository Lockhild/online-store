import React from 'react';
import Input from './components/input.jsx';
import Button from './components/button.jsx';

class LogIn extends React.Component {
    constructor() {
        super();

        this.state = {};
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form className='uk-form-stacked' onSubmit={this.handleSubmit}>
                    <legend className='uk-legend'>Log in</legend>
                    <Input label='Email' type='email' icon='mail' />
                    <Input label='Password' type='password' icon='lock' />
                    <Button text='Log In' classList='uk-button-primary' />
                </form>
            </div>
        );
    }
}

export default LogIn;
