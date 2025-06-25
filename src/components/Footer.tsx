import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code2, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Logo and Brand */}
          <motion.div
            className="flex items-center justify-center gap-3 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <Code2 className="w-10 h-10 text-blue-400 glow-effect" />
              <div className="absolute inset-0 bg-blue-400 blur-lg opacity-30 animate-pulse"></div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text">Iman Haikal</div>
              <div className="text-sm text-gray-400 font-medium">Computer Science Student</div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            A Computer Science student at the University of Malaya. Majoring in Information Systems, and seeking 
            experiences and knowledge to expand my horizon.
          </motion.p>

          {/* Divider */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Copyright and Credits */}
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-gray-400">
              <span>© {new Date().getFullYear()} Iman Haikal. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-2 text-gray-400">
              <span>Crafted with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>and cutting-edge technology</span>
            </div>
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-4 glass-effect rounded-full hover:bg-white/10 transition-all duration-300 group z-50"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <ArrowUp className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;