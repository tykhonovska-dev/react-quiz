import { quizSubjectsData } from "../../quizData";
import QuizSubject from "../../components/QuizSubject/QuizSubject";
import { useContext } from "react";
import { QuizContext } from "../../Contexts";
import styles from './StartPage.module.css';

function StartPage() {
  const { setQuizSubject} = useContext(QuizContext);

  return (
    <div className={styles.startPage}>
      <div className={styles.startPageLeftBlock}>
        <h1 className={styles.startPageTitle}>Welcome to the</h1>
        <b className={styles.startPageBoldText}>Frontend Quiz!</b>
        <span className={styles.startPageTip}>Pick a subject to get started.</span>
      </div>
      <div className={styles.startPageRightBlock}>
        <div className={styles.quizSubjects}>
          {quizSubjectsData.map((quiz) => <QuizSubject key={quiz.id} quiz={quiz} setQuizSubject={setQuizSubject}/>)}
        </div>
      </div>
    </div>
  );
}

export default StartPage;