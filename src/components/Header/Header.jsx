import { quizSubjectsData } from "../../quizData";
import ThemeHandler from "../ThemeHandler/ThemeHandler";
import { useContext } from "react";
import { QuizContext } from "../../Contexts";
import styles from './Header.module.css';

function Header() {
  const { quizSubject } = useContext(QuizContext);

  const selectedQuiz = quizSubjectsData.find((quiz) => quiz.id === quizSubject);

  return (
    <header className={styles.header}>
      {quizSubject &&
        <div className={styles.selectedQuiz}>
          <div className={styles.selectedQuizIcon}
               style={{ backgroundColor: `${selectedQuiz.bgColor}` }}>{selectedQuiz.icon(selectedQuiz.color)}</div>
          <p className={styles.selectedQuizText}>{selectedQuiz.text}</p>
        </div>
      }
      <ThemeHandler/>
    </header>
  );
}

export default Header;