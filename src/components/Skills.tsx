import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Mastery",
      icon: "🎨",
      skills: [
        { name: "React/Next.js", level: 98, color: "from-blue-400 to-cyan-400" },
        { name: "TypeScript", level: 95, color: "from-blue-500 to-blue-600" },
        { name: "Vue.js/Nuxt", level: 90, color: "from-green-400 to-emerald-500" },
        { name: "Tailwind CSS", level: 96, color: "from-cyan-400 to-teal-500" },
        { name: "Three.js/WebGL", level: 85, color: "from-purple-400 to-pink-500" }
      ]
    },
    {
      title: "Backend Architecture",
      icon: "⚡",
      skills: [
        { name: "Node.js/Express", level: 94, color: "from-green-500 to-emerald-600" },
        { name: "Python/Django", level: 88, color: "from-yellow-400 to-orange-500" },
        { name: "GraphQL/REST", level: 92, color: "from-pink-400 to-rose-500" },
        { name: "Microservices", level: 90, color: "from-indigo-400 to-purple-500" },
        { name: "Serverless", level: 87, color: "from-orange-400 to-red-500" }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        { name: "AWS/Azure", level: 91, color: "from-orange-400 to-yellow-500" },
        { name: "Docker/K8s", level: 89, color: "from-blue-400 to-indigo-500" },
        { name: "CI/CD Pipelines", level: 93, color: "from-green-400 to-blue-500" },
        { name: "Terraform", level: 85, color: "from-purple-400 to-indigo-500" },
        { name: "Monitoring", level: 88, color: "from-red-400 to-pink-500" }
      ]
    },
    {
      title: "Data & AI",
      icon: "🧠",
      skills: [
        { name: "PostgreSQL/MongoDB", level: 92, color: "from-blue-500 to-purple-600" },
        { name: "Redis/ElasticSearch", level: 87, color: "from-red-400 to-orange-500" },
        { name: "Machine Learning", level: 83, color: "from-green-400 to-cyan-500" },
        { name: "Data Analytics", level: 86, color: "from-purple-400 to-pink-500" },
        { name: "AI Integration", level: 89, color: "from-cyan-400 to-blue-500" }
      ]
    }
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
              <span className="text-sm font-medium text-gray-300">Technical Expertise</span>
            </motion.div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="text-white">Mastery in</span>
              <br />
              <span className="gradient-text">Every Stack</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              A comprehensive arsenal of cutting-edge technologies and frameworks, 
              refined through years of hands-on experience and continuous learning.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={itemVariants}
                className="glass-effect rounded-3xl p-8 premium-shadow hover:bg-white/5 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="text-4xl">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      className="group/skill"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-gray-200 group-hover/skill:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm font-mono text-gray-400 group-hover/skill:text-gray-300 transition-colors duration-300">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                          variants={skillVariants}
                          custom={skill.level}
                        />
                        <motion.div
                          className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full opacity-50 blur-sm`}
                          variants={skillVariants}
                          custom={skill.level}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills Tags */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <h4 className="text-xl font-semibold text-gray-300 mb-8">Additional Technologies</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'React Native', 'Flutter', 'Electron', 'WebAssembly', 'Blockchain',
                'IoT', 'AR/VR', 'Progressive Web Apps', 'JAMstack', 'Headless CMS',
                'Figma', 'Adobe Creative Suite', 'Agile/Scrum', 'Team Leadership'
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  className="glass-effect rounded-full px-4 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;