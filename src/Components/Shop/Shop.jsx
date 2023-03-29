import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products,setProducts]=useState([])
    const[cart,setCart]=useState([])
    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddtoCart = (product) =>{
        // console.log(product)
        const newCart = [...cart,product]
        setCart(newCart)
    }
    return (
        <div className='Shop-container'>
            <div className="products-container">
        {
            products.map(product => <Product key={product.id} product={product} handleAddtoCart={handleAddtoCart}></Product>)
        }
            </div>
            <div className="cart-container">
        <h2>Order Sumarry</h2>
        <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;