import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Globe, Award, Users, Zap, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Mastery",
      description: "Expert-level proficiency in modern web technologies, cloud architecture, and scalable system design",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: Database,
      title: "Data Architecture",
      description: "Advanced database design, optimization, and big data solutions for enterprise-scale applications",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: Smartphone,
      title: "Mobile Innovation",
      description: "Cross-platform mobile development with cutting-edge frameworks and native performance",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "Leading digital transformation initiatives and modernizing legacy systems for Fortune 500 companies",
      color: "from-orange-400 to-red-400"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Delivered", icon: Target },
    { number: "5+", label: "Years Experience", icon: Award },
    { number: "20+", label: "Technologies Mastered", icon: Zap },
    { number: "100%", label: "Client Satisfaction", icon: Users },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">About Me</span>
            </motion.div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="gradient-text">Crafting Digital</span>
              <br />
              <span className="text-white">Excellence</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              I'm a visionary software architect with an unwavering passion for creating 
              transformative digital experiences. My expertise spans the entire technology 
              spectrum, from elegant frontend interfaces to robust backend systems.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="glass-effect rounded-2xl p-8 premium-shadow group-hover:bg-white/10 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-400">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-8">My Journey</h3>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  My journey in technology began with a simple fascination for how digital 
                  systems could solve real-world problems. This curiosity evolved into a 
                  deep expertise in crafting scalable, innovative solutions that drive 
                  business transformation.
                </p>
                <p className="text-lg">
                  Throughout my career, I've had the privilege of working with industry 
                  leaders, architecting systems that serve millions of users, and mentoring 
                  the next generation of developers. Every project is an opportunity to 
                  push the boundaries of what's possible.
                </p>
                <p className="text-lg">
                  I believe in the power of clean code, elegant architecture, and 
                  user-centric design. My approach combines technical excellence with 
                  strategic thinking, ensuring that every solution not only works 
                  flawlessly but also delivers exceptional business value.
                </p>
              </div>
            </motion.div>

            {/* Highlights Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-8">Core Expertise</h3>
              <div className="space-y-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    className="group glass-effect rounded-2xl p-6 hover:bg-white/5 transition-all duration-300 cursor-pointer"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${item.color} group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;