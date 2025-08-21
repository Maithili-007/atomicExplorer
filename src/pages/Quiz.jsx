import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { quizQuestions } from '../utils/atomicData';
import '../styles/pages/Quiz.css';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === quizQuestions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <motion.div 
        className="quiz-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="quiz-container">
          <div className="quiz-completed">
            <h2>Quiz Completed!</h2>
            <div className="score-display">
              <span className="score">{score}</span>
              <span className="total">/ {quizQuestions.length}</span>
            </div>
            <p className="score-message">
              {score === quizQuestions.length 
                ? "Perfect! You have mastered atomic structure!" 
                : score >= quizQuestions.length * 0.7 
                ? "Great job! You have a solid understanding!" 
                : "Keep practicing to improve your understanding!"}
            </p>
            <button onClick={resetQuiz} className="btn btn-primary">
              Try Again
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  const question = quizQuestions[currentQuestion];

  return (
    <motion.div 
      className="quiz-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="quiz-container">
        <div className="quiz-header">
          <h2>Atomic Structure Quiz</h2>
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>
          <p className="progress-text">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </p>
        </div>

        <div className="question-card">
          <h3 className="question-text">{question.question}</h3>
          
          <div className="answer-options">
            {question.options.map((option, index) => (
              <button
                key={index}
                className={`answer-option ${
                  selectedAnswer === index 
                    ? index === question.correct 
                      ? 'correct' 
                      : 'incorrect'
                    : ''
                } ${showExplanation && index === question.correct ? 'correct' : ''}`}
                onClick={() => handleAnswerSelect(index)}
                disabled={showExplanation}
              >
                {option}
              </button>
            ))}
          </div>

          {showExplanation && (
            <motion.div 
              className="explanation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p>{question.explanation}</p>
              <button onClick={handleNextQuestion} className="btn btn-primary">
                {currentQuestion < quizQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
              </button>
            </motion.div>
          )}
        </div>

        <div className="score-tracker">
          Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
        </div>
      </div>
    </motion.div>
  );
}

export default Quiz;
