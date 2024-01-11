import styles from './QuizSubject.module.css';
function QuizSubject({quiz, setQuizSubject}) {
  return (
    <div className={styles.quizSubject} onClick={()=> setQuizSubject(quiz.id)}>
      <div className={styles.quizSubjectIcon} style={{backgroundColor: `${quiz.bgColor}`}}>{quiz.icon(quiz.color)}</div>
      <p className={styles.quizSubjectText}>{quiz.text}</p>
    </div>
  );
}

export default QuizSubject;