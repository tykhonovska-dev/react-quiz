import React, { createContext, useEffect, useState } from 'react';

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [quizSubject, setQuizSubject] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const onPlayAgain = () => {
    setQuizCompleted(false);
    setQuizSubject(null);
  }

  const toggleTheme = () => {
    setIsDark(!isDark);
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <QuizContext.Provider value={{
      isDark,
      toggleTheme,
      quizSubject,
      setQuizSubject,
      quizCompleted,
      setQuizCompleted,
      score,
      setScore,
      onPlayAgain
    }}>
      {children}
    </QuizContext.Provider>
  );
};