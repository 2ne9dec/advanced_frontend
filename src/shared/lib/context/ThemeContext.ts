import { Theme } from '../../const/theme';
import { createContext, ReactNode } from 'react';

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
  children?: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>({});
