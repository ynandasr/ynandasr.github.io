import React from 'react';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });
  const { isDark } = useTheme();

  return (
    <section
      id="about"
      className={`py-24 transition-colors duration-500 ${
    isDark ? 'bg-gray-800' : 'bg-[#e8e3da]' // <— diganti ke tone lebih netral, nyambung Hero
  }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* About Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-4xl font-bold mb-4 tracking-wide ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-1 bg-gradient-to-r from-[#83562e] to-[#e0c2a8] mx-auto mb-6 rounded-full"
            />
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-5xl mx-auto text-center"
          >
            <p
              className={`text-xl leading-relaxed text-justify ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              I am an aspiring Data Analyst who values responsibility and accuracy. 
              With 5 years as a Content Operation Specialist, I managed thousands of product 
              uploads monthly, honing attention to detail, process management, and data accuracy. 
              By creating and maintaining sitemaps, I streamlined listings, ensured SOP compliance, 
              and helped my team meet targets. Skilled in Excel, process optimization, and cross-team 
              communication, I am also expanding my knowledge in SQL, Python, and data visualization. 
              With a strong e-commerce background and focus on practical insights, I am eager to 
              contribute meaningfully as a Data Analyst.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
