import React from 'react';
import CardComponent from './card/card.jsx';
import './cards.scss';

import SECTIONS_DATA from '../../data/sections.data.js';

class Cards extends React.Component {
    constructor() {
        super();

        this.state = {
        }
    }

    render() {
        return (
            <div className="cards-container">
                {SECTIONS_DATA.map((section, index) => {
                    return (
                        <div key={index} className={section.title + '-card'}>
                            <CardComponent imgageUrl={section.imageUrl} title={section.title} text="shop now" />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Cards;