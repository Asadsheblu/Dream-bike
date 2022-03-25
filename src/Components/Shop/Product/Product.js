import React from 'react';

const Product = ({product}) => {
    const {picture,name,Price}=product
    return (
        <div className='product col-md-4'>
            <img className='img-fluid shadow-lg border' src={picture}></img>
            <h3>{name}</h3>
        </div>
    );
};

export default Product;