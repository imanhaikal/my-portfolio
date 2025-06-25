import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Project Alpha",
      description: "A brief description of Project Alpha, what it does, and the problems it solves. This should be a compelling summary to catch the visitor's interest.",
      image: "https://via.placeholder.com/800x600.png?text=Project+Alpha",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      liveLink: "#",
      githubLink: "#",
      category: "Web App",
      color: "from-blue-400 to-cyan-400",
    },
    {
      title: "Project Beta",
      description: "A brief description of Project Beta. This project showcases skills in another area, perhaps mobile development or data science. It is important to show variety.",
      image: "https://via.placeholder.com/800x600.png?text=Project+Beta",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
      liveLink: "#",
      githubLink: "#",
      category: "Backend",
      color: "from-purple-400 to-pink-400",
    },
    {
      title: "Project Gamma",
      description: "A brief description of Project Gamma. This could be a smaller, more focused project, like a command-line tool or a library.",
      image: "https://via.placeholder.com/800x600.png?text=Project+Gamma",
      technologies: ["C++", "CMake"],
      liveLink: null,
      githubLink: "#",
      category: "Tooling",
      color: "from-green-400 to-emerald-400",
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
    <section id="projects" className="py-32 relative overflow-hidden">
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
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">My Work</span>
            </motion.div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="text-white">Personal</span>
              <br />
              <span className="gradient-text">Projects</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              A selection of my personal projects. I'm always looking to learn and build new things.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group glass-effect rounded-3xl overflow-hidden premium-shadow hover:bg-white/5 transition-all duration-500 flex flex-col"
                whileHover={{ scale: 1.02, y: -10 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-xs font-semibold text-white`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                     <h5 className="font-semibold text-white mb-3 text-sm">Technologies Used</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-800 rounded-md text-xs font-medium text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    {project.liveLink && (
                      <motion.a 
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-white text-center hover:from-blue-500 hover:to-purple-500 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                    <motion.a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 glass-effect rounded-lg font-medium text-white text-center hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-sm border border-white/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;