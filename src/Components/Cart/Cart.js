import React from 'react';
import './Cart.css'
const Cart = () => {
    return (
        <div className='cart shadow-lg border h-25'>
            <h1 className='text-center'>Cart Items</h1>
            <h5>Selected Product:</h5>
            <button className='btn btn-outline-warning m-2'>Choose 1 For Me</button>
            
            <button className='btn btn-outline-info m-2'>Chosse Again</button>
        </div>
    );
};

export default Cart;