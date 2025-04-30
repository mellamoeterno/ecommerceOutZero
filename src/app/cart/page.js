'use client';
import { useCart } from '/contexts/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const {
    cart,
    cartTotal,
    updateQuantity,
    removeFromCart,
    clearCart
  } = useCart();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      
      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty</p>
          <Link href="/products" className="text-blue-500 mt-2 inline-block">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b pb-4">
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-gray-600">{item.price}</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    className="w-16 px-2 py-1 border rounded"
                  />
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="border-t pt-4">
            <div className="flex justify-between mb-4">
              <span className="font-bold">Total:</span>
              <span className="font-bold">${cartTotal}</span>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Clear Cart
              </button>
              
              <Link
                href="/checkout"
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded text-center hover:bg-blue-700"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}