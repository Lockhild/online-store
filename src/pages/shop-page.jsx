import React from 'react';
import CollectionRow from '../components/collections/collection-row/collection-row.jsx';
import Navigation from '../components/navbar/navbar.jsx';

import SHOP_DATA from '../data/shop.data.js';


function ShopPage() {
    return (
        <div>
            <Navigation />
            <div className='uk-container'>
                {
                    SHOP_DATA.map((section, index) => {
                        return (
                            <CollectionRow key={index} title={section.title} products={section.items} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ShopPage;