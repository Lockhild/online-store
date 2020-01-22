import React from 'react';
import './product-preview.scss';


function ProductPreview({ imageUrl, name, price }) {
    return (
        <div className='product-preview uk-card uk-card-default'>
            <div className="preview-container uk-card-media-top">
                <img src={imageUrl} alt="product-preview" />
                <button className="uk-button uk-button-default uk-width-1-1">Add to cart</button>
            </div>
            <div className="uk-card-body uk-flex uk-flex-between uk-padding-small">
                <span>{name}</span>
                <span className="uk-text-bold">${price}</span>
            </div>
        </div>
    )


}

export default ProductPreview;