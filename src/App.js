import { QuizProvider } from './Contexts';
import Header from "./components/Header/Header";
import Router from "./Router";
import styles from './App.module.css';

function App() {

  return (
    <QuizProvider>
      <div className={styles.app}>
        <div className={styles.container}>
          <Header/>
          <div className={styles.page}>
            <Router/>
          </div>
        </div>
      </div>
    </QuizProvider>
  );
}

export default App;
