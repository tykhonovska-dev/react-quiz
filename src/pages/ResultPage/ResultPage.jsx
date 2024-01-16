import { useContext } from "react";
import { QuizContext } from "../../Contexts";
import styles from './ResultPage.module.css';

function ResultPage() {
  const { score, onPlayAgain } = useContext(QuizContext);

  return (
    <div className={styles.resultPage}>
      <div className={styles.resultPageLeftBlock}>
        <h1 className={styles.resultPageTitle}>Quiz completed</h1>
        <b className={styles.resultPageBoldText}>You scored...</b>
      </div>
      <div className={styles.resultPageRightBlock}>
        <div className={styles.resultPageBox}>
          {score}
          <span>out of 10</span>
        </div>
        <button className={styles.resultPageBtn} onClick={onPlayAgain}>Play Again</button>
      </div>
    </div>
  );
}

export default ResultPage;