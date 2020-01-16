import React from 'react';
import Navigation from '.././components/navbar/navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '.././components/cards/cards.jsx';

function Homepage() {
    return (
        <div>
            <Navigation />
            <div className="container">
                <Cards />
            </div>
        </div>
    )
}

export default Homepage;