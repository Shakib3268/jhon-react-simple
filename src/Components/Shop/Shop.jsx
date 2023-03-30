import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
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
            <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;