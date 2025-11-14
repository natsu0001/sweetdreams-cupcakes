import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface StarSlide {
  title: string;
  description: string;
  image: string;
  bg: string;
}

interface StarProductProps {
  heading?: string;
}

export const Star: React.FC<StarProductProps> = ({
  heading = 'Our Star Products',
}) => {
  const slides: StarSlide[] = [
    {
      title: 'The Ultimate Vanilla Fudge Cake',
      description:
        'Indulge in our rich and decadent Vanilla Fudge Cake, crafted with moist layers and creamy frosting.',
      image: '/assets/bgcake.png',
      bg: '/assets/sprinkles.png',
    },
    {
      title: 'Strawberry Dream Cupcake',
      description:
        'A fluffy strawberry cupcake topped with whipped cream frosting and real berry flavor.',
      image: '/assets/star2.png',
      bg: '/assets/bg_cloud.jpg',
    },
    {
      title: 'Chocolate Bliss ',
      description:
        'Soft, warm donut dipped in rich dark chocolate glaze. A chocolate lover’s paradise!',
      image: '/assets/star3.png',
      bg: '/assets/choclatebg.png',
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);
  const nextSlide = () => setIndex((index + 1) % slides.length);

  const current = slides[index];

  return (
    <section
      className='relative sm:-mt-32 -mt-24 h-1/3 py-12 px-4 bg-cover bg-center opacity-70 transition-all duration-500 font-primary'
      style={{ backgroundImage: `url(${current.bg})` }}
    >
      {/* Blur overlay */}
      <div className='absolute inset-0 backdrop-blur-md bg-white/10'></div>

      <div className='relative z-10'>
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white'
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={nextSlide}
          className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white'
        >
          <ChevronRight size={28} />
        </button>

        {/* Heading */}
        <div className='text-center mb-12 mt-12'>
          <h2 className='text-4xl md:text-6xl font-extrabold text-pink-500'>
            {heading}
          </h2>
        </div>

        {/* Animated Content */}
        <div className='max-w-6xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={index + '-text'}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className='flex flex-col justify-center text-center md:text-left'
            >
              <h3 className='text-2xl md:text-4xl font-bold text-gray-900 mb-4'>
                {current.title}
              </h3>
              <p className='text-base md:text-lg font-medium text-shadow-peach leading-relaxed'>
                {current.description}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* IMAGE Animation */}
          <AnimatePresence mode='wait'>
            <motion.div
              key={index + '-img'}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className='flex justify-center'
            >
              <div className='w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[520px] md:h-[520px]'>
                <img
                  src={current.image}
                  alt={current.title}
                  className='w-full h-full object-contain bg-transparent'
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Star;
