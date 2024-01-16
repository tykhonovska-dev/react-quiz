import { useContext } from "react";
import { QuizContext } from "../../Contexts";
import styles from './QuizSubject.module.css';

function QuizSubject({ quiz }) {
  const { setQuizSubject } = useContext(QuizContext);

  return (
    <div className={styles.quizSubject} onClick={() => setQuizSubject(quiz.id)}>
      <div className={styles.quizSubjectIcon}
           style={{ backgroundColor: `${quiz.bgColor}` }}>{quiz.icon(quiz.color)}</div>
      <p className={styles.quizSubjectText}>{quiz.text}</p>
    </div>
  );
}

export default QuizSubject;