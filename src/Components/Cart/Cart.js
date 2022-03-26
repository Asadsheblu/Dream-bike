import { faDeleteLeft, faRemove, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
       const {name,picture}=cart
       
       
       
    return (
       
            <div className='border d-flex'>
            <img className='w-25 rounded-pill' src={picture}></img>
            <h6 className='p-2'>{name}</h6>
           
            </div>
            
        
    );
};

export default Cart;