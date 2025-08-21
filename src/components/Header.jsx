import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/components/Header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="atom-icon">⚛️</span>
          <h1>Atomic Explorer</h1>
        </div>
        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/simulation" 
            className={`nav-link ${location.pathname === '/simulation' ? 'active' : ''}`}
          >
            Simulation
          </Link>
          <Link 
            to="/quiz" 
            className={`nav-link ${location.pathname === '/quiz' ? 'active' : ''}`}
          >
            Quiz
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
