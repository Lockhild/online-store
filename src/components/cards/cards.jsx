import React from 'react';
import CardComponent from './card/card.jsx';
import './cards.scss';

import hats from '../images/homepage/cards/hats.jpg';
import jackets from '../images/homepage/cards/jackets.jpg';
import sneakers from '../images/homepage/cards/sneakers.jpg';
import women from '../images/homepage/cards/women.jpg';
import men from '../images/homepage/cards/men.jpg';

function Cards() {
    return (
        <div className="cards-container">
            <div className='hats-card'>
                <CardComponent src={hats} title="hats" text="shop now" />
            </div>
            <div className="jackets-card">
                <CardComponent src={jackets} title="jackets" text="shop now" />
            </div>
            <div className="sneakers-card">
                <CardComponent src={sneakers} title="sneakers" text="shop now" />
            </div>
            <div className="women-card">
                <CardComponent src={women} title="women" text="shop now" />
            </div>
            <div className="men-card">
                <CardComponent src={men} title="men" text="shop now" />
            </div>
        </div>
    )
}

export default Cards;