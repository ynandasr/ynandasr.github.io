import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import profile from "../public/profile_2.jpg";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

// Hook typing loop
const useLoopingTyping = (text: string, speed: number = 150, pause: number = 1000) => {
  const [displayedText, setDisplayedText] = useState(text[0]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(prev => prev + 1);
        if (index + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), pause);
        }
      } else {
        setDisplayedText(text.slice(0, Math.max(index - 1, 1)));
        setIndex(prev => Math.max(prev - 1, 1));
        if (index <= 1) {
          setIsDeleting(false);
          setIndex(1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, index, isDeleting, speed, pause]);

  return displayedText;
};

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isDark } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const name = "Hi, I'm Yuliani Nanda Sari";
  const typedName = useLoopingTyping(name, 150, 1200);

  return (
    <section
      id="home"
      className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
        isDark
          ? 'bg-gradient-to-br from-gray-900 via-[#2e2b26] to-gray-800'
          : 'bg-[#958464]'
      }`}
    >
      {/* Parallax Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
            top: '10%',
            left: '10%',
          }}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute w-64 h-64 bg-white/10 rounded-full blur-2xl"
          style={{
            transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`,
            top: '60%',
            right: '10%',
          }}
        />
        <motion.div
          animate={{ x: [0, 25, 0], y: [0, -25, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute w-48 h-48 bg-amber-300/30 rounded-full blur-xl"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            bottom: '20%',
            left: '50%',
          }}
        />
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/30 rotate-45"
        />
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-6 h-6 border-2 border-white/40 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-amber-400/20 rotate-12"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-2/3 left-1/6 w-3 h-3 bg-white/50 rounded-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full max-w-5xl gap-10">
          {/* Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-start w-full lg:w-1/2"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-amber-700 p-1"
              />
              <img
                src={profile}
                alt="Yuliani Nanda Sari"
                className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-white shadow-2xl"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-[#c4c1b3] rounded-full shadow-lg"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -left-2 w-6 h-6 bg-white rounded-full shadow-lg"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-tight font-sueEllen relative inline-block whitespace-nowrap min-w-[500px]"
            >
              {typedName}
              <span className="animate-blink">|</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="font-dongle text-3xl sm:text-4xl lg:text-4xl text-gray-200 mb-4"
            >
              E-Commerce Operations Specialist & Aspiring Data Analyst
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="font-dongle text-xl sm:text-2xl lg:text-2xl text-gray-300 max-w-2xl mx-auto"
            >
              Blending hands-on operations experience with growing analytical skills to transform data into actionable insights.
            </motion.p>

            {/* Get in Touch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-6"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 bg-gradient-to-r from-[#9d6738] to-[#c49a6c] hover:from-[#83562e] hover:to-[#e0c2a8] text-white text-2xl font-dongle rounded-full shadow-xl transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
