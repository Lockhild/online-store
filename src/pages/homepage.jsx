import React from 'react';
import Navigation from '.././components/navbar/navbar.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from '.././components/cards/cards.jsx';

function Homepage() {
    return (
        <div>
            <Navigation />
            <div className="container">
                <ul class="uk-breadcrumb">
                    <li><a href="/">Home</a></li>
                    <li><a href="/hats">Hats</a></li>
                    <li><a href="/jackets">Jackets</a></li>
                    <li><a href="/sneakers">Sneakers</a></li>
                    <li><a href="/women">Women</a></li>
                    <li><a href="/men">Men</a></li>
                </ul>
                <Cards />
            </div>
        </div>
    )
}

export default Homepage;