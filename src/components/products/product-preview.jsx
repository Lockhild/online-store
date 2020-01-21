import React from 'react';
import './product-preview';


function ProductPreview({ imgUrl, title }) {
    return (
        <div className='product-preview'>
            <div className="img" style={{ backgroundImage: 'url(' + imgUrl + ')' }}>

                <button className='add-to-cart-btn'>Add to cart</button>
            </div>
            <p className='product-title'>{title}</p>
        </div >
    )
}

export default ProductPreview;