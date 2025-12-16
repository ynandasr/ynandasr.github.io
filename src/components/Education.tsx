import React from 'react';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTheme } from '../contexts/ThemeContext';

// 🔹 Import logo dari folder assets
import revouLogo from '../assets/revou.png';
import uinLogo from '../assets/uinjkt.png';
import cetta from '../assets/cetta.png';

// Types
interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  description: string;
  achievements?: string[];
  gpa?: string;
}

interface Certification {
  name: string;
  year: string;
  issuer: string;
  url: string;
}

// Data
const educationData: EducationItem[] = [
  {
    degree: 'University Syarif Hidayatullah Jakarta',
    institution: 'Bachelor’s Degree in Sociology',
    period: '2013 - 2018',
    description:
      'Specialized in Social Research. Completed a thesis on the adaptation strategies of traditional merchants in embracing digital payment technologies.',
    gpa: '3.47/4.00',
  },
  {
    degree: 'RevoU',
    institution: 'Full Stack Data Analytics Program',
    period: 'June 2025 - Sept 2025',
    description:
      'Completed RevoU Full-stack Data Analytics program, gaining hands-on experience in statistics, SQL, Python, and Tableau through real projects to generate actionable insights.',
  },
];

const certificationsData: Certification[] = [
  {
    name: 'Full Stack Data Analytics',
    year: 'Oct 2025',
    issuer: 'RevoU',
    url: 'https://certificates.revou.tech/?id=FSDA-2025-10-36975094841&name=Yuliani%20Nanda%20Sari'
  },
  {
    name: 'HSK 1 初级上',
    year: 'Aug 2025',
    issuer: 'Cetta Online Class',
    url: 'https://drive.google.com/file/d/12YDoWh5jDIrOaZis25YwFZOKCfOhXyyX/view'
  },
  {
    name: 'Data Analytics Mini Course',
    year: 'May 2025',
    issuer: 'RevoU',
    url: 'https://drive.google.com/file/d/1DQCHFjnzBfWx9i5p0LleZsmHC5egyie5/view'
  },
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

// 🔹 Helper: ambil logo berdasarkan nama institusi
const getLogo = (institution: string) => {
  if (institution.includes('Full Stack Data Analytics Program')) return revouLogo;
  if (institution.includes('Bachelor’s Degree in Sociology')) return uinLogo;
  return null;
};

// 🔹 Helper: ambil logo untuk certifications
const getCertLogo = (issuer: string) => {
  if (issuer === 'RevoU') return revouLogo;
  if (issuer === 'Cetta Online Class') return cetta;
  return null;
};

const Education: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const { isDark } = useTheme();

  return (
    <section
      id="education"
      className={`py-20 transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-[#e5dfd4]'
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
              className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'
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
              className={`text-lg max-w-2xl mx-auto mt-6 ${isDark ? 'text-gray-300' : 'text-gray-600'
                }`}
            >
              Academic background and certifications.
            </motion.p>
          </div>

          {/* Education Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {educationData.map((edu, index) => {
              const logo = getLogo(edu.institution);
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`p-8 rounded-2xl border shadow-lg transition-transform duration-300 hover:-translate-y-1 ${isDark
                      ? 'bg-gray-800/50 border-gray-700 hover:shadow-gray-700/50'
                      : 'bg-[#ebeae6] border-gray-200 hover:shadow-lg'
                    }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    {logo ? (
                      <img
                        src={logo}
                        alt={`${edu.institution} logo`}
                        className="w-10 h-10 object-contain rounded-full bg-white p-1"
                      />
                    ) : (
                      <div className="p-2 rounded-full bg-[#9d6738]/20">
                        <GraduationCap className="w-6 h-6 text-[#9d6738]" />
                      </div>
                    )}
                    <h3
                      className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'
                        }`}
                    >
                      {edu.degree}
                    </h3>
                  </div>
                  <p
                    className={`text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-[#51505c]'
                      }`}
                  >
                    {edu.institution}
                  </p>
                  <div
                    className={`inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium mb-3 ${isDark
                        ? 'bg-gray-700 text-gray-300'
                        : 'bg-gray-100 text-gray-700'
                      }`}
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    {edu.period}
                  </div>
                  <p
                    className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                  >
                    {edu.description}
                  </p>
                  {edu.gpa && (
                    <p
                      className={`mt-3 text-xs ${isDark ? 'text-gray-400' : 'text-[#51505c]'
                        }`}
                    >
                      GPA: {edu.gpa}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h3
              className={`text-2xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-gray-900'
                }`}
            >
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificationsData.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className={`p-6 rounded-xl border transition-all duration-300 text-center hover:-translate-y-1 cursor-pointer ${isDark
                      ? 'bg-gray-800/50 border-gray-700 hover:border-gray-500 hover:shadow-md'
                      : 'bg-[#ebeae6] border-gray-200 hover:border-[#9d6738] hover:shadow-lg'
                    }`}
                >
                  <div className="p-3 rounded-full bg-[#9d6738]/20 w-fit mx-auto mb-3">
                    {getCertLogo(cert.issuer) ? (
                      <img
                        src={getCertLogo(cert.issuer)}
                        alt={`${cert.issuer} logo`}
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      <Award className="w-8 h-8 text-[#9d6738]" />
                    )}
                  </div>
                  <h4
                    className={`text-sm font-semibold mb-1 ${isDark ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    {cert.name}
                  </h4>
                  <p
                    className={`text-xs mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                  >
                    {cert.issuer}
                  </p>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${isDark
                        ? 'bg-[#9d6738]/30 text-[#f5d7b0]'
                        : 'bg-[#f2e1d1] text-[#9d6738]'
                      }`}
                  >
                    {cert.year}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
