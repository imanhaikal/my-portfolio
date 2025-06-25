import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Star } from 'lucide-react';

const About = () => {
  const education = [
    {
      icon: GraduationCap,
      title: "Bachelor of Computer Science (Information Systems)",
      institution: "University of Malaya",
      period: "2023 – Present",
      details: "Latest GPA: 3.81",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: GraduationCap,
      title: "Foundation of Physical Sciences",
      institution: "University of Malaya",
      period: "2022 – 2023",
      details: "CGPA: 3.67",
      color: "from-purple-400 to-pink-400"
    },
    {
      icon: GraduationCap,
      title: "SPM",
      institution: "MRSM Parit",
      period: "2017 – 2022",
      details: "Result: 8A 1B",
      color: "from-green-400 to-emerald-400"
    },
  ];

  const activities = [
    {
      icon: Star,
      title: "Head of Multimedia and Publicity",
      organization: "Festival Seni UM (FESENI)",
      period: "2024",
      color: "from-orange-400 to-red-400"
    },
    {
      icon: Star,
      title: "Appointed College Action Committee (Multimedia and Design)",
      organization: "Jawatankuasa Tindakan Kolej Dilantik",
      period: "2024 - 2025",
      color: "from-yellow-400 to-amber-400"
    },
    {
      icon: Star,
      title: "1st Place (Dikir Barat)",
      organization: "Festival Seni UM (FESENI)",
      period: "2025",
      color: "from-teal-400 to-cyan-500"
    },
     {
      icon: Star,
      title: "Committee (Contest Protocol)",
      organization: "Programming League National (PLN)",
      period: "2025",
      color: "from-indigo-400 to-blue-500"
    }
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
              <span className="gradient-text">My</span>
              <br />
              <span className="text-white">Journey</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Here is a summary of my academic and extra-curricular journey so far.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Education Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-8">Education</h3>
              <div className="space-y-6">
                {education.map((item, index) => (
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
                        <p className="text-gray-400 leading-relaxed font-medium">
                          {item.institution}
                        </p>
                         <p className="text-gray-400 leading-relaxed text-sm">
                          {item.period} - {item.details}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Activities Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-8">Extra-Curricular Activities</h3>
              <div className="space-y-6">
                {activities.map((item, index) => (
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
                        <p className="text-gray-400 leading-relaxed font-medium">
                          {item.organization}
                        </p>
                         <p className="text-gray-400 leading-relaxed text-sm">
                          {item.period}
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