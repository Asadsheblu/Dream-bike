import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
       const {name,picture}=cart
    return (
        <div className='shadow-lg border d-flex'>
            <img className='w-25 rounded' src={picture} alt=""></img>
            <span>Selected Item: <h6>{name}</h6> </span>
        </div>
    );
};

export default Cart;