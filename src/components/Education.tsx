import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTheme } from '../contexts/ThemeContext';

// Types
interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  description: string;
  achievements: string[];
  gpa: string;
}

interface Certification {
  name: string;
  year: string;
  issuer: string;
}

// Data
const educationData: EducationItem = {
  degree: 'Bachelor’s Degree in Sociology',
  institution: 'State Islamic University Syarif Hidayatullah Jakarta ',
  period: '2013 - 2018',
  description:
    'Specialized in Social Research. Completed a thesis on the adaptation strategies of traditional merchants in embracing digital payment technologies.',
  achievements: [
    'Research in Machine Learning UI',
    'Teaching Assistant for Web Development',
    'Published 3 research papers',
  ],
  gpa: '3.47/4.00',
};

const certificationsData: Certification[] = [
  { name: 'Full Stack Data Analytics', year: 'Oct 2025', issuer: 'RevoU' },
  { name: 'HSK 1 初级上', year: 'Aug 2025', issuer: 'Cetta Online Class' },
  { name: 'Data Analytics Mini Course', year: 'May 2025', issuer: 'RevoU' },
];

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Education: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const { isDark } = useTheme();

  return (
    <section
      id="education"
  className={`py-20 transition-colors duration-500 ${
    isDark ? 'bg-gray-900' : 'bg-[#e5dfd4]'
  }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2
              variants={itemVariants}
              className={`text-4xl md:text-5xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Education
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-24 h-1 bg-gradient-to-r from-[#83562e] to-[#e0c2a8] mx-auto mb-6 rounded-full"
            />
            <motion.p
              variants={itemVariants}
              className={`text-lg max-w-2xl mx-auto mt-6 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Academic background and certifications.
            </motion.p>
          </div>

          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            className={`p-8 rounded-2xl border shadow-lg mb-16 transition-transform duration-300 hover:-translate-y-1 ${
              isDark
                ? 'bg-gray-800/50 border-gray-700 hover:shadow-gray-700/50'
                : 'bg-[#ebeae6] border-gray-200 hover:shadow-lg'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-full bg-[#9d6738]/20">
                    <GraduationCap className="w-6 h-6 text-[#9d6738]" />
                  </div>
                  <h3
                    className={`text-2xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {educationData.degree}
                  </h3>
                </div>
                <p
                  className={`flex items-center gap-2 text-sm font-semibold ${
                    isDark ? 'text-gray-300' : 'text-[#51505c]'
                  }`}
                >
                  {educationData.institution}
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-sm font-medium text-right">
                <div
                  className={`flex items-center px-4 py-2 rounded-full ${
                    isDark
                      ? 'bg-gray-700 text-gray-300'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {educationData.period}
                </div>
                <p
                  className={`mt-2 text-sm ${
                    isDark ? 'text-gray-400' : 'text-[#51505c]'
                  }`}
                >
                  GPA: {educationData.gpa}
                </p>
              </div>
            </div>

            <p
              className={`mb-6 leading-relaxed ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {educationData.description}
            </p>
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3
              className={`text-2xl font-bold mb-6 text-center ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-xl border transition-all duration-300 text-center hover:-translate-y-1 ${
                    isDark
                      ? 'bg-gray-800/50 border-gray-700 hover:border-gray-500 hover:shadow-md'
                      : 'bg-[#ebeae6] border-gray-200 hover:border-[#9d6738] hover:shadow-lg'
                  }`}
                >
                  <div className="p-3 rounded-full bg-[#9d6738]/20 w-fit mx-auto mb-3">
                    <Award className="w-8 h-8 text-[#9d6738]" />
                  </div>
                  <h4
                    className={`font-semibold mb-1 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {cert.name}
                  </h4>
                  <p
                    className={`text-sm mb-2 ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {cert.issuer}
                  </p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      isDark
                        ? 'bg-[#9d6738]/30 text-[#f5d7b0]'
                        : 'bg-[#f2e1d1] text-[#9d6738]'
                    }`}
                  >
                    {cert.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
