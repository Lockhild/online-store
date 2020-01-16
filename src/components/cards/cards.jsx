import React from 'react';
import CardComponent from './card/card.jsx';
import './cards.scss';

class Cards extends React.Component {
    constructor() {
        super();

        this.state = {
            categories: [
                {
                    name: 'hats',
                    imgSrc: '../images/homepage/cards/hats.jpg'
                },
                {
                    name: 'jackets',
                    imgSrc: '../images/homepage/cards/jackets.jpg'
                },
                {
                    name: 'sneakers',
                    imgSrc: '../images/homepage/cards/sneakers.jpg'
                },
                {
                    name: 'women',
                    imgSrc: '../images/homepage/cards/women.jpg'
                },
                {
                    name: 'men',
                    imgSrc: '../images/homepage/cards/men.jpg'
                }
            ]
        }
    }

    render() {
        return (
            <div className="cards-container">
                {this.state.categories.map(({ name, imgSrc }, index) => {
                    return (
                        <div className={name + '-card'}>
                            <CardComponent key={index} src={imgSrc} title={name} text="shop now" />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Cards;