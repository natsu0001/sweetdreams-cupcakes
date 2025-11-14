import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface StarSlide {
  title: string;
  description: string;
  image: string;
  bg: string;
}

interface StarProductProps {
  heading?: string;
}

export const Star: React.FC<StarProductProps> = ({ heading = "Our Star Product" }) => {

  // ⭐ Carousel Data
  const slides: StarSlide[] = [
    {
      title: "The Ultimate Vanilla Fudge Cake",
      description:
        "Indulge in our rich and decadent Vanilla Fudge Cake, crafted with moist layers and creamy frosting.",
      image: "/assets/bgcake.png",
      bg: "/assets/sprinkles.png",
    },
    {
      title: "Strawberry Dream Cupcake",
      description:
        "A fluffy strawberry cupcake topped with whipped cream frosting and real berry flavor.",
      image: "/assets/star2.png",
      bg: "/assets/bg_cloud.jpg",
    },
    {
      title: "Chocolate Bliss ",
      description:
        "Soft, warm donut dipped in rich dark chocolate glaze. A chocolate lover’s paradise!",
      image: "/assets/star3.png",
      bg: "/assets/chocbg.png",
    },
  ];

  const [index, setIndex] = useState(0);

  const prevSlide = () => setIndex((index - 1 + slides.length) % slides.length);
  const nextSlide = () => setIndex((index + 1) % slides.length);

  const current = slides[index];

  return (
    <section
      className="relative -mt-32 h-1/3  py-12 px-4 bg-cover bg-center opacity-70 transition-all duration-500"
      style={{ backgroundImage: `url(${current.bg})` }}
    >
      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
      >
        <ChevronRight size={28} />
      </button>

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          {heading}
        </h2>
      </div>

      {/* Product Content */}
      <div className="max-w-6xl mx-auto h-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Text */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {current.title}
          </h3>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            {current.description}
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <div className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[520px] md:h-[520px]">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-contain bg-transparent transition-all duration-500"
            />
           </div>
         </div>

      </div>
    </section>
  );
};

export default Star;
