'use client';
import React from 'react';
import Image from 'next/image';

export default function Products() {
  const products = Array.from({ length: 3 }, (_, i) => ({
    id: i + 1,
    name: `Sauce mango omega ${i + 1}`,
    image: `/image/product${i + 1}`, 
    price: `$${(i + 1) * 5}.00`
  }));

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
