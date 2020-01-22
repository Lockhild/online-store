import React from 'react';

function LogIn() {
    return (
        <div>
            <form className='uk-form-stacked'>
                <legend className='uk-legend'>Log in</legend>
                <div className='uk-margin'>
                    <label
                        className='uk-form-label'
                        htmlFor='form-stacked-text'>
                        Email
                    </label>
                    <div className='uk-form-controls'>
                        <div className='uk-position-relative'>
                            <span
                                className='uk-form-icon'
                                uk-icon='icon: mail'></span>
                            <input className='uk-input' type='text' />
                        </div>
                    </div>
                </div>

                <div className='uk-margin'>
                    <label
                        className='uk-form-label'
                        htmlFor='form-stacked-text'>
                        Password
                    </label>
                    <div className='uk-form-controls'>
                        <div className='uk-position-relative'>
                            <span
                                className='uk-form-icon'
                                uk-icon='icon: lock'></span>
                            <input className='uk-input' type='password' />
                        </div>
                    </div>
                </div>
                <button class='uk-button uk-button-primary uk-width-1-1 uk-margin-small-top'>
                    Log in
                </button>
            </form>
        </div>
    );
}

export default LogIn;
