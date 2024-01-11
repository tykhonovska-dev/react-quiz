import { useEffect } from 'react';
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import  styles from './ThemeHandler.module.css';

function ThemeHandler({ isDark, toggleThemeHandler }) {

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    toggleThemeHandler(prefersDarkMode);
  }, []);

  return (
    <div className={styles.darkModeToggle}>
      <IoSunnyOutline className={styles.darkModeToggleIcon}/>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => toggleThemeHandler()}
        />
        <div className={styles.darkModeToggleSlider}/>
      </label>
      <IoMoonOutline className={styles.darkModeToggleIcon}/>
    </div>
  );
}

export default ThemeHandler;