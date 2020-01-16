import React from 'react';
import { Card } from 'react-bootstrap';
import './card.scss';


function CardComponent(props) {
    return (
        <Card className="bg-dark text-white card-container">
            <Card.Img src={props.src} alt="Card image" />
            <Card.ImgOverlay className="text-container">
                <Card.Title className="title">{props.title}</Card.Title>
                <Card.Text className="text">{props.text}</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

export default CardComponent;