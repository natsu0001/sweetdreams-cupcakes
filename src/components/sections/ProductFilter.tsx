import { useState } from 'react';

interface Category {
  id: string;
  label: string;
  icon: string;
}

interface Product {
  id: string;
  name: string;
  image: string;
  category: string;
  price: string;
}

const categories: Category[] = [
  { id: 'cupcake', label: 'Cupcake', icon: '🧁' },
  { id: 'pastry', label: 'Pastry', icon: '🥐' },
  { id: 'croissant', label: 'Croissant', icon: '🥐' },
  { id: 'donut', label: 'Donut', icon: '🍩' },
  { id: 'cake', label: 'Cake', icon: '🎂' },
];

const products: Product[] = [
  {
    id: '1',
    name: 'Vanilla Cupcake',
    image: '/assets/hero-cp2.png',
    category: 'cupcake',
    price: '₹120',
  },
  {
    id: '2',
    name: 'Vanilla Cupcake',
    image: '/assets/hero-cp2.png',
    category: 'cupcake',
    price: '₹120',
  },
  {
    id: '3',
    name: 'Vanilla Cupcake',
    image: '/assets/hero-cp2.png',
    category: 'cupcake',
    price: '₹120',
  },
  {
    id: '4',
    name: 'Vanilla Cupcake',
    image: '/assets/hero-cp2.png',
    category: 'cupcake',
    price: '₹120',
  },
  {
    id: '5',
    name: 'Vanilla Cupcake',
    image: '/assets/hero-cp2.png',
    category: 'cupcake',
    price: '₹120',
  },
  {
    id: '6',
    name: 'Vanilla Cupcake',
    image: '/assets/hero-cp2.png',
    category: 'cupcake',
    price: '₹120',
  },
  {
    id: '7',
    name: 'Chocolate Donut',
    image: '/assets/item2.jpg',
    category: 'donut',
    price: '₹80',
  },
  {
    id: '8',
    name: 'Croissant Butter',
    image: '/assets/cups2.png',
    category: 'croissant',
    price: '₹150',
  },
  {
    id: '9',
    name: 'Horny Pastry',
    image: '/assets/item1.jpg',
    category: 'pastry',
    price: '₹1550',
  },
  {
    id: '9',
    name: 'Horny Pastry',
    image: '/assets/item1.jpg',
    category: 'cake',
    price: '₹1550',
  },
];

export const ProductFilter = () => {
  const [active, setActive] = useState<string>('cupcake');

  const filtered = products.filter((p) => p.category === active);

  return (
    <section className='px-6 font-primary'>
      {/* Heading */}
      <div className='text-center mb-12 mt-12'>
        <h2 className='text-4xl md:text-7xl font-extrabold text-pink-500'>
          Collection
        </h2>
      </div>

      {/* CATEGORY FILTER BUTTONS */}
      <div className='flex justify-center gap-6 mb-16'>
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setActive(c.id)}
            className={`
              w-20 h-20 flex items-center justify-center rounded-full 
              border-2 text-3xl transition-all
              ${
                active === c.id
                  ? 'border-pink-500 bg-pink-100 scale-110 shadow-md'
                  : 'border-gray-300 hover:scale-105'
              }
            `}
          >
            {c.icon}
          </button>
        ))}
      </div>

      {/* PRODUCT GRID */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 max-w-6xl mx-auto'>
        {filtered.map((p) => (
          <div key={p.id} className='flex flex-col items-center'>
            {/* Frame container */}
            <div className='relative w-60 h-60 sm:w-64 sm:h-64 md:w-72 md:h-72'>
              {/* Frame PNG */}
              <img
                src='/assets/frame.png'
                alt='frame'
                className='absolute z-10 inset-0 w-full h-full object-contain pointer-events-none'
              />

              {/* Product Image */}
              <img
                src={p.image}
                alt={p.name}
                className='absolute z-0 inset-0 w-full h-full p-8 object-contain'
              />
            </div>

            {/* Name */}
            <h3 className='mt-4 text-lg font-semibold text-gray-900'>
              {p.name}
            </h3>

            {/* Price */}
            <p className='text-pink-600 font-bold text-md'>{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductFilter;
