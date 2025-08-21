import React from 'react';
import { motion } from 'framer-motion';
import { getElement } from '../utils/atomicData';
import '../styles/components/ElementInfo.css';

function ElementInfo({ protons, neutrons, electrons }) {
  const element = getElement(protons);
  const massNumber = protons + neutrons;
  const charge = protons - electrons;
  const isNeutral = charge === 0;
  
  const getChargeInfo = () => {
    if (charge === 0) return { text: 'Neutral', class: 'neutral' };
    if (charge > 0) return { text: `+${charge} (Cation)`, class: 'positive' };
    return { text: `${charge} (Anion)`, class: 'negative' };
  };

  const chargeInfo = getChargeInfo();

  return (
    <motion.div 
      className="element-info"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <h3>Element Information</h3>
      
      <div className="element-card">
        <div className="element-symbol-section">
          <div className="element-symbol">
            <span className="symbol">{element.symbol}</span>
            <span className="atomic-number">{protons}</span>
            <span className="mass-number">{massNumber}</span>
          </div>
          <div className="element-name">
            <h4>{element.name}</h4>
          </div>
        </div>
        
        <div className="element-properties">
          <div className="property">
            <label>Atomic Number:</label>
            <span>{protons}</span>
          </div>
          <div className="property">
            <label>Mass Number:</label>
            <span>{massNumber}</span>
          </div>
          <div className="property">
            <label>Charge:</label>
            <span className={chargeInfo.class}>{chargeInfo.text}</span>
          </div>
          <div className="property">
            <label>Electron Configuration:</label>
            <span>{getElectronConfiguration(electrons)}</span>
          </div>
        </div>
      </div>

      <div className="learning-points">
        <h4>Key Concepts</h4>
        <ul>
          <li>Atomic number = number of protons</li>
          <li>Mass number = protons + neutrons</li>
          <li>Charge = protons - electrons</li>
          {!isNeutral && (
            <li>This is an <strong>ion</strong> (charged atom)</li>
          )}
          {neutrons !== protons && protons <= 10 && (
            <li>This could be an <strong>isotope</strong></li>
          )}
        </ul>
      </div>
    </motion.div>
  );
}

function getElectronConfiguration(electrons) {
  if (electrons === 0) return 'No electrons';
  
  const shells = [];
  let remaining = electrons;
  const shellNames = ['K', 'L', 'M', 'N'];
  const shellCapacity = [2, 8, 18, 32];
  
  for (let i = 0; i < shellCapacity.length && remaining > 0; i++) {
    const electronsInShell = Math.min(shellCapacity[i], remaining);
    shells.push(`${shellNames[i]}${electronsInShell}`);
    remaining -= electronsInShell;
  }
  
  return shells.join(', ');
}

export default ElementInfo;
