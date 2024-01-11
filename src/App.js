import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import StartPage from "./pages/StartPage/StartPage";
import QuizPage from "./pages/QuizPage/QuizPage";
import ResultPage from "./pages/ResultPage/ResultPage";
import styles from './App.module.css';

function App() {
  const [quizSubject, setQuizSubject] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  }

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const page = () => {
    if (quizCompleted) {
      return <ResultPage score={score} setQuizCompleted={setQuizCompleted}/>
    }

    if (quizSubject) {
      return <QuizPage score={score} setScore={setScore} quizSubject={quizSubject} setQuizCompleted={setQuizCompleted}/>
    } else {
      return <StartPage setQuizSubject={setQuizSubject}/>
    }
  }

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Header isDark={isDark} toggleThemeHandler={toggleTheme} quizSubject={quizSubject} />
        <div className={styles.page}>
          {page()}
        </div>
      </div>
    </div>
  );
}

export default App;
