import { createContext, ReactNode } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  ORANGE = 'orange',
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
  children?: ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps>({});
