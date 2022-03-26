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
    
    const  ran=(product)=>{
        var newCart=[...carts,product]
        var randomItem = newCart[Math.floor(Math.random()*newCart.length)];
        setCarts(randomItem)
    }
    const remove=()=>{
        setCarts([])
    }
   
    return (
        <div>
          
           
           <div className='shop'>
               
          
                <div className='row container-fluid'>

            {
                products.map(product=><Product addToCart={addToCart} key={product.id} product={product}></Product>)
            }
               </div>
               <div className='shadow'>
               <h6>Selected Item: </h6> 
               
               {
                carts.map(cart=><Cart key={cart.id} cart={cart}></Cart>)
            }
            <button onClick={()=>ran(products)} className='btn btn-outline-warning m-2'>Choose 1 For Me</button>
            
            <button onClick={remove} className='btn btn-outline-info m-2'>Chosse Again</button>
           <h1></h1>
            
            </div>  
            </div>  
        </div>
    );
};

export default Shop;