'use client';
import React from 'react';
import Image from 'next/image';

export default function Products() {
    const products = [
        {
            id: 1,
            name: 'Sauce mango omega 1',
            image: '/image/product1.jpg',
            price: '$5.00'
        },
        {
            id: 2,
            name: 'Sauce mango omega 2',
            image: '/image/product2.jpg',
            price: '$10.00'
        },
        {
            id: 3,
            name: 'Sauce mango omega 3',
            image: '/image/product3.jpg',
            price: '$15.00'
        }
    ];

    return (
        <div className="products-container">
            <h1 className="title">Our Products</h1>
            <div className="grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <Image
                            src={product.image}
                            alt={product.name}
                            width={200}
                            height={200}
                            className="product-image"
                        />
                        <h2>{product.name}</h2>
                        <p>{product.price}</p>
                        <button className="buy-btn">View Product</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

/*objective: create simpler code and see if works*/