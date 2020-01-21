import React from 'react';
import { Card } from 'react-bootstrap';
import './card.scss';


function CardComponent({ imgageUrl, title, text }) {
    return (
        <Card className="bg-dark text-white card-container">
            <Card.Img src={imgageUrl} alt="Shop category" />
            <Card.ImgOverlay className="text-container">
                <Card.Title className="title">{title}</Card.Title>
                <Card.Text className="text">{text}</Card.Text>
            </Card.ImgOverlay>
        </Card>
    )
}

export default CardComponent;