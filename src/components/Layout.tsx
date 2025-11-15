import { useEffect } from 'react';
import Navbar from './elements/Navbar';
import Footer from './elements/Footer';

interface Props {
  title: string;
  children: React.ReactNode;
}

const Layout = ({ title, children }: Props) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Navbar />

      {/* Remove container here */}
      <main className='flex flex-col gap-y-20 md:gap-y-32 overflow-hidden'>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
