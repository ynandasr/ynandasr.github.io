import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTheme } from '../contexts/ThemeContext';
import picture_3 from '../assets/picture_3.jpg';
import picture_4 from '../assets/picture_4.jpg';
import picture_5 from '../assets/picture_5.jpg';
import picture_6 from '../assets/picture_6.jpg';

// warna pastel ala stabilo
const tagColors: Record<string, string> = {
  EDA: "bg-purple-200",
  "Linear Regression": "bg-[#f7c290]",
  "Clustering Analysis": "bg-pink-200",
  Python: "bg-[#abddc4]",
  Tableau: "bg-blue-200",
  SQL: "bg-red-200",
  "Performance Metrics": "bg-indigo-200",
};

const Projects: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
  const { isDark } = useTheme();

  const projects = [
    {
      id: 1,
      title: 'MunchMelt Q4 Growth Plan - Delivering +5% vs Baseline',
      description: 'Analysis about forecasting and planning Q4 sales growth.',
      tags: ['EDA', 'Linear Regression', 'Python', 'Tableau'],
      image: picture_3,
      slideUrl:
        'https://drive.google.com/file/d/1VijTrfXUtv95NsgfkHk4rISPyk07Rv4r/view?usp=sharing',
    },
    {
      id: 2,
      title: 'Customer Segmentation using K-Means',
      description: 'Analysis about customer grouping using K-Means clustering.',
      tags: ['EDA', 'Clustering Analysis', 'Python'],
      image: picture_4,
      slideUrl:
        'https://drive.google.com/file/d/1dj7tJwagF8VbmDbjXf1xJbC3-t22fEBH/view?usp=sharing',
    },
    {
      id: 3,
      title: 'RevoGrocers Sales Performance Analysis',
      description: 'Analysis about sales performance and key business insights.',
      tags: ['EDA', 'SQL'],
      image: picture_6,
      slideUrl:
        'https://drive.google.com/file/d/1T9NuL5tGpGhW4b9vcPsU8P4oqlE-DnX7/view?usp=sharing',
    },
    {
      id: 4,
      title: 'RevoFinance: Expense & Budget Utilization Dashboard',
      description: 'Dashboard about tracking expenses and monitoring budget utilization.',
      tags: ['Performance Metrics', 'Tableau'],
      image: picture_5,
      slideUrl:
        'https://drive.google.com/file/d/114vQF8uhD7uUJInjC2oFNpnZ3XM8BETU/view?usp=sharing',
    },
  ];

  return (
    <section
      id="projects"
      className={`py-24 transition-colors duration-500 ${
        isDark ? 'bg-gray-800' : 'bg-[#e8e3da]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className={`text-4xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Projects
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#83562e] to-[#e0c2a8] mx-auto mb-6 rounded-full"></div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`text-xl max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Selected projects created during the RevoU Bootcamp, applying real-world data analytics to generate actionable insights.
            </motion.p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                }
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`group rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden ${
                  isDark
                    ? 'bg-gray-900 border border-gray-700'
                    : 'bg-gradient-to-br from-gray-100 via-[#e6dccf] to-gray-200'
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3
                    className={`text-xl font-bold mb-3 group-hover:text-[#d18a4c] transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {project.title}
                  </h3>

                  {/* description */}
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* render tags - stabilo style */}
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-1.5 text-xs font-medium ${tagColors[tag] || 'bg-gray-200'} ${
                          isDark ? 'text-gray-900' : 'text-gray-800'
                        }`}
                        style={{ borderRadius: "2px" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div
                    className={`flex items-center justify-between pt-4 border-t mt-4 ${
                      isDark ? 'border-gray-700' : 'border-gray-300'
                    }`}
                  >
                    <Link
                      to={`/project/${project.id}`}
                      className={`inline-flex items-center font-medium text-sm transition-colors duration-200 ${
                        isDark
                          ? 'text-[#e0b48d] hover:text-[#f0c89b]'
                          : 'text-[#51505c] hover:text-[#d18a4c]'
                      }`}
                    >
                      View Details
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                    <a
                      href={project.slideUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center font-medium text-sm transition-colors duration-200 ${
                        isDark
                          ? 'text-[#e0b48d] hover:text-[#f0c89b]'
                          : 'text-[#51505c] hover:text-[#d18a4c]'
                      }`}
                    >
                      <FileText className="mr-1 w-4 h-4" />
                      Open Slides
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
