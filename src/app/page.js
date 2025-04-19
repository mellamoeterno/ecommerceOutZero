import Image from "next/image";

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
        src="/pepper.png" 
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
      <a
        href="#"
        className="mt-8 px-6 py-3 bg-white text-red-700 font-bold rounded-full shadow-lg hover:bg-red-100 transition"
      >
        Shop Now
      </a>
    </div>
  );
}
