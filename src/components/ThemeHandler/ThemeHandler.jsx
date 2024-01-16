import { useContext, useEffect } from 'react';
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import { QuizContext } from "../../Contexts";
import styles from './ThemeHandler.module.css';

function ThemeHandler() {
  const { isDark, toggleTheme } = useContext(QuizContext);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    toggleTheme(prefersDarkMode);
  }, []);

  return (
    <div className={styles.darkModeToggle}>
      <IoSunnyOutline className={styles.darkModeToggleIcon}/>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => toggleTheme()}
        />
        <div className={styles.darkModeToggleSlider}/>
      </label>
      <IoMoonOutline className={styles.darkModeToggleIcon}/>
    </div>
  );
}

export default ThemeHandler;