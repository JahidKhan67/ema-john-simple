import React, { useEffect, useState } from 'react';
import './Shop.css';
const Shop = () => {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setproducts(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className="products-container">
                <h2>Products Coming Here: {products.length}</h2>

            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
            </div>
        </div>
    );
};

export default Shop;