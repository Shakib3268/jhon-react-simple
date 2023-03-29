import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products,setProducts]=useState([])
    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='Shop-container'>
            <div className="products-container">
        {
            products.map(product => <Product key={product.id} product={product}></Product>)
        }
            </div>
            <div className="cart-container">
        <h2>Order Sumarry</h2>
            </div>
        </div>
    );
};

export default Shop;