import { useContext, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../../const/theme';
import { LOCALSTORAGE_THEME_KEY } from '../../../const/localstorage';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme) {
      document.body.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.DARK:
        newTheme = Theme.LIGHT;
        break;
      case Theme.LIGHT:
        newTheme = Theme.ORANGE;
        break;
      case Theme.ORANGE:
        newTheme = Theme.DARK;
        break;
      default:
        newTheme = Theme.LIGHT;
    }
    setTheme?.(newTheme);
    localStorage.setItem(LOCALSTORAGE_THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
}
