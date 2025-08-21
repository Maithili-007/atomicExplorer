import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import AtomicStructure from './pages/AtomicStructure';
import Quiz from './pages/Quiz';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/simulation" element={<AtomicStructure />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
