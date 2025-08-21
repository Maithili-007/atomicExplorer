import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/pages/Home.css';

function Home() {
  return (
    <motion.div 
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="hero-section">
          <motion.div 
            className="hero-content"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1>Welcome to Atomic Structure Explorer</h1>
            <p>
              Discover the fascinating world of atoms! Learn about protons, neutrons, 
              and electrons through interactive simulations designed specifically for 
              Class 10 students.
            </p>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🔬</div>
                <h3>Interactive Simulation</h3>
                <p>Build atoms with real-time 3D visualization and smooth animations</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">📚</div>
                <h3>Learn Concepts</h3>
                <p>Understand atomic structure, elements, and chemical properties</p>
              </div>
              
              <div className="feature-card">
                <div className="feature-icon">🎯</div>
                <h3>Test Knowledge</h3>
                <p>Practice with quizzes and interactive exercises</p>
              </div>
            </div>

            <div className="cta-buttons">
              <Link to="/simulation" className="btn btn-primary">
                Start Simulation
              </Link>
              <Link to="/quiz" className="btn btn-secondary">
                Take Quiz
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="floating-atom">
              <div className="nucleus-demo">
                <div className="proton-demo"></div>
                <div className="neutron-demo"></div>
              </div>
              <div className="electron-orbit orbit-1">
                <div className="electron-demo"></div>
              </div>
              <div className="electron-orbit orbit-2">
                <div className="electron-demo"></div>
                <div className="electron-demo"></div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="learning-objectives">
          <h2>What You'll Learn</h2>
          <div className="objectives-grid">
            <div className="objective">
              <h4>Atomic Structure</h4>
              <p>Components of atoms and their properties</p>
            </div>
            <div className="objective">
              <h4>Element Identification</h4>
              <p>How atomic number determines element type</p>
            </div>
            <div className="objective">
              <h4>Ions & Isotopes</h4>
              <p>Charged atoms and mass variations</p>
            </div>
            <div className="objective">
              <h4>Electron Configuration</h4>
              <p>How electrons arrange in shells</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
