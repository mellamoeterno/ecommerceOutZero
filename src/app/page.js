import Image from "next/image";
import Link from "next/link";

//remember to push only advanced (stripe try1) code to new advanced code branch
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-600 via-yellow-400 to-green-600 font-sans p-8 gap-10">
      
      {/* Hero Section */}
      <div className="text-center text-white">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">Welcome to Pepper Sauce!</h1>
        <p className="text-xl mt-4">Turn up the heat on your tastebuds 🌶️</p>
      </div>

      {/* Pepper Image */}
      <Image
        src="/black-pepper-sauce-recipe.jpg"
        alt="Spicy Pepper"
        width={200}
        height={200}
        className="rounded-full border-4 border-white shadow-lg"
        priority
      />

      {/* Features Section */}
      <div className="grid sm:grid-cols-2 gap-6 text-white text-center max-w-3xl">
        <div className="p-4 bg-black/20 rounded-xl backdrop-blur">
          <h2 className="text-2xl font-bold mb-2">🌶️ Fresh Ingredients</h2>
          <p>Only the best sauce make the cut.</p>
        </div>
        <div className="p-4 bg-black/20 rounded-xl backdrop-blur">
          <h2 className="text-2xl font-bold mb-2">🔥 Hot Deals</h2>
          <p>Grab exclusive offers before they cool down!</p>
        </div>
        <div className="p-4 bg-black/20 rounded-xl backdrop-blur">
          <h2 className="text-2xl font-bold mb-2">🍽️ Recipes</h2>
          <p>Spice up your meals with our fiery mustard recipe collection.</p>
        </div>
        <div className="p-4 bg-black/20 rounded-xl backdrop-blur">
          <h2 className="text-2xl font-bold mb-2">📦 Fast Shipping</h2>
          <p>Get your peppery goodness delivered fresh to your door.</p>
        </div>
      </div>

      {/* Call-to-Action */}    
      <Link href="/products" className="group relative inline-block text-sm font-medium text-indigo-100 focus:ring-3 focus:outline-hidden"      
    >
      <span
        className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-amber-500 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
      ></span>
    
      <span className="relative block border border-current bg-amber-500 px-8 py-3"> view our products </span>
    </Link>        
    </div>
  );
}
