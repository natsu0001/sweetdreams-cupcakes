import React from 'react';

const Hero: React.FC = () => {
  

  return (
    <section className="relative w-full h-[calc(100vh-4rem)] overflow-hidden pt-16">
  
          <div className="absolute inset-0 bg-[url('/assets/bg_cloud.jpg')] bg-cover bg-center opacity-50 -z-20" />


             <div className="hidden md:absolute md:inset-0 md:flex md:justify-center md:items-center md:-z-10 pointer-events-none">
               <img
                 src="/assets/bgcake.png"
                 alt="Cupcake background"
                  className="w-[550px] mt-10 opacity-70 object-contain"
                />
             </div>

 
             <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-primary font-extrabold text-lavender leading-tight drop-shadow-[0_4px_10px_rgba(255,192,203,0.3)] mt-8 md:mt-0">
                  Where Sweet Dreams <br />
                  <span className="text-pink-500">Become Delicious Reality</span>
                </h2>

   
              <div className="block md:hidden mt-8">
                 <img
                   src="/assets/bgcake.png"
                   alt="Cupcake"
                   className="w-[500px]  opacity-80 object-contain"
                  />
              </div>
          </div>
     </section>



         );
   };

export default Hero;
