import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Github, Linkedin, ArrowDown, Sparkles, Target } from 'lucide-react';
import { Tilt } from 'react-tilt';
import { TypeAnimation } from 'react-type-animation';
import useIsMobile from '../hooks/useIsMobile';

const Hero = () => {
  const isMobile = useIsMobile();
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Iman_Haikal_Resume.pdf';
    link.click();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Hero Background Effects */}
      {!isMobile && (
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />
        </div>
      )}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row items-center gap-16"
        >
          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0 relative"
          >
            <Tilt options={{ max: 25, scale: 1.05, speed: 400, glare: true, 'max-glare': 0.5 }}>
              <div className="relative">
                {/* Animated rings */}
                {!isMobile && (
                  <>
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-blue-400/30"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      style={{ width: '120%', height: '120%', left: '-10%', top: '-10%' }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-purple-400/30"
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      style={{ width: '140%', height: '140%', left: '-20%', top: '-20%' }}
                    />
                  </>
                )}
                
                {/* Main image container */}
                <motion.div
                  className="w-80 h-80 rounded-full overflow-hidden relative luxury-gradient p-1 glow-effect"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
                    <img 
                      src="/img/iman.webp"
                      alt="Iman Haikal"
                      className="w-full h-full object-cover"
                      width="320"
                      height="320"
                    />
                  </div>
                </motion.div>

                {/* Floating elements */}
                {!isMobile && (
                  <motion.div
                    className="absolute -top-4 -right-4 glass-effect rounded-full p-3"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                )}
              </div>
            </Tilt>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={itemVariants}
            className="flex-1 text-center lg:text-left max-w-3xl"
          >
            {/* Greeting */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">Available for new opportunities</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-6xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="block text-white">Iman</span>
              <span className="block gradient-text text-glow">Haikal</span>
            </motion.h1>

            {/* Subtitle with typing effect */}
            <motion.h2
              variants={itemVariants}
              className="text-2xl lg:text-4xl text-gray-300 mb-8 font-light"
            >
              <TypeAnimation
                sequence={[
                  'Computer Science Student',
                  2000,
                  'Information Systems Major',
                  2000,
                  'Aspiring Software Developer',
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="gradient-text font-medium"
              />
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 mb-12 leading-relaxed max-w-2xl"
            >
              A Computer Science student at the University of Malaya. Majoring in Information Systems, and seeking 
              experiences and knowledge to expand my horizon.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12"
            >
              {[
                { icon: Mail, text: 'imanhaikal04@gmail.com', href: 'mailto:imanhaikal04@gmail.com' },
                { icon: Phone, text: '01130814401', href: 'tel:01130814401' },
                { icon: MapPin, text: 'Kajang, Selangor', href: '#' },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 glass-effect rounded-full px-4 py-2 hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <item.icon className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12"
            >
              <motion.button
                onClick={handleDownloadResume}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white overflow-hidden shadow-lg shadow-blue-500/30"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-3">
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </div>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
              </motion.button>

              <motion.button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 glass-effect rounded-full font-semibold text-white border border-white/20 hover:border-white/40 transition-all duration-300 shadow-lg shadow-white/10"
                whileHover={{ scale: 1.05, y: -3, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="group-hover:gradient-text transition-all duration-300">Let's Connect</span>
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-4"
            >
              {[
                { icon: Github, href: 'https://github.com/imanhaikal', label: 'GitHub'},
                { icon: Linkedin, href: 'https://www.linkedin.com/in/iman-haikal-mokhzamir-aznan-2934042a5/', label: 'LinkedIn' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="group p-4 glass-effect rounded-full hover:bg-white/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;