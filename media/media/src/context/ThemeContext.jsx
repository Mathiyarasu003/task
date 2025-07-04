import React, { createContext, useMemo, useState, useContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { deepPurple, orange } from '@mui/material/colors';

const ThemeContext = createContext();

export const useThemeMode = () => useContext(ThemeContext);

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          background: {
            default: 'linear-gradient(135deg, #ede7f6 0%, #fff3e0 100%)',
            paper: 'rgba(255,255,255,0.98)',
          },
          primary: { main: deepPurple[700] },
          secondary: { main: orange[500] },
        }
      : {
          background: {
            default: 'linear-gradient(135deg, #b39ddb 0%, #9575cd 100%)',
            paper: 'rgba(149,117,205,0.98)',
          },
          primary: { main: deepPurple[200] },
          secondary: { main: orange[300] },
        }),
  },
  shape: { borderRadius: 20 },
  typography: {
    fontFamily: 'Times New Roman, Times, serif',
    fontWeightBold: 900,
  },
});

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
      },
      mode,
    }),
    [mode]
  );
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}; 