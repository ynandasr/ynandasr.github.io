import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'work-experience', label: 'Work Experience' },
    { id: 'projects', label: 'Projects' },
  ];

  // Navbar shadow effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll with header offset
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = document.querySelector('nav')?.clientHeight || 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY - navHeight + 1; // +1 untuk memastikan trigger scroll spy
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Scroll spy yang stabil
  useEffect(() => {
    const handleScrollSpy = () => {
      const navHeight = document.querySelector('nav')?.clientHeight || 80;
      let current = '';
      document.querySelectorAll('section[id]').forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= navHeight + 5 && rect.bottom > navHeight) { // offset sedikit untuk stabil
          current = sec.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy(); // trigger sekali di load

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [setActiveSection]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        ${isScrolled
          ? isDark
            ? 'bg-gray-900 shadow-lg border-b border-gray-900'
            : 'bg-[#958464] shadow-lg border-b border-[#958464]'
          : 'backdrop-blur-lg bg-white/10 dark:bg-gray-900/20 border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.h1
            className={`text-xl font-bold tracking-wide whitespace-nowrap ${isScrolled || isDark ? 'text-white' : 'text-white'}`}
            animate={{ x: ['100%', '-100%'] }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          >
            Hi, There!
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-300
                    ${activeSection === item.id
                      ? 'text-[#263238]'
                      : isScrolled
                        ? 'text-white hover:text-gray-200'
                        : 'text-white hover:text-[#263238]'
                    }`}
                >
                  {item.label}
                </motion.button>
              ))}

              {/* Theme Toggle */}
              <motion.div
                whileTap={{ scale: 0.95 }}
                onClick={toggleTheme}
                className={`w-16 h-8 flex items-center rounded-full cursor-pointer transition-colors duration-300
                  ${isDark ? 'bg-blue-600' : 'bg-[#928262]'}`}
              >
                <motion.div
                  layout
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className={`w-8 h-8 rounded-full shadow-md flex items-center justify-center bg-white`}
                  style={{ x: isDark ? 32 : 0 }}
                >
                  {isDark ? <Moon size={16} className="text-blue-600" /> : <Sun size={16} className="text-[#928262]" />}
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2">
            <motion.div
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className={`w-14 h-7 flex items-center rounded-full cursor-pointer transition-colors duration-300
                ${isDark ? 'bg-blue-600' : 'bg-[#928262]'}`}
            >
              <motion.div
                layout
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="w-7 h-7 rounded-full shadow-md flex items-center justify-center bg-white"
                style={{ x: isDark ? 28 : 0 }}
              >
                {isDark ? <Moon size={16} className="text-blue-600" /> : <Sun size={16} className="text-[#928262]" />}
              </motion.div>
            </motion.div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden mt-2 py-2 rounded-lg backdrop-blur-lg border border-white/20 shadow-lg
              ${isDark ? 'bg-gray-900/95' : 'bg-blue-600/95'}`}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-all duration-300
                  ${activeSection === item.id
                    ? 'text-blue-200 bg-white/10'
                    : 'text-white hover:text-blue-200 hover:bg-white/10'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
