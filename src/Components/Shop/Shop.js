import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([])
    const [carts,setCarts]=useState([])
    const [random,setRandom]=useState([])
    useEffect(()=>{
        fetch('bike-data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const addToCart=(product)=>{
        const newCart=[...carts,product]
       setCarts(newCart)
    }
    const randomItem=()=>{

    }
    return (
        <div>
          <h1>{carts.length}</h1>
           
           <div className='shop'>
               
          
                <div className='row container-fluid'>

            {
                products.map(product=><Product addToCart={addToCart} key={product.id} product={product}></Product>)
            }
               </div>
               <div className='cart'>
                   
               
               {
                carts.map(cart=><Cart cart={cart}></Cart>)
            }
            <button className='btn btn-outline-warning m-2'>Choose 1 For Me</button>
            
            <button className='btn btn-outline-info m-2'>Chosse Again</button>
            </div>  
            </div>  
        </div>
    );
};

export default Shop;