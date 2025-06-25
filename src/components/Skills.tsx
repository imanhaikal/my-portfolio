import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Cpu, GitMerge, Combine, Wind, Brain, MessageSquare } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    { name: "Java", icon: <Code size={40} className="mx-auto" /> },
    { name: "C++", icon: <Code size={40} className="mx-auto" /> },
    { name: "Git", icon: <GitMerge size={40} className="mx-auto" /> },
    { name: "HTML & CSS", icon: <Combine size={40} className="mx-auto" /> },
    { name: "Microsoft Office", icon: <Cpu size={40} className="mx-auto" /> },
  ];

  const softSkills = [
    { name: "Teamwork", icon: <Users size={40} className="mx-auto" /> },
    { name: "Work Under Pressure", icon: <Wind size={40} className="mx-auto" /> },
    { name: "Adaptability", icon: <Brain size={40} className="mx-auto" /> },
    { name: "Fast Learner", icon: <Brain size={40} className="mx-auto" /> },
    { name: "Communication", icon: <MessageSquare size={40} className="mx-auto" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
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
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">My Skills</span>
            </motion.div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="text-white">Technical &</span>
              <br />
              <span className="gradient-text">Soft Skills</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              A collection of my technical abilities and soft skills that I have developed.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white text-center mb-12">Technical Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-2xl p-8 text-center premium-shadow hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-6xl mb-4 text-purple-400 group-hover:text-white transition-all duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-200">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Soft Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-2xl p-8 text-center premium-shadow hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-6xl mb-4 text-blue-400 group-hover:text-white transition-all duration-300">
                     {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-200">{skill.name}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;