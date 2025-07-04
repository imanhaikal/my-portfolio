import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import useIsMobile from './hooks/useIsMobile';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-blue-900 opacity-70"></div>
        
        {/* Floating particles */}
        {!isMobile && [...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              y: [0, Math.random() * -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              scale: [1, Math.random() * 1.5 + 0.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              repeatType: 'reverse',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Suspense fallback={<div>Loading...</div>}>
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default App;