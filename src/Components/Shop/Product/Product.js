import React from 'react';

const Product = ({product,addToCart}) => {
    const {picture,name,Price}=product
    return (
        <div className='product col-md-4 col-sm-12'>
            <img className='img-fluid shadow-lg border' src={picture} alt=""></img>
            <h3>Name:{name}</h3>
            <h4>Price:{Price}</h4>
            <button onClick={()=>addToCart(product)} className='btn btn-success'>Add To Cart</button>
        </div>
    );
};

export default Product;