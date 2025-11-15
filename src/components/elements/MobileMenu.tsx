import { useState } from 'react';
import { navItems } from '../shared/navItems';
import BtnLink from '../shared/BtnLink';
import NavBtn from './NavBtn';
import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-scroll';

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='md:hidden relative block font-primary'>
      <NavBtn menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className='fixed inset-0 h-screen bg-black/30 backdrop-blur-sm z-50'
            />

            {/* Menu */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className='absolute -top-2 -right-2 z-[60] w-64 min-h-full rounded-md bg-neutral-50 p-8 flex flex-col origin-top-right'
            >
              <ul className='flex flex-col gap-2 flex-1 mb-2'>
                {navItems.map((item, key) => (
                  <li
                    key={key}
                    className='p-1.5 text-xl font-bold font-primary text-violet hover:text-violet/70'
                  >
                    <Link
                      to={item.href.replace('#', '')}
                      smooth={true}
                      offset={-80}
                      duration={900}
                      spy={true}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <BtnLink
                label='Book Your Treat'
                href='#cta'
                className='bg-pink-500 hover:bg-pink-700 font-bold text-white text-center px-5 py-2 rounded-xl shadow-md transition'
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
