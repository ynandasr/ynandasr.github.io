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
import dess from '../assets/dess.jpeg';
import fipp from '../assets/fipp.jpeg';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { isDark } = useTheme();

  const projects = {
    '1': {
      id: 1,
      title: 'RevoFin Loan Risk Analysis (Understanding Cohort Behavior and Key Risk Indicators)',
      description:
        'Cohort and borrower-level analysis using TKB30 to detect debt-related delinquency risk patterns.',
      image: fipp,
      slideUrl:
        'https://drive.google.com/file/d/1GF1Go5pYCAnrWlxmQ3eFqrP8y85ZNOYt/view?usp=sharing',
      duration: '10 days',
      team: 'Individual',
      tools: ['SQL', 'Tableau'],
      details: {
        background:
          'RevoFin conducted a loan portfolio review to assess portfolio health using TKB30 as a key risk indicator. With $2.801B in Outstanding Loans (OS) and ENR closely aligned, the analysis aimed to identify high-risk cohorts and understand borrower characteristics driving delinquency, particularly related to debt exposure.',
        method: {
          text: '',
          points: [
            'Performed cohort-based analysis by segmenting loans into monthly vintages and calculating OS, ENR, and TKB30. An in-depth profiling was conducted on the lowest-performing cohort (April 2014), examining borrower income, home ownership, loan purpose, and interest rates to identify risk drivers.',
          ],
        },
        result: {
          text: 'Key insights and actions included:',
          points: [
            'Anomaly Detection: April 2014 recorded the lowest TKB30 (~93%), driven by a higher share of loans overdue >30 days.',
            'Borrower Profile: 60% of borrowers were still paying mortgages, with only 6.8% fully owning homes, increasing debt burden and delinquency risk.',
            'Recommendations: Strengthen underwriting for debt-related loans (e.g., debt consolidation and refinancing) and enhance monitoring of highly leveraged borrowers.',
            'Goal: Reduce future delinquency risk by improving borrower screening and early risk detection for high-debt segments.',
          ],
        },
      },
    },
    '2': {
      id: 2,
      title: 'App Funnel Drop-off Analysis & Cluster Conversion Optimization',
      description:
        'Funnel analysis to identify user drop-offs and friction points, followed by customer segmentation for targeted conversion improvements.',
      image: dess,
      slideUrl:
        'https://drive.google.com/file/d/1wmSz3bzxiYcGQfkuqxsL_FJ09agnH2Cv/view?usp=sharing',
      duration: '12 days',
      team: 'Individual',
      tools: ['Python, Tableau'],
      details: {
        background:
          'QuickU, a fast-growing q-commerce platform, faced a low overall conversion rate of 13.8% due to significant user drop-offs during checkout and payment stages. The analysis aimed to identify key friction points and user behaviors to improve conversion performance in the upcoming year.',
        method: {
          text: '',
          points: [
            'Funnel Evaluation: Assessed drop-off rates across key stages to identify critical bottlenecks.',
            'User Segmentation: Applied behavior-based clustering to group users with similar purchase patterns and friction points.',
          ],
        },
        result: {
          text: '',
          points: [
            'Funnel Bottlenecks: Checkout abandonment (65.0%) and payment drop-off (31.9%) emerged as the main conversion barriers.',
            'User Segments: Identified three clusters, High-Value Users with payment friction, Mid-Value Users with moderate drop-offs, and Young, High-Friction Users with the lowest completion rate.',
            'Recommendations: Improve and expand payment options to reduce checkout and payment friction, prioritizing solutions tailored to High-Value and Young, High-Friction users.',
          ],
        },
      },
    },
    '3': {
      id: 3,
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
          text: '',
          points: [
            'Revenue Drivers: Milk products contributed 43% of revenue; White and Nut chocolates had high revenue per box.',
            'Regional Focus: Canada underperformed vs. the USA ($30.8 vs. $38.6 revenue per box)',
            'Recommendations: Promote premium products, implement value-led promotions, strengthen Canadian market strategies, and maintain pricing integrity.',
            'Goal: Targeted uplift of ~270 boxes in Canada for Q4 to bridge the efficiency gap and support the 5% revenue growth objective',
          ],
        },
      },
    },
    '4': {
      id: 4,
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
            'Customer Segmentation & Insights: Identified four segments (Senior Loyalists, Dormant Young, Middle Active Spenders, High Value Seniors), highlighting growth, upselling, and retention opportunities.',
            'Actionable Recommendations: Implement targeted reactivation, upselling, and VIP retention programs to increase credit card usage and drive long-term revenue growth.',
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
