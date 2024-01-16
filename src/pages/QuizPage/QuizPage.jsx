import { useContext, useState } from "react";
import { quizData } from "../../quizData";
import QuizQuestion from "../../components/QuizQuestion/QuizQuestion";
import { QuizContext } from "../../Contexts";

function QuizPage() {
  const { quizSubject, setQuizCompleted, score, setScore } = useContext(QuizContext);

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