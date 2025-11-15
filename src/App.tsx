import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import ProductFilter from './components/sections/ProductFilter';
import Star from './components/sections/Star';

const App = () => {
  return (
    <Layout title='SweetDreams Cafe'>
      <Hero />
      <Star />
      <ProductFilter />
    </Layout>
  );
};

export default App;
