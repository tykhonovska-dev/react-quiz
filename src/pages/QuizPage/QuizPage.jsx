import {useState} from "react";
import { quizData } from "../../quizData";
import QuizQuestion from "../../components/QuizQuestion/QuizQuestion";

function QuizPage({ quizSubject, setQuizCompleted, score, setScore }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questionList = quizData.find((list) => list.id === quizSubject).questionsList;

  const answerSubmit = (selectedAnswerId) => {
    const question = questionList[currentQuestionIndex];

    if(selectedAnswerId === question.correctAnswerId) {
      setScore(score + 1);
    }
    if(questionList.length === currentQuestionIndex + 1) {
      setQuizCompleted(true);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);

  }

  return (
    <div>
      <QuizQuestion index={currentQuestionIndex}
                    question={questionList[currentQuestionIndex]}
                    answerSubmitHandler={answerSubmit}
      />
    </div>
  );
}

export default QuizPage;