import React from 'react';

const Hero: React.FC = () => {
  const muffinImages = [
    '/assets/hero-cp2.png',
    '/assets/hero-cp4.png',
    '/assets/hero-cp2.png',
    '/assets/hero_cp3.png',
  ];

  return (
    <section className='relative w-full h-screen overflow-hidden'>
      {/* Full-bleed background (Tailwind method) */}
      <div
        className="absolute inset-0 -z-10 bg-[url('/assets/bg_cloud.jpg')] bg-cover bg-center bg-no-repeat"
        aria-hidden='true'
      />

      {/* If your navbar is fixed at top and you want the background visible behind it,
          make sure navbar has a higher z-index (e.g. z-20) or transparent bg */}

      {/* Content container — keeps side spacing from your layout/container */}
      <div className='relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center justify-center h-full'>
        {/* Home Text */}
        <h2 className='text-3xl sm:text-6xl md:text-7xl font-bold font-primary mb-9 text-heading text-center max-w-3xl'>
          Where Sweet Dreams Become Delicious Reality
        </h2>

        {/* Muffin Images */}
        <div className='flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 mt-4'>
          {muffinImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`dessert-${i}`}
              className='w-24 sm:w-32 md:w-44 lg:w-56 object-contain animate-float hover:scale-110 transition-transform duration-500 ease-in-out'
            />
          ))}
        </div>
      </div>

      {/* Local animation CSS (keeps it inside component) */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
