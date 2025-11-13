import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import Star from './components/sections/Star';

const App = () => {
  return (
    <Layout title='SweetDreams Cafe'>
      <Hero />
      <Star
        title="The Ultimate Venilla Fudge Cake"
        description="Indulge in our rich and decadent Venilla Fudge Cake, crafted with layers of moist chocolate sponge, velvety fudge frosting, and a hint of espresso to enhance the chocolate flavor. Perfect for any celebration or a special treat!"
        image="/assets/bgcake.png"
        imageAlt="Chocolate Fudge Cake"
      />
    </Layout>
  );
};

export default App;
