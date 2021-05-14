import React from 'react';
import { Theme } from '../theme';

interface ThemeProviderProps {
  /** The theme to pass down to the library components */
  theme?: Theme;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => <div>{children}</div>;

export default ThemeProvider;
