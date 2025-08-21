import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/AtomVisualization.css';

function AtomVisualization({ protons, neutrons, electrons }) {
  // Calculate electron distribution across shells (K, L, M, N)
  const getElectronShells = (electronCount) => {
    const shells = [];
    let remaining = electronCount;
    const shellCapacity = [2, 8, 18, 32];
    
    for (let i = 0; i < shellCapacity.length && remaining > 0; i++) {
      const electronsInShell = Math.min(shellCapacity[i], remaining);
      shells.push(electronsInShell);
      remaining -= electronsInShell;
    }
    
    return shells;
  };

  const shells = getElectronShells(electrons);

  const renderNucleus = () => {
    const totalParticles = protons + neutrons;
    const particles = [];
    
    // Add protons
    for (let i = 0; i < protons; i++) {
      particles.push(
        <motion.div
          key={`proton-${i}`}
          className="particle proton"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
        />
      );
    }
    
    // Add neutrons
    for (let i = 0; i < neutrons; i++) {
      particles.push(
        <motion.div
          key={`neutron-${i}`}
          className="particle neutron"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: (protons + i) * 0.05, duration: 0.3 }}
        />
      );
    }
    
    return particles;
  };

  const renderElectronShells = () => {
    return shells.map((electronCount, shellIndex) => {
      const radius = 70 + shellIndex * 40;
      const electrons = [];
      
      for (let i = 0; i < electronCount; i++) {
        const angle = (i * 360) / electronCount;
        electrons.push(
          <motion.div
            key={`electron-${shellIndex}-${i}`}
            className="electron"
            style={{
              transform: `rotate(${angle}deg) translateX(${radius}px)`,
            }}
            animate={{ 
              rotate: [0, 360] 
            }}
            transition={{
              duration: 4 - shellIndex * 0.5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      }
      
      return (
        <motion.div
          key={`shell-${shellIndex}`}
          className="electron-shell"
          style={{
            width: radius * 2,
            height: radius * 2,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + shellIndex * 0.2 }}
        >
          {electrons}
        </motion.div>
      );
    });
  };

  return (
    <div className="atom-visualization">
      <div className="atom-container">
        <div className="nucleus">
          {renderNucleus()}
        </div>
        {renderElectronShells()}
      </div>
      <div className="atom-info">
        <div className="particle-count">
          <span className="proton-count">Protons: {protons}</span>
          <span className="neutron-count">Neutrons: {neutrons}</span>
          <span className="electron-count">Electrons: {electrons}</span>
        </div>
      </div>
    </div>
  );
}

export default AtomVisualization;
