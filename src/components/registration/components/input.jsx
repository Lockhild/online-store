import React from 'react';

function Input({ label, type, icon }) {
    return (
        <div className='uk-margin'>
            {/* if label is provided */}
            {label ? (
                <label className='uk-form-label' htmlFor='form-stacked-text'>
                    {label}
                </label>
            ) : null}
            <div className='uk-form-controls'>
                <div className='uk-position-relative'>
                    <span
                        className='uk-form-icon'
                        uk-icon={icon ? 'icon: ' + icon : null}></span>
                    <input className='uk-input' type={type ? type : 'text'} />
                </div>
            </div>
        </div>
    );
}

export default Input;
