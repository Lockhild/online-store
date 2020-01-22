import React from 'react';

function Button({ text, classList }) {
    return (
        <button
            className={
                'uk-button uk-width-1-1 uk-margin-small-top ' + classList
            }>
            {text}
        </button>
    );
}

export default Button;
