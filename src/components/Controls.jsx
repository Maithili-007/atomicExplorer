import React from 'react';
import { motion } from 'framer-motion';
import '../styles/components/Controls.css';

function Controls({ protons, neutrons, electrons, onUpdate }) {
  const handleSliderChange = (type, value) => {
    onUpdate(type, parseInt(value));
  };

  const handlePreset = (presetAtom) => {
    onUpdate('preset', presetAtom);
  };

  return (
    <motion.div 
      className="controls-panel"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h3>Build Your Atom</h3>
      
      <div className="control-group">
        <label className="control-label">
          <div className="label-header">
            <span className="particle-dot proton"></span>
            <span>Protons: {protons}</span>
          </div>
          <input
            type="range"
            min="1"
            max="20"
            value={protons}
            onChange={(e) => handleSliderChange('protons', e.target.value)}
            className="slider proton-slider"
          />
        </label>
        <div className="particle-info">
          Positive charge (+) • Determines element
        </div>
      </div>

      <div className="control-group">
        <label className="control-label">
          <div className="label-header">
            <span className="particle-dot neutron"></span>
            <span>Neutrons: {neutrons}</span>
          </div>
          <input
            type="range"
            min="0"
            max="25"
            value={neutrons}
            onChange={(e) => handleSliderChange('neutrons', e.target.value)}
            className="slider neutron-slider"
          />
        </label>
        <div className="particle-info">
          Neutral charge (0) • Affects atomic mass
        </div>
      </div>

      <div className="control-group">
        <label className="control-label">
          <div className="label-header">
            <span className="particle-dot electron"></span>
            <span>Electrons: {electrons}</span>
          </div>
          <input
            type="range"
            min="0"
            max="20"
            value={electrons}
            onChange={(e) => handleSliderChange('electrons', e.target.value)}
            className="slider electron-slider"
          />
        </label>
        <div className="particle-info">
          Negative charge (-) • Determines ion charge
        </div>
      </div>

      <div className="preset-section">
        <h4>Quick Presets</h4>
        <div className="preset-buttons">
          <button 
            className="preset-btn hydrogen"
            onClick={() => handlePreset({ protons: 1, neutrons: 0, electrons: 1 })}
          >
            Hydrogen (H)
          </button>
          <button 
            className="preset-btn carbon"
            onClick={() => handlePreset({ protons: 6, neutrons: 6, electrons: 6 })}
          >
            Carbon (C)
          </button>
          <button 
            className="preset-btn oxygen"
            onClick={() => handlePreset({ protons: 8, neutrons: 8, electrons: 8 })}
          >
            Oxygen (O)
          </button>
          <button 
            className="preset-btn sodium"
            onClick={() => handlePreset({ protons: 11, neutrons: 12, electrons: 11 })}
          >
            Sodium (Na)
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Controls;
