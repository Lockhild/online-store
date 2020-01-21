import React from 'react';
import CardComponent from './card/card.jsx';
import './cards.scss';
// Cateogory images
import hatsImg from '../images/homepage/cards/hats.jpg';
import jacketsImg from '../images/homepage/cards/jackets.jpg';
import sneakersImg from '../images/homepage/cards/sneakers.jpg';
import womenImg from '../images/homepage/cards/women.jpg';
import menImg from '../images/homepage/cards/men.jpg';

class Cards extends React.Component {
    constructor() {
        super();

        this.state = {
            categories: [
                {
                    name: 'hats',
                    imgSrc: hatsImg
                },
                {
                    name: 'jackets',
                    imgSrc: jacketsImg
                },
                {
                    name: 'sneakers',
                    imgSrc: sneakersImg
                },
                {
                    name: 'women',
                    imgSrc: womenImg
                },
                {
                    name: 'men',
                    imgSrc: menImg
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