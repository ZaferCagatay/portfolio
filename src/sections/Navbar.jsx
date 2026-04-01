import { useState } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import {
  fadeInDown,
  getInitialHidden,
  useMotionReduced,
} from '../utils/motion';

const NavItems = ({ listClassName = '', reduceMotion }) => {
  const { language } = useLanguage();

  return (
    <ul className={`nav-ul ${listClassName}`.trim()}>
      {navLinks.map((item, i) => (
        <motion.li
          key={item.id}
          className="nav-li"
          initial={reduceMotion ? false : { opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: reduceMotion ? 0 : 0.06 * i,
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.a
            href={item.href}
            className="nav-li_a"
            whileHover={reduceMotion ? undefined : { y: -1 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          >
            {language === 'en' ? item.name : item.nameTR}{' '}
          </motion.a>
        </motion.li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const reduceMotion = useMotionReduced();

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-black/90"
      variants={fadeInDown}
      initial={getInitialHidden(reduceMotion)}
      animate="visible"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <motion.a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
            whileHover={reduceMotion ? undefined : { scale: 1.05 }}
            whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          >
            Z
          </motion.a>
          <div className="sm:hidden flex">
            <button
              onClick={toggleLanguage}
              className="mr-4"
              aria-label="Change Language"
            >
              <img
                src={language === 'en' ? 'assets/tr.png' : 'assets/en.png'}
                alt="toggle"
                className="w-6 h-6"
              />
            </button>
            <button
              onClick={toggleMenu}
              className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
              aria-label="Toggle menu"
            >
              <img
                src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
                alt="toggle"
                className="w-6 h-6"
              />
            </button>
          </div>
          <nav className="sm:flex hidden">
            <button
              onClick={toggleLanguage}
              className="mr-4"
              aria-label="Change Language"
            >
              <img
                src={language === 'en' ? 'assets/tr.png' : 'assets/en.png'}
                alt="toggle"
                className="w-6 h-6"
              />
            </button>
            <NavItems reduceMotion={reduceMotion} />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems
            listClassName="flex flex-col gap-2"
            reduceMotion={reduceMotion}
          />
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
