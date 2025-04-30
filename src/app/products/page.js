'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { loadStripe } from '@stripe/stripe-js';

export default function Products() {
  //product component
  const [cart, setCart] = useState([]);

//stripe checkout cart On debugging now, for mergin later on advancedCodeStripeTry1 branch later
  const products = 
  [{
      id: 1,
      name: 'Sauce mango omega special',
      image: '/image/product1.jpg',
      price: '$5.00'
    },
    {
      id: 2,
      name: 'Sauce mango lemon omega',
      image: '/image/product2.jpg',
      price: '$5.00'
    },
    {
      id: 3,
      name: 'Our special Sauce with almond',
      image: '/image/product3.jpg',
      price: '$5.70'
    }];
    //add to cart component
  const addToCart = (products) => {
    setCart([...cart, products]);
    alert(`${products.name} added to cart!`);
  };
 

  
  //the carousel dont need in this file an addToCart function,
  //only in its 'check also these' page
  const carouselProducts = [
    {
      id: 1,
      name: 'Mexican cheese pepper sauce',
      image: '/imageProduct2/product1.jpg', 
      price: '$6.00'
    },
    {
      id: 2,
      name: 'Tomato mango pepper sauce',
      image: '/imageProduct2/product2.jpg',
      price: '$8.00'
    },
    //fix bad image quality product3
    {
      id: 3,
      name: 'Honey and almond pepper sauce',
      image: '/imageProduct2/product3.jpg',
      price: '$8.00'
    },
    {
      id: 4,
      name: 'Vietnamese pepper dip sauce',
      image: '/imageProduct2/product4.jpg',
      price: '$6.00'
    }
  ];


  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % (carouselProducts.length - 1));
    }, 3000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 opacity-20 -z-10"></div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-20">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-16">Our Products</h1>

        {/* Products grid - horizontal layout */}
        <div className="flex flex-wrap justify-center gap-8 mb-32">
          {products.map(products => (
            <div key={products.id} className="w-64 bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image
                  src={products.image}
                  alt={products.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="product-image"
                />
              </div>
              <div className="p-4">
                <h2 className={`text-xl font-semibold mb-2 ${
                products.id === 1 ? 'text-red-950' :
                products.id === 2 ? 'text-red-950' :
                products.id === 3 ? 'text-red-950' : ''
                }`}>
                {products.name}</h2>
                <p className="text-gray-600 mb-4">{products.price}</p>
                <button className="w-full bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 rounded hover:opacity-90 transition" onClick={() => addToCart(products)}>
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* finish color text style later */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-12">Also Check This</h2>
          
          <div className="relative max-w-4xl mx-auto overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 50}%)` }}>
              {[...carouselProducts, ...carouselProducts].map((products, index) => (
                <div key={`${products.id}-${index}`} className="w-1/2 px-4 min-w-[50%]">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-48 relative">
                      <Image
                        src={products.image}
                        alt={products.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                        <h3 className={`text-lg font-semibold ${
                          products.id === 1 ? 'text-red-500' :
                          products.id === 2 ? 'text-orange-500' :
                          products.id === 3 ? 'text-amber-500' :
                          products.id === 4 ? 'text-lime-600' : ''
                          }`}>
                          {products.name}
                        </h3>
                      <p className="text-gray-600">{products.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {carouselProducts.slice(0, -1).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-red-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

