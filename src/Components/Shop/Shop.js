import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([])
    const [carts,setCarts]=useState([])
    
    useEffect(()=>{
        fetch('bike-data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const addToCart=(product)=>{
        const newCart=[...carts,product]
       setCarts(newCart)
    }
    
    const  random=()=>{
        var newCart=[...carts]
        var randomItem = newCart[Math.floor(Math.random()*newCart.length)];
        
        alert('chosse for you from us:'+randomItem.name)
        return
    }
    const remove=()=>{
        setCarts([])
    }
   
    return (
        <div>
          <h1 className='mt-5'>WellCome To Your Dream Bike Store</h1>
           
           <div className='shop container-fluid'>
               
          
                <div  class="row">

            {
                products.map(product=><Product addToCart={addToCart} key={product.id} product={product}></Product>)
            }
               </div>
               <div className='shadow'>
               <h6>Selected Item: </h6> 
               
               {
                carts.map(cart=><Cart key={cart.id} cart={cart}></Cart>)
            }
            <button onClick={random} className='btn btn-outline-warning mb-2'>Choose 1 For Me</button>
            <br></br>
            <button onClick={remove} className='btn btn-outline-info'>Reset item</button>

            
            </div>  
            </div>  
        </div>
    );
};

export default Shop;