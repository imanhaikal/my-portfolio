import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Star, Users, TrendingUp, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered E-Commerce Platform",
      description: "Revolutionary e-commerce platform with AI-driven personalization, real-time analytics, and advanced recommendation engine serving 2M+ users globally.",
      image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Node.js", "TensorFlow", "AWS", "GraphQL", "Redis"],
      features: [
        "AI-powered product recommendations",
        "Real-time inventory management", 
        "Advanced analytics dashboard",
        "Multi-currency payment processing"
      ],
      metrics: {
        users: "2M+",
        performance: "99.9%",
        growth: "+150%"
      },
      liveLink: "#",
      githubLink: "#",
      category: "E-Commerce",
      color: "from-blue-400 to-cyan-400",
      featured: true
    },
    {
      title: "Enterprise Collaboration Suite",
      description: "Comprehensive collaboration platform with real-time communication, project management, and advanced security features for Fortune 500 companies.",
      image: "https://images.pexels.com/photos/3153201/pexels-photo-3153201.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Vue.js", "Python", "WebRTC", "Kubernetes", "PostgreSQL"],
      features: [
        "Real-time video conferencing",
        "Advanced project tracking",
        "Enterprise-grade security",
        "Custom workflow automation"
      ],
      metrics: {
        users: "500K+",
        performance: "99.8%",
        growth: "+200%"
      },
      liveLink: "#",
      githubLink: "#",
      category: "Enterprise",
      color: "from-purple-400 to-pink-400",
      featured: true
    },
    {
      title: "Smart City IoT Dashboard",
      description: "Intelligent city management system processing real-time data from 10,000+ IoT sensors for traffic, energy, and environmental monitoring.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Python", "InfluxDB", "Docker", "MQTT", "D3.js"],
      features: [
        "Real-time sensor monitoring",
        "Predictive analytics",
        "Interactive data visualization",
        "Automated alert system"
      ],
      metrics: {
        users: "50K+",
        performance: "99.7%",
        growth: "+300%"
      },
      liveLink: "#",
      githubLink: "#",
      category: "IoT",
      color: "from-green-400 to-emerald-400",
      featured: true
    },
    {
      title: "Blockchain DeFi Protocol",
      description: "Decentralized finance protocol with automated market making, yield farming, and advanced tokenomics managing $100M+ in total value locked.",
      image: "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Solidity", "React", "Web3.js", "Hardhat", "IPFS"],
      features: [
        "Automated market making",
        "Yield farming protocols",
        "Cross-chain compatibility",
        "Advanced tokenomics"
      ],
      metrics: {
        users: "100K+",
        performance: "99.9%",
        growth: "+400%"
      },
      liveLink: "#",
      githubLink: "#",
      category: "Blockchain",
      color: "from-orange-400 to-red-400",
      featured: false
    },
    {
      title: "Healthcare Analytics Platform",
      description: "HIPAA-compliant healthcare analytics platform providing real-time insights and predictive modeling for medical institutions.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Angular", "Django", "TensorFlow", "PostgreSQL", "Docker"],
      features: [
        "HIPAA-compliant architecture",
        "Predictive health modeling",
        "Real-time patient monitoring",
        "Advanced reporting system"
      ],
      metrics: {
        users: "25K+",
        performance: "99.9%",
        growth: "+180%"
      },
      liveLink: "#",
      githubLink: "#",
      category: "Healthcare",
      color: "from-teal-400 to-blue-400",
      featured: false
    },
    {
      title: "AR/VR Training Simulator",
      description: "Immersive training platform using AR/VR technology for industrial safety training with haptic feedback and real-time assessment.",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Unity", "C#", "WebXR", "Three.js", "WebGL"],
      features: [
        "Immersive VR training modules",
        "Real-time performance tracking",
        "Haptic feedback integration",
        "Multi-platform compatibility"
      ],
      metrics: {
        users: "15K+",
        performance: "99.5%",
        growth: "+250%"
      },
      liveLink: "#",
      githubLink: "#",
      category: "AR/VR",
      color: "from-indigo-400 to-purple-400",
      featured: false
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

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
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
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-300">Featured Work</span>
            </motion.div>
            
            <h2 className="text-5xl lg:text-7xl font-bold mb-8">
              <span className="text-white">Portfolio</span>
              <br />
              <span className="gradient-text">Showcase</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              A curated selection of transformative projects that demonstrate 
              technical excellence, innovation, and real-world impact across diverse industries.
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="group glass-effect rounded-3xl overflow-hidden premium-shadow hover:bg-white/5 transition-all duration-500"
                  whileHover={{ scale: 1.02, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-xs font-semibold text-white`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Featured Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1 glass-effect rounded-full px-2 py-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs font-medium text-white">Featured</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Users className="w-4 h-4 text-blue-400" />
                        </div>
                        <div className="text-sm font-bold text-white">{project.metrics.users}</div>
                        <div className="text-xs text-gray-400">Users</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Zap className="w-4 h-4 text-green-400" />
                        </div>
                        <div className="text-sm font-bold text-white">{project.metrics.performance}</div>
                        <div className="text-xs text-gray-400">Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <TrendingUp className="w-4 h-4 text-purple-400" />
                        </div>
                        <div className="text-sm font-bold text-white">{project.metrics.growth}</div>
                        <div className="text-xs text-gray-400">Growth</div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-gray-800 rounded-md text-xs font-medium text-gray-300">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-gray-800 rounded-md text-xs font-medium text-gray-300">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <motion.a 
                        href={project.liveLink}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-white text-center hover:from-blue-500 hover:to-purple-500 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                      <motion.a 
                        href={project.githubLink}
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

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white mb-12 text-center">Additional Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="group glass-effect rounded-2xl p-6 premium-shadow hover:bg-white/5 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-xs font-semibold text-white`}>
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <motion.a
                        href={project.liveLink}
                        className="p-2 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ExternalLink className="w-4 h-4 text-gray-400 hover:text-white" />
                      </motion.a>
                      <motion.a
                        href={project.githubLink}
                        className="p-2 glass-effect rounded-lg hover:bg-white/10 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <Github className="w-4 h-4 text-gray-400 hover:text-white" />
                      </motion.a>
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-800 rounded-md text-xs font-medium text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;