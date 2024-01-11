import { quizSubjectsData } from "../../quizData";
import ThemeHandler from "../ThemeHandler/ThemeHandler";
import styles from './Header.module.css';

function Header({ isDark, toggleThemeHandler, quizSubject }) {
  const selectedQuiz = quizSubjectsData.find((quiz) => quiz.id === quizSubject);

  return (
    <header className={styles.header}>
      {quizSubject &&
      <div className={styles.selectedQuiz}>
        <div className={styles.selectedQuizIcon} style={{backgroundColor: `${selectedQuiz.bgColor}`}}>{selectedQuiz.icon(selectedQuiz.color)}</div>
        <p className={styles.selectedQuizText}>{selectedQuiz.text}</p>
      </div>
      }
      <ThemeHandler isDark={isDark} toggleThemeHandler={toggleThemeHandler}/>
    </header>
  );
}

export default Header;