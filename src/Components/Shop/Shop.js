import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from './Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('bike-data.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <h1>Bike Dream</h1>
            
            <div className='shop'>
                <div className='row container-fluid'>

               
            
      
            {
                products.map(product=><Product key={product.id} product={product}></Product>)
            }
               </div>
               <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;