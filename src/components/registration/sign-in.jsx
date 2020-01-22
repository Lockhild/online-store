import React from 'react';

function SignIn() {
    return (
        <div>
            <form className='uk-form-stacked'>
                <div className='uk-margin'>
                    <label
                        className='uk-form-label'
                        htmlFor='form-stacked-text'>
                        Username
                    </label>
                    <div className='uk-form-controls'>
                        <div className='uk-inline'>
                            <span
                                className='uk-form-icon'
                                uk-icon='icon: user'></span>
                            <input className='uk-input' type='text' />
                        </div>
                    </div>
                </div>

                <div className='uk-margin'>
                    <label
                        className='uk-form-label'
                        htmlFor='form-stacked-text'>
                        Email
                    </label>
                    <div className='uk-form-controls'>
                        <div className='uk-inline'>
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
                        Email
                    </label>
                    <div className='uk-form-controls'>
                        <div className='uk-inline'>
                            <span
                                className='uk-form-icon uk-form-icon-flip'
                                uk-icon='icon: lock'></span>
                            <input className='uk-input' type='text' />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
