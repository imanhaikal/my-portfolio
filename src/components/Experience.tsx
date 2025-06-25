import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, TrendingUp, Users, Code } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Architect",
      company: "Tech Innovations Corp",
      location: "Cairo, Egypt",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading architectural decisions for enterprise-scale applications serving 10M+ users. Spearheading digital transformation initiatives and mentoring cross-functional teams.",
      achievements: [
        "Architected microservices platform reducing system latency by 60%",
        "Led team of 15+ engineers across 3 continents",
        "Implemented AI-driven solutions increasing user engagement by 45%",
        "Reduced infrastructure costs by $2M annually through optimization"
      ],
      technologies: ["React", "Node.js", "AWS", "Kubernetes", "GraphQL", "TypeScript"],
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "Lead Full Stack Developer",
      company: "Digital Solutions Ltd",
      location: "Alexandria, Egypt",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Drove technical excellence across multiple high-impact projects. Established development standards and implemented cutting-edge solutions for Fortune 500 clients.",
      achievements: [
        "Delivered 20+ enterprise applications with 99.9% uptime",
        "Established CI/CD pipelines reducing deployment time by 80%",
        "Mentored 10+ junior developers, with 90% promotion rate",
        "Won 'Innovation Award' for breakthrough mobile application"
      ],
      technologies: ["Vue.js", "Python", "Docker", "PostgreSQL", "Redis", "GCP"],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Software Development Engineer",
      company: "StartUp Accelerator",
      location: "Cairo, Egypt",
      period: "2019 - 2020",
      type: "Full-time",
      description: "Rapid prototyping and MVP development for multiple startups. Gained expertise in agile methodologies and lean development practices.",
      achievements: [
        "Built 8 MVPs from concept to production in 12 months",
        "Achieved 95% client satisfaction rating",
        "Contributed to $5M in total funding raised by client startups",
        "Mastered 10+ new technologies through hands-on projects"
      ],
      technologies: ["React Native", "Firebase", "MongoDB", "Express.js", "Socket.io"],
      color: "from-green-400 to-emerald-400"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
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
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">Professional Journey</span>
            </motion.div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="text-white">Career</span>
              <br />
              <span className="gradient-text">Milestones</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              A progressive journey through the technology landscape, marked by 
              innovation, leadership, and transformative impact across diverse industries.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-green-400 transform lg:-translate-x-1/2"></div>

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-8 lg:left-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 transform lg:-translate-x-1/2 z-10 glow-effect"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-1 bg-black rounded-full"></div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className={`w-full lg:w-5/12 ml-20 lg:ml-0 ${
                      index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="glass-effect rounded-3xl p-8 premium-shadow hover:bg-white/5 transition-all duration-300 group">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                            {exp.title}
                          </h3>
                          <h4 className="text-lg font-semibold text-blue-400 mt-1">
                            {exp.company}
                          </h4>
                        </div>
                        <div className="flex items-center gap-4 mt-4 sm:mt-0">
                          <div className="flex items-center gap-2 text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm font-medium">{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Location and Type */}
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-400">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        <div className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full">
                          <span className="text-sm font-medium text-blue-300">{exp.type}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="font-semibold text-white mb-4 flex items-center gap-2">
                          <Award className="w-5 h-5 text-yellow-400" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              className="flex items-start gap-3 text-gray-300"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: achIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="leading-relaxed">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="font-semibold text-white mb-4 flex items-center gap-2">
                          <Code className="w-5 h-5 text-green-400" />
                          Technologies Used
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              className={`px-3 py-1 bg-gradient-to-r ${exp.color} bg-opacity-20 rounded-full text-sm font-medium text-white`}
                              whileHover={{ scale: 1.1 }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.05 }}
                              viewport={{ once: true }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;