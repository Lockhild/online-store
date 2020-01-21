import React from 'react';
import ProductPreview from '../../products/product-preview';

import './collection-row.scss';


function CollectionRow({ title, products }) {
    return (
        <div className='collection-row'>
            <h2 className='title'>{title}</h2>
            <div className="product-previews">
                {
                    // showing only the first 4 products
                    products.slice(0, 4).map((product, index) => {
                        console.log(product.imageUrl)
                        return (
                            <ProductPreview key={index} imageUrl={product.imageUrl} name={product.name} price={product.price} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CollectionRow;