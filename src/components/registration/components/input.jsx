import React from 'react';

function Input({ label, type, icon }) {
    return (
        <div className='uk-margin'>
            <label className='uk-form-label' htmlFor='form-stacked-text'>
                {label}
            </label>
            <div className='uk-form-controls'>
                <div className='uk-position-relative'>
                    <span
                        className='uk-form-icon'
                        uk-icon={'icon: ' + icon}></span>
                    <input className='uk-input' type={type} />
                </div>
            </div>
        </div>
    );
}

export default Input;
