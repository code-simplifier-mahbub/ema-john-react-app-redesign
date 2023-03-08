import React from 'react';
import './Product.css'

const Product = ({product, handleToAddCart}) => {
    const{name, seller,img, ratings, price} = product;


    
    
    return (
        <div className='product-container'>
            <div className="product-cart">
                <img src={img} alt="" />
                <div className="product-info">
                    <p className='product-name'>{name}</p>
                    <p className='product-price'>Price: ${price}</p>
                    <p className='product-seller'>Seller: {seller}</p>
                    <p className='product-ratings'>Ratings: {ratings}</p>
                </div>
                <div className="product-button">
                    <button onClick={ () => handleToAddCart(product)}>
                        <p>Add to Cart</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;