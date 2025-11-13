import React from 'react';

interface StarProductProps {
    heading?: string;
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
}

export const Star: React.FC<StarProductProps> = ({
    heading = 'Our Star Product',
    title,
    description,
    image,
    imageAlt = 'Star Product',
}) => {
return (
<section className="py-12 px-4 bg-[url('/assets/sprinkles.png')] bg-cover bg-center opacity-90 -z-20">
 
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{heading}</h2>
  </div>

  {/* Product Container */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    {/* Text Section */}
    <div className="flex flex-col justify-center text-center md:text-left">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>

    {/* Image Section */}
    <div className="flex justify-center">
      <img
        src={image}
        alt={imageAlt}
        className="w-3/4 sm:w-2/3 md:w-full h-auto object-contain  bg-transparent"
      />
    </div>
  </div>
</section>
    );
};

export default Star;