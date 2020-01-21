import React from 'react';
import './product-preview.scss';


function ProductPreview({ imageUrl, name }) {
    return (
        <div className='product-preview uk-card uk-card-default'>
            <div className="uk-card-media-top">
                <img src={imageUrl} alt="product-preview" />
            </div>
            <div className="uk-card-body">
                <h3 className="uk-card-title">{name}</h3>
            </div>
        </div>
    )


}

export default ProductPreview;