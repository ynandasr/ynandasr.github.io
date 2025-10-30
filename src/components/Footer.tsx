import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={`py-8 transition-colors duration-500 ${
        isDark ? 'bg-black text-white' : 'bg-gray-900 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-3">Get In Touch</h3>
            <div className="space-y-3">
              <motion.div whileHover={{ x: 3 }} className="flex items-center">
                <Mail className="w-5 h-5 text-[#d18a4c] mr-2" />
                <span>ynandasari@gmail.com</span>
              </motion.div>
              <motion.div whileHover={{ x: 3 }} className="flex items-center">
                <MapPin className="w-5 h-5 text-[#d18a4c] mr-2" />
                <span>Bogor, West Java</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            
          >
            <h3 className="text-xl font-bold mb-3">Connect With Me</h3>
            <div className="flex space-x-3">
              <motion.a
                href="https://www.linkedin.com/in/yulianins/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.1,
                  y: -3,
                  boxShadow: '0px 0px 12px rgba(209,138,76,0.7)',
                }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-gray-800 rounded-full transition-colors duration-300 hover:bg-[#0A66C2]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="https://www.instagram.com/ynandasr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.1,
                  y: -3,
                  boxShadow: '0px 0px 12px rgba(209,138,76,0.7)',
                }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-gray-800 rounded-full transition duration-300 hover:bg-gradient-to-tr hover:from-pink-500 hover:via-red-500 hover:to-yellow-500"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </motion.a>
            </div>
            <p className="mt-3 text-gray-400 text-sm">
              Open to new opportunities and exciting collaborations. Let's build something amazing together!
            </p>
          </motion.div>
        </motion.div>

        {/* Tagline & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-[#d18a4c] font-semibold tracking-wide">
          </p>
          <p className="text-gray-400 mt-12 text-sm">© 2025 Yuliani. All rights reserved.</p>

          {/* Back to Top Button */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-3 px-3 py-1 bg-[#d18a4c] text-white text-xs rounded-full shadow-md"
          >
            Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
