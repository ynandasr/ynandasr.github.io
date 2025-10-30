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
        isDark ? 'bg-gray-800' : 'bg-[#e8e3da]' // tone netral, nyambung Hero
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
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
              className={`text-lg leading-relaxed text-justify ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Hi, I’m Yuliani! I’m a detail-oriented professional with five years of experience in e-commerce operations,
              where I managed thousands of product listings, supported new seller onboarding, and streamlined workflows
              to ensure SOP compliance and operational efficiency.
              I enjoy improving processes, maintaining accuracy, and collaborating across teams to achieve consistent, high-quality outcomes.
              Currently, I’m expanding my analytical skill set through a Data Analytics bootcamp,
              gaining hands-on experience in SQL, Python, and Tableau.
              This journey has deepened my ability to interpret data, generate actionable insights, and support data-driven decision-making.
              With a strong foundation in e-commerce operations and growing expertise in analytics,
              I’m passionate about leveraging data to improve efficiency, enhance performance, and create meaningful business impact.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
