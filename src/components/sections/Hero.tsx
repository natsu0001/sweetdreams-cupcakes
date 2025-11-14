import React from 'react';
import BtnLink from '../shared/BtnLink';

const Hero: React.FC = () => {
  return (
    <section id='hero' className='relative overflow-hidden bg-white'>
      <div className='mt-1 max-w-7xl mx-auto flex flex-col justify-center min-h-screen px-6'>
        {/* Text + Image */}
        <div className='relative flex flex-col md:flex-row items-center gap-3 justify-center md:justify-between w-full text-center md:text-left'>
          {/* Left text */}
          <h1 className='text-[3rem] md:text-[5rem] md:border-b-8 font-extrabold leading-none text-lavender font-primary z-10'>
            Delight in
          </h1>

          {/* Cupcake image */}
          <div className='relative md:-mx-12 z-20'>
            <img
              src='/assets/heroImage1.png'
              alt='Cupcake'
              className='w-[250px] md:w-[400px] drop-shadow-xl'
            />
          </div>

          {/* Right text */}
          <h1 className='text-[3rem] md:text-[5rem] font-extrabold md:border-t-8 leading-none font-primary text-pink-500 z-10'>
            Every Bites!
          </h1>
        </div>

        {/* Subtext + Button */}
        <div className='md:mt-6 max-w-md md:max-w-lg flex flex-col text-[#5E6E6E] text-base md:text-lg text-center md:text-left mx-auto md:mx-0'>
          <p className='text-gray-text mt-6 sm:mt-0'>
            Experience the joy of perfectly baked cupcakes, made with love and
            crafted to bring a smile to every celebration.
          </p>
          <BtnLink
            label='Shop Now'
            href='#item-list'
            className='relative z-20 mt-6 md:mt-2 text-base inline-block md:self-start bg-pink-500 font-primary text-white rounded-full font-semibold mx-auto md:mx-0'
          />
        </div>
      </div>

      {/* Wavy bottom */}
      <svg
        className='absolute md:-bottom-5 bottom-0 left-0 w-full scale-y-90 z-50'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill='#EC4899' // pink-400 equivalent
          d='M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,229.3C672,224,768,192,864,197.3C960,203,1056,245,1152,245.3C1248,245,1344,203,1392,181.3L1440,160V320H0Z'
        />
      </svg>
    </section>
  );
};

export default Hero;
