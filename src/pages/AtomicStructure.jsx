import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AtomVisualization from '../components/AtomVisualization';
import Controls from '../components/Controls';
import ElementInfo from '../components/ElementInfo';
import '../styles/pages/AtomicStructure.css';

function AtomicStructure() {
  const [atomState, setAtomState] = useState({
    protons: 1,
    neutrons: 0,
    electrons: 1,
  });

  const handleUpdate = (type, value) => {
    if (type === 'preset') {
      setAtomState(value);
    } else {
      setAtomState(prev => ({
        ...prev,
        [type]: value
      }));
    }
  };

  return (
    <motion.div 
      className="atomic-structure-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="page-header">
        <h2>Interactive Atomic Structure Simulation</h2>
        <p>Experiment with different combinations of particles to build atoms and explore their properties</p>
      </div>

      <div className="simulation-grid">
        <div className="visualization-section">
          <AtomVisualization 
            protons={atomState.protons}
            neutrons={atomState.neutrons}
            electrons={atomState.electrons}
          />
        </div>
        
        <div className="controls-section">
          <Controls 
            protons={atomState.protons}
            neutrons={atomState.neutrons}
            electrons={atomState.electrons}
            onUpdate={handleUpdate}
          />
        </div>
        
        <div className="info-section">
          <ElementInfo 
            protons={atomState.protons}
            neutrons={atomState.neutrons}
            electrons={atomState.electrons}
          />
        </div>
      </div>

      <div className="educational-content">
        <div className="concept-cards">
          <div className="concept-card">
            <h4>Understanding Protons</h4>
            <p>Protons are positively charged particles in the nucleus. The number of protons determines what element the atom is.</p>
          </div>
          <div className="concept-card">
            <h4>Role of Neutrons</h4>
            <p>Neutrons are neutral particles that add mass to the atom. Atoms with different neutron counts are called isotopes.</p>
          </div>
          <div className="concept-card">
            <h4>Electron Behavior</h4>
            <p>Electrons orbit the nucleus in shells. When electrons don't equal protons, the atom becomes an ion with a charge.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default AtomicStructure;
