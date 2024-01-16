import React, { useContext } from 'react';
import {QuizContext} from './Contexts';
import ResultPage from "./pages/ResultPage/ResultPage";
import QuizPage from "./pages/QuizPage/QuizPage";
import StartPage from "./pages/StartPage/StartPage";

function Router(props) {
  const quizContext = useContext(QuizContext);

  const page = () => {
    if (quizContext.quizCompleted) {
      return <ResultPage/>
    }

    if (quizContext.quizSubject) {
      return <QuizPage/>
    } else {
      return <StartPage/>
    }
  }

  return (
    <>
      {page()}
    </>
  );
}

export default Router;