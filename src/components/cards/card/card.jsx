import React from 'react';
import './card.scss';


function CardComponent({ imgageUrl, title, text }) {
    return (
        <div className="card-container uk-card uk-card-default uk-card-body">
            <img src={imgageUrl} alt="Shop category" />
            <div className="text-container">
                <h2 className="title">{title}</h2>
                <h3 className="text">{text}</h3>
            </div>
        </div>
    )
}

export default CardComponent;