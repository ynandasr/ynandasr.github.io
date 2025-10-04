import React from 'react';
import { Briefcase, Calendar, MapPin, List } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTheme } from '../contexts/ThemeContext';

interface WorkItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  additional: string[];
}

const workData: WorkItem[] = [
  {
    role: 'Content Ops - Listing & Uploading Team',
    company: 'PT Shopee International Indonesia',
    location: 'Jakarta',
    period: 'Jan 2020 - May 2025',
    description: [
      'Collaborated with Business Development (Relationship Management and Seller Acquisition Teams) to onboard new Shopee Mall brands and manage the full product listing process.',
      'Additional Responsibilities:',
    ],
    additional: [
      'Conducted quality checks for VIP sellers to maintain listing accuracy and operational efficiency.',
      'Created and maintained sitemaps to support product scraping and improve the efficiency of bulk uploads.',
      'Regularly reviewed and removed duplicate listings in line with platform policies, and handled related seller complaints.',
      'Acted as QA for duplicate listing review, minimizing errors through regular SOP updates.',
    ],
  },
  {
    role: 'Content Ops - Screening Team',
    company: 'PT Shopee International Indonesia',
    location: 'Jakarta',
    period: 'Apr 2018 - Jan 2020',
    description: [
      'Regularly monitor product listings through the QC system to ensure compliance with platform standards, resolve listing issues, maintain data accuracy, and enhance overall product quality per SOP guidelines.',
      'Additional Responsibilities:',
    ],
    additional: [
      'Reporting issues such as counterfeit and prohibited items.',
      'Reviewing project keyword spam.',
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WorkExperience: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.3,
    rootMargin: '-80px 0px -100px 0px', // offset to match navbar
  });
  const { isDark } = useTheme();

  return (
    <section
      id="work-experience"
      ref={ref}
      className={`py-20 transition-colors duration-500 ${
        isDark ? 'bg-gray-900' : 'bg-[#e5dfd4]'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Work Experience
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-24 h-1 bg-gradient-to-r from-[#83562e] to-[#e0c2a8] mx-auto mb-6 rounded-full"
            />
            <motion.p
              variants={itemVariants}
              className={`text-lg max-w-2xl mx-auto ${
                isDark ? 'text-gray-400' : 'text-gray-700'
              }`}
            >
              Professional experience and key contributions.
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative pl-8">
            {/* Vertical line */}
            <div
              className={`absolute left-3 top-0 w-0.5 h-full ${
                isDark ? 'bg-gray-600' : 'bg-gray-300'
              }`}
            />

            <motion.div variants={containerVariants} className="space-y-12">
              {workData.map((work, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start"
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-0 mt-2 w-4 h-4 rounded-full ring-4 ${
                      isDark
                        ? 'bg-[#8c8c9a] ring-gray-900'
                        : 'bg-[#51505c] ring-[#cfc8b9]'
                    }`}
                  />

                  {/* Card */}
                  <div
                    className={`ml-8 flex-1 p-6 rounded-xl border shadow-md hover:shadow-lg transition-shadow duration-300 ${
                      isDark
                        ? 'bg-gray-800/80 border-gray-700'
                        : 'bg-[#f4f2ed] border-gray-200'
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3
                          className={`text-2xl font-semibold ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {work.role}
                        </h3>
                        <p className="flex items-center gap-2 text-sm text-[#51505c] font-medium">
                          <Briefcase className="w-4 h-4" />
                          {work.company}
                        </p>
                        <p
                          className={`flex items-center gap-1 text-sm ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          <MapPin className="w-4 h-4" />
                          {work.location}
                        </p>
                      </div>
                      <div
                        className={`flex items-center px-3 py-1 mt-3 md:mt-0 rounded-full text-xs font-medium ${
                          isDark
                            ? 'bg-gray-700 text-gray-300'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        <Calendar className="w-4 h-4 mr-1" />
                        {work.period}
                      </div>
                    </div>

                    {/* Description */}
                    <div
                      className={`mb-4 space-y-2 text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}
                    >
                      {work.description.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>

                    {/* Additional Responsibilities */}
                    <div>
                      <p
                        className={`font-semibold flex items-center mb-2 ${
                          isDark ? 'text-gray-200' : 'text-gray-800'
                        }`}
                      >
                        <List className="w-4 h-4 mr-2" />
                        Additional Responsibilities
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        {work.additional.map((ach, i) => (
                          <li
                            key={i}
                            className={isDark ? 'text-gray-300' : 'text-gray-700'}
                          >
                            {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
