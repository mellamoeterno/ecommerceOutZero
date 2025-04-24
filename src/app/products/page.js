'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Products() {

  const products = [
    {
      id: 1,
      name: 'Sauce mango omega',
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
    }
  ];

  //fix names not showing!!!!!
  const carouselProducts = [
    {
      id: 1,
      name: 'Mexican cheese pepper sauce',
      image: '/image/imageProduct2/product1', 
      price: '$6.00'
    },
    {
      id: 2,
      name: 'Tomato mango pepper sauce',
      image: '/image/imageProduct2/product2',
      price: '$8.00'
    },
    {
      id: 3,
      name: 'Honey and almond pepper sauce',
      image: '/image/imageProduct2/product3',
      price: '$8.00'
    },
    {
      id: 4,
      name: 'Vietnamese pepper dip sauce',
      image: '/image/imageProduct2/product4',
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
          {products.map(product => (
            <div key={product.id} className="w-64 bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
              <div className="h-48 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="product-image"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.price}</p>
                <button className="w-full bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 rounded hover:opacity-90 transition">
                  View Product
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel section */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-12">Also Check This</h2>{/*fix images not showing!!!!!*/}
          
          <div className="relative max-w-4xl mx-auto overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 50}%)` }}>
              {[...carouselProducts, ...carouselProducts].map((product, index) => (
                <div key={`${product.id}-${index}`} className="w-1/2 px-4 min-w-[50%]">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-48 relative">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                      <p className="text-gray-600">{product.price}</p>
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

