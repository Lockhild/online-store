import React from 'react';

function Button({ text, classList, clicked }) {
    return (
        <button
            className={
                'uk-button uk-width-1-1 uk-margin-small-top ' + classList
            }
            type='submit'
            onClick={clicked ? clicked : null}>
            {text}
        </button>
    );
}

export default Button;
