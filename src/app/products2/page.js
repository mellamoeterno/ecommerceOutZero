import Image from "next/image";
import Link from "next/link";

//stripe checkout cart On debugging now, for mergin later on advancedCodeStripeTry1 branch later
export default function Products2() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-600 via-yellow-400 to-green-600 font-sans p-8 gap-10">
      
      {/* Hero Section */}
      <div className="text-center text-white">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">Our 4 special ones</h1>
        <p className="text-xl mt-4">More than delicious</p>
      </div>

      {/* Pepper Image */}
      <Image
        src="/image/imageProduct2/applySauce1"
        alt="Spicy Pepper"
        width={200}
        height={200}
        className="rounded-lg border-4 border-amber-500 shadow-lg"
        priority
      />

      {/* products2 Section */}
      <div className="grid sm:grid-cols-2 gap-6 text-white text-center max-w-3xl">
        <div className="p-4 bg-black/20 rounded-xl backdrop-blur">
          <h2 className="text-2xl font-bold mb-2">Mexican cheese pepper sauce</h2>{/*1*/}
          <image
          src="/image/imageProduct2/product1.jpg"
          alt="Spicy Pepper"
          width={100}
          height={100}
          className="rounded-lg border-4 border-amber-900 shadow-lg"
          priority
          />
          <p>description.</p>
        </div>
        <div className="p-4 bg-black/20 rounded-xl backdrop-blur">
          <h2 className="text-2xl font-bold mb-2">Tomato mango pepper sauce</h2>{/*2*/}
          <image
          src="/image/imageProduct2/product2.jpg"
          alt="Spicy Pepper"
          width={100}
          height={100}
          className="rounded-lg border-4 border-amber-900 shadow-lg"
          priority
          />
          <p>description</p>
        </div>
        <div className="p-4 bg-black/20 rounded-xl backdrop-blur">
          <h2 className="text-2xl font-bold mb-2">Honey and almond pepper sauce</h2>{/*3*/}
          <image
          src="/image/imageProduct2/product3.jpg"
          alt="Spicy Pepper"
          width={100}
          height={100}
          className="rounded-lg border-4 border-amber-900 shadow-lg"
          priority
          />
          <p>description</p>
          <image
          src="/image/imageProduct2/product4.jpg"
          alt="Spicy Pepper"
          width={100}
          height={100}
          className="rounded-lg border-4 border-amber-900 shadow-lg"
          priority
          />
        </div>
        <div className="p-4 bg-black/20 rounded-xl backdrop-blur">
          <h2 className="text-2xl font-bold mb-2">Vietnamese pepper dip sauce</h2>{/*4*/}
          <p>description</p>
        </div>
      </div>             
    </div>
  );
}
