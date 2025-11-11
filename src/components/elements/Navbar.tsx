import Container from '../../utils/Container';
import { Link } from 'react-scroll';
import { navItems } from '../shared/navItems';
import { useEffect, useState } from 'react';
import BtnLink from '../shared/BtnLink';
import logo from '/assets/cupcakeLogo.png';

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY < lastY) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      setLastY(currentY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className='backdrop-blur-md bg-white/20 border-b border-white/10'>
        <Container>
          <nav className='flex items-center justify-between py-4'>
            {/* Logo */}
            <Link
              to='hero'
              smooth={true}
              duration={1000}
              offset={-80}
              className='flex items-center gap-2'
            >
              <img src={logo} alt='cupcake logo' className='w-10 h-10' />
              <span className='text-xl font-primary font-bold cursor-pointer'>
                Sweet Dreams
              </span>
            </Link>

            <div className='hidden md:flex items-center gap-8 font-primary'>
              <ul className='flex items-center gap-6 text-md font-semibold text-pink-500'>
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href.replace('#', '')}
                      smooth={true}
                      offset={-80}
                      duration={900}
                      spy={true}
                      activeClass='border-b-2 border-violet-800'
                      className='hover:text-pink-800 transition-colors cursor-pointer'
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <BtnLink
                label='Book Your Treat'
                href='#cta'
                className='bg-pink-500 hover:bg-pink-600 text-white font-semibold'
              />
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
