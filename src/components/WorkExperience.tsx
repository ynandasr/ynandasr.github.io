import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTheme } from '../contexts/ThemeContext';

interface WorkItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  additional: string[];
}

const workData: WorkItem[] = [
  {
    role: 'PIC - Listing & Uploading Team',
    company: 'PT Shopee International Indonesia',
    period: 'Jan 2020 - May 2025',
    description: [],
    additional: [
      'Managed store setup for 15-20 new sellers monthly and uploaded thousands of products by coordinating with RM/BD and following SOPs, supporting Mall storefront growth and ensuring smooth operational flow.',
      'Performed peer pre-QC and final quality checks for VIP sellers, ensuring 100% accuracy of product listings and minimizing operational errors to protect store reputation and seller satisfaction.',
      'Streamlined sitemap setup for product data scraping using Google Chrome extensions (e.g., Web Scraper), reducing data extraction time from ~1 hour to 10-15 minutes per 100 products.',
      'Reviewed and removed duplicate product listings using BI-sourced data and random checks, reducing duplicate listings by ~75,000 weekly and lowering seller complaints while improving catalog integrity.',
    ],
  },
  {
    role: 'Agent - Quality Control Team',
    company: 'PT Shopee International Indonesia',
    period: 'Apr 2018 - Jan 2020',
    description: [],
    additional: [
      'Performed SOP-driven quality-control audits on product listings, keeping error rates below 2% per week and ensuring non-compliant items did not go live.',
      'Analyzed ~100 counterfeit or prohibited listings daily by cross-checking sensitive items with external sources (market-price checks, BPOM), preventing harmful items from being sold and protecting platform integrity.',
      'Reviewed ~2,000 product titles daily to identify and tag spammy or irrelevant keywords based on SOP guidelines, notifying sellers for correction and improving overall listing quality.'
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
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const { isDark } = useTheme();

  return (
    <section
      id="work-experience"
      className={`py-20 transition-colors duration-500 ${isDark ? 'bg-gray-900' : 'bg-[#e5dfd4]'}`}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              variants={itemVariants}
              className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}
            >
              Work Experience
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-24 h-1 bg-gradient-to-r from-[#83562e] to-[#e0c2a8] mx-auto mb-6 rounded-full"
            />
            <motion.p
              variants={itemVariants}
              className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-700'}`}
            >
              Professional experience and key contributions.
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative pl-8">
            {/* Vertical line */}
            <div className={`absolute left-3 top-0 w-0.5 h-full ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`} />

            <motion.div variants={containerVariants} className="space-y-12">
              {workData.map((work, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex items-start"
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-0 mt-2 w-4 h-4 rounded-full ring-4 ${isDark ? 'bg-[#8c8c9a] ring-gray-900' : 'bg-[#51505c] ring-[#cfc8b9]'}`}
                  />

                  {/* Card */}
                  <div
                    className={`ml-8 flex-1 p-6 rounded-xl border shadow-md hover:shadow-lg transition-shadow duration-300 ${
                      isDark ? 'bg-gray-800/80 border-gray-700' : 'bg-[#f4f2ed] border-gray-200'
                    }`}
                  >
                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                          {work.role}
                        </h3>
                        <p className="flex items-center gap-2 text-sm text-[#51505c] font-medium">
                          <Briefcase className="w-4 h-4" />
                          {work.company}
                        </p>
                      </div>
                      <div className={`flex items-center px-3 py-1 mt-3 md:mt-0 rounded-full text-xs font-medium ${isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                        <Calendar className="w-4 h-4 mr-1" />
                        {work.period}
                      </div>
                    </div>

                    {/* Description */}
                    <div className={`mb-4 space-y-2 text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {work.description.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>

                    {/* Additional section */}
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      {work.additional.map((ach, i) => (
                        <li key={i} className={isDark ? 'text-gray-300' : 'text-gray-700'}>
                          {ach}
                        </li>
                      ))}
                    </ul>
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
