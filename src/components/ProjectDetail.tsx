import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  ExternalLink,
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
      description:
        'Presentation about forecasting and planning Q4 sales growth to deliver +5% vs baseline.',
      image: deepp,
      slideUrl:
        'https://drive.google.com/file/d/1VijTrfXUtv95NsgfkHk4rISPyk07Rv4r/view?usp=sharing',
      duration: '3 weeks',
      team: 'Individual',
      tools: ['Python', 'Tableau'],
      details: {
        background:
          'MunchMelt, a confectionery company, aimed to increase Q4 revenue by 5%. The analysis used January-August 2022 transaction data (1,094 transactions, 177,007 boxes, 22 products across six categories) to identify revenue drivers and areas for growth.',
        method: {
          text: 'Conducted a thorough analysis using Python and Tableau:',
          points: [
            'Data Cleaning & Preparation: Corrected data types, removed duplicates, and categorized products.',
            'Data Analysis: Applied exploratory data analysis (EDA) and baseline forecasting to reveal trends, simulate scenarios, and evaluate growth levers.',
          ],
        },
        result: {
          text: 'Key insights and actions included:',
          points: [
            'Revenue Drivers: Milk products contributed 43% of revenue; White and Nut chocolates had high revenue per box.',
            'Regional Focus: Canada underperformed vs. the USA ($30.8 vs. $38.6 revenue per box)',
            'Recommendations: Promote premium products, implement value-led promotions, strengthen Canadian market strategies, and maintain pricing integrity.',
            'Impact Goal: Targeted uplift of ~270 boxes in Canada for Q4 to bridge the efficiency gap and support the 5% revenue growth objective',
          ],
        },
      },
    },
    '2': {
      id: 2,
      title: 'Customer Segmentation using K-Means',
      description:
        'Analysis about customer grouping using K-Means clustering for business insights.',
      image: phyton,
      slideUrl:
        'https://drive.google.com/file/d/1dj7tJwagF8VbmDbjXf1xJbC3-t22fEBH/view?usp=sharing',
      duration: '2 weeks',
      team: 'Individual',
      tools: ['Python'],
      details: {
        background:
          'RevoBank aimed to optimize its credit card business by understanding customer behavior and identifying high-potential segments. The analysis used cleaned user and card data over six months, focusing on transaction counts, transaction amounts, and demographics to uncover actionable insights for targeted engagement and revenue growth.',
        method: {
          text: '',
          points: [
            'Data Cleaning: Removed outliers, resulting in 1,883 entries to ensure realistic metrics.',
            'Data Analysis: Applied K-Means clustering validated with Elbow and Silhouette Score to segment customers.',
          ],
        },
        result: {
          text: '',
          points: [
            'Customer Segmentation & Insights: Identified four segments (Senior Loyalists, Dormant Young, Middle Active Spenders, High Value Seniors), highlighting growth, upselling, and retention opportunities.',
            'Actionable Recommendations: Implement targeted reactivation, upselling, and VIP retention programs to increase credit card usage and drive long-term revenue growth.',
          ],
        },
      },
    },
    '3': {
      id: 3,
      title: 'RevoGrocers Sales Performance Analysis',
      description:
        'Analysis about sales performance and key business insights.',
      image: sql,
      slideUrl:
        'https://drive.google.com/file/d/1T9NuL5tGpGhW4b9vcPsU8P4oqlE-DnX7/view?usp=sharing',
      duration: '1 week',
      team: 'Individual',
      tools: ['SQL (BigQuery)'],
      details: {
        background:
          'RevoGrocers, a multi-location grocery retailer, aimed to optimize sales and customer retention by analyzing product category performance. The analysis used transactional data from Kaggle, focusing on total revenue, unique customers, average price per unit, and repeat purchase rates to guide strategic sales decisions.',
        method: {
          text: '',
          points: [
            'Assessed variations in revenue and customer engagement across categories using key metrics.',
            'Conducted nine SQL queries to extract insights on revenue, product performance, pricing, and customer behavior.',
          ],
        },
        result: {
          text: '',
          points: [
            'Key Insights: Confections, Meat, and Poultry generated the highest revenue and repeat purchase rates, while units sold closely correlated with total revenue.',
            'Actionable Recommendations: Stock and promote bestsellers, optimize premium pricing for select categories, and implement loyalty programs to boost engagement and retention',
          ],
        },
      },
    },
    '4': {
      id: 4,
      title: 'RevoFinance: Expense & Budget Utilization Dashboard',
      description:
        'Dashboard about tracking expenses and monitoring budget utilization.',
      image: Dashboard,
      slideUrl:
        'https://drive.google.com/file/d/114vQF8uhD7uUJInjC2oFNpnZ3XM8BETU/view?usp=sharing',
      duration: '1 week',
      team: 'Individual',
      tools: ['Tableau', 'Excel'],
      details: {
        background:
          'RevoFinance, a fintech application, aimed to reduce users’ average overspending by 20% by providing clearer insights into spending patterns and budget utilization. The analysis used transaction, merchant, and budget data to track monthly spending, identify overspending trends, and inform feature improvements.',
        method: {
          text: '',
          points: [
            'Examined spending patterns, transaction sizes, and budget utilization to identify overspending areas.',
            'Data Analysis: Linked multiple datasets in Tableau to analyze spending by category, merchant, and location, uncovering trends and behavioral patterns.',
            'Data Visualization & Presentation: Created charts, graphs, and maps in Tableau to communicate insights.',
          ],
        },
        result: {
          text: '',
          points: [
            'Key Insights: Users overspend on non-essential categories (Education, Entertainment, Travel) and show seasonal peaks, while essential categories remain under budget; top merchants account for a large portion of spending.',
            'Actionable Recommendations: Implement budget alerts for near-limit spending, introduce seasonal auto-save features, and partner with top merchants for cashback or discounts to improve engagement and financial management.',
          ],
        },
      },
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
            <Target
              className={`w-12 h-12 ${isDark ? 'text-blue-500' : 'text-[#a29274]'}`}
            />
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
              Back to Projects
            </Link>

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h1
            className={`text-xl md:text-2xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}
          >
            {project.title}
          </h1>
        </motion.div>

        {/* Image + Project Details + Overview Side by Side */}
        <div className="flex flex-col lg:flex-row gap-8 items-start mb-8">
          {/* Left Column: Image + Project Details */}
          <div className="lg:w-1/2 w-full flex flex-col gap-6">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`rounded-2xl p-6 border shadow-md ${
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
                  <Clock
                    className={`w-4 h-4 mr-2 ${
                      isDark ? 'text-blue-500' : 'text-[#a29274]'
                    }`}
                  />
                  Duration: {project.duration}
                </li>
                <li className="flex items-center">
                  <Users
                    className={`w-4 h-4 mr-2 ${
                      isDark ? 'text-blue-500' : 'text-[#a29274]'
                    }`}
                  />
                  Team: {project.team}
                </li>
                <li className="flex items-start">
                  <Wrench
                    className={`w-4 h-4 mr-2 mt-0.5 ${
                      isDark ? 'text-blue-500' : 'text-[#a29274]'
                    }`}
                  />
                  <div>
                    <span className="font-medium">Tools: </span>
                    {project.tools.join(', ')}
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Right Column: Project Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`lg:w-1/2 w-full rounded-2xl p-6 border shadow-md ${
              isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-[#c1beaf]'
            }`}
          >
            <div className="flex items-center mb-5">
              <Award
                className={`w-5 h-5 mr-2 ${
                  isDark ? 'text-blue-500' : 'text-[#a29274]'
                }`}
              />
              <h3
                className={`text-base font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}
              >
                Project Overview
              </h3>
            </div>

            <div className="space-y-5">
              {[
                { title: 'Background', text: project.details.background },
                {
                  title: 'Method',
                  text: project.details.method.text,
                  points: project.details.method.points,
                },
                {
                  title: 'Result',
                  text: project.details.result.text,
                  points: project.details.result.points,
                },
              ].map((section, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-lg transition ${
                    isDark
                      ? 'bg-slate-900 hover:bg-slate-700'
                      : 'bg-[#dad8cf] hover:bg-[#c1beaf]'
                  }`}
                >
                  <h4
                    className={`font-semibold mb-1 ${
                      isDark ? 'text-blue-400' : 'text-[#a29274]'
                    }`}
                  >
                    {section.title}
                  </h4>
                  <p className={`text-sm text-gray-700 dark:text-gray-300`}>
                    {section.text}
                  </p>
                  {section.points && (
                    <ul className="list-disc list-inside mt-2 text-sm text-gray-700 dark:text-gray-300">
                      {section.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
