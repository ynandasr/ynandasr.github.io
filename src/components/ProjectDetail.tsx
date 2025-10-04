import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Award,
  Target,
  Wrench,
  Clock,
  Users,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import deepp from '../assets/deepp.jpeg';
import phyton from '../assets/phyton.jpeg';
import sql from '../assets/sql.jpeg';
import Dashboard from '../assets/Dashboard.png';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isDark } = useTheme();

  const projects = {
    '1': {
      id: 1,
      title: 'MunchMelt Q4 Growth Plan - Delivering +5% vs Baseline',
      description: 'Presentation about forecasting and planning Q4 sales growth to deliver +5% vs baseline.',
      fullDescription:
        'MunchMelt’s Q4 Growth Plan targets a +5% revenue uplift by strengthening premium product sales (White & Eclairs), closing Canada’s revenue efficiency gap to US levels, and applying value-led promotions while maintaining pricing discipline.',
      image: deepp,
      slideUrl: 'https://drive.google.com/file/d/1VijTrfXUtv95NsgfkHk4rISPyk07Rv4r/view?usp=sharing',
      duration: '3 weeks',
      team: 'Individual',
      tools: ['Python', 'Tableau'],
      outcomes: [
        'Clean and prepare real-world transactional datasets for analysis',
        'Perform exploratory data analysis to identify revenue drivers and gaps',
        'Build baseline forecasts and simulate growth scenarios',
        'Translate insights into actionable business strategies and clear presentations',
      ],
    },
    '2': {
      id: 2,
      title: 'Customer Segmentation using K-Means',
      description: 'Analysis about customer grouping using K-Means clustering for business insights.',
      fullDescription:
        'RevoBank Credit Card Segmentation: Unlock growth by reactivating young dormant users, upselling active spenders, and retaining VIP seniors through targeted strategies.',
      image: phyton,
      slideUrl: 'https://drive.google.com/file/d/1dj7tJwagF8VbmDbjXf1xJbC3-t22fEBH/view?usp=sharing',
      duration: '2 weeks',
      team: 'Individual',
      tools: ['Python'],
      outcomes: [
        'Apply clustering techniques (K-Means) to segment customers effectively',
        'Interpret transactional data to identify customer behaviors',
        'Translate segmentation results into targeted growth and retention strategies',
        'Communicate insights through clear visualizations and stakeholder-focused presentations',
      ],
    },
    '3': {
      id: 3,
      title: 'RevoGrocers Sales Performance Analysis',
      description: 'Analysis about sales performance and key business insights.',
      fullDescription:
        'RevoGrocers Category Sales Analysis: Drive growth by prioritizing bestsellers, optimizing premium pricing, and boosting loyalty in high-repeat categories.',
      image: sql,
      slideUrl: 'https://drive.google.com/file/d/1T9NuL5tGpGhW4b9vcPsU8P4oqlE-DnX7/view?usp=sharing',
      duration: '1 week',
      team: 'Individual',
      tools: ['SQL', 'BigQuery'],
      outcomes: [
        'Apply SQL to clean, transform, and analyze large transactional datasets',
        'Identify revenue drivers and category performance through structured queries',
        'Translate data insights into sales, pricing, and customer retention strategies',
      ],
    },
    '4': {
      id: 4,
      title: 'RevoFinance: Expense & Budget Utilization Dashboard',
      description: 'Dashboard about tracking expenses and monitoring budget utilization.',
      fullDescription:
        'RevoFinance Expense & Budget Analysis: Empowering smarter spending through real-time tracking, budget control, and actionable financial insights',
      image: Dashboard,
      slideUrl: 'https://drive.google.com/file/d/114vQF8uhD7uUJInjC2oFNpnZ3XM8BETU/view?usp=sharing',
      duration: '1 week',
      team: 'Individual',
      tools: ['Tableau', 'Excel'],
      outcomes: [
        'Clean and prepare financial data across multiple sources for dashboard analysis',
        'Build interactive visualizations to track spending, budget utilization, and trends',
        'Identify overspending patterns and merchant dependencies through data-driven insights',
      ],
    },
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center ${
          isDark ? 'bg-slate-900 text-white' : 'bg-[#dad8cf] text-gray-900'
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-slate-800 flex items-center justify-center">
            <Target className={`w-12 h-12 ${isDark ? 'text-blue-500' : 'text-[#a29274]'}`} />
          </div>
          <h1 className="text-xl font-bold mb-4">Project Not Found</h1>
          <Link
            to="/"
            className={`inline-flex items-center px-5 py-2.5 rounded-lg transition-colors shadow-md font-medium text-sm ${
              isDark
                ? 'bg-blue-600 text-white hover:bg-blue-500'
                : 'bg-[#a29274] text-white hover:bg-[#8c7a5f]'
            }`}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to Portfolio
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? 'bg-slate-900' : 'bg-[#dad8cf]'
      }`}
    >
      {/* Navbar */}
      <nav
        className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-500 ${
          isDark
            ? 'bg-slate-900/90 border-slate-700'
            : 'bg-white/80 border-[#c1beaf]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Back to Assignment */}
            <Link
              to="/"
              onClick={() => {
                setTimeout(() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className={`inline-flex items-center font-semibold text-sm transition-all duration-200 ${
                isDark
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-[#a29274] hover:text-[#8c7a5f]'
              }`}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Assignment
            </Link>

            {/* Open Slides */}
            <a
              href={project.slideUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-5 py-2 rounded-lg transition-all duration-200 shadow-md font-medium text-sm ${
                isDark
                  ? 'bg-blue-600 text-white hover:bg-blue-500'
                  : 'bg-[#a29274] text-white hover:bg-[#8c7a5f]'
              }`}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Open Slides
            </a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h1
            className={`text-xl md:text-2xl font-bold mb-3 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {project.title}
          </h1>
          <p
            className={`text-sm md:text-base max-w-8xl mx-auto leading-relaxed text-justify ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            {project.fullDescription}
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-14"
        >
          <div
            className={`max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-xl ${
              isDark ? 'bg-slate-800' : 'bg-white'
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Details + Outcomes */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Details */}
          <div
            className={`lg:col-span-1 rounded-2xl p-6 border shadow-md ${
              isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#c1beaf]'
            }`}
          >
            <h3
              className={`text-base font-bold mb-5 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}
            >
              Project Details
            </h3>
            <ul
              className={`space-y-3 text-sm ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              <li className="flex items-center">
                <Clock className={`w-4 h-4 mr-2 ${isDark ? 'text-blue-500' : 'text-[#a29274]'}`} />
                Duration: {project.duration}
              </li>
              <li className="flex items-center">
                <Users className={`w-4 h-4 mr-2 ${isDark ? 'text-blue-500' : 'text-[#a29274]'}`} />
                Team: {project.team}
              </li>
              <li className="flex items-start">
                <Wrench className={`w-4 h-4 mr-2 mt-0.5 ${isDark ? 'text-blue-500' : 'text-[#a29274]'}`} />
                <div>
                  <span className="font-medium">Tools: </span>
                  {project.tools.join(', ')}
                </div>
              </li>
            </ul>
          </div>

          {/* Outcomes */}
          <div
            className={`lg:col-span-2 rounded-2xl p-6 border shadow-md ${
              isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#c1beaf]'
            }`}
          >
            <div className="flex items-center mb-5">
              <Award className={`w-5 h-5 mr-2 ${isDark ? 'text-blue-500' : 'text-[#a29274]'}`} />
              <h3
                className={`text-base font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Learning Outcomes
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              {project.outcomes.map((outcome, i) => (
                <div
                  key={i}
                  className={`flex items-start p-3 rounded-lg transition ${
                    isDark
                      ? 'bg-slate-900 hover:bg-slate-700'
                      : 'bg-[#dad8cf] hover:bg-[#c1beaf]'
                  }`}
                >
                  <CheckCircle className={`w-4 h-4 mr-2 mt-0.5 ${isDark ? 'text-blue-500' : 'text-[#a29274]'}`} />
                  <span
                    className={`text-xs md:text-sm ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
