import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = ({product,addToCart}) => {
    const {picture,name,Price}=product
    return (<div className='col-md-4 col-sm-12 p-3'>
      
            <img className='product-img img-fluid' src={picture} alt=""></img>
            <h3>Name:{name}</h3>
            <h4>Price:{Price}</h4>
            <button onClick={()=>addToCart(product)} className='btn btn-success'>
                Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            
            </button>
        </div>
    );
};

export default Product;