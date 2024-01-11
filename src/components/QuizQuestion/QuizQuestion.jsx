import { useState } from "react";
import styles from './QuizQuestion.module.css';

function QuizQuestion({index, question, answerSubmitHandler}) {
  const [selectedAnswerId, setSelectedAnswerId] = useState(null);
  const {questionText, answers} = question;
  const progress = ((index + 1) / 10) * 100;

  const submitAnswerClick = () => {
    if(selectedAnswerId === null) {
      return;
    }

    answerSubmitHandler(selectedAnswerId);
    setSelectedAnswerId(null);
  }

  return (
    <div className={styles.quizQuestion}>
      <div className={styles.quizQuestionLeftBlock}>
        <div className={styles.quizQuestionOrder}>Question {index + 1} of 10</div>
        <h5 className={styles.quizQuestionText}>{questionText}</h5>
        <div className={styles.quizQuestionProgressBar}><span style={{width: `${progress}%`}} /></div>
      </div>
      <div className={styles.quizQuestionRightBlock}>
        <div className={styles.quizQuestionAnswers}>
          {answers.map((answer, index) => {
            return (
              <div className={`${styles.quizQuestionAnswer} ${selectedAnswerId === answer.id ? styles.selected : ''}`}
                   onClick={()=>setSelectedAnswerId(answer.id)}
                   key={answer.id}
              >
                <div>{index + 1}</div>
                <p>{answer.answerText}</p>
              </div>
            );
          })}
        </div>
        <button className={`${styles.quizQuestionBtn} ${!selectedAnswerId ? styles.disabled : ''}`}
                onClick={submitAnswerClick}
                disabled={!selectedAnswerId}
        >
          Submit  answer
        </button>
      </div>
    </div>
  );
}

export default QuizQuestion;