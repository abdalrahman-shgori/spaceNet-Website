import React, { useState, useMemo, createContext, useContext, useEffect } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useLocation } from 'react-router-dom';

const ColorModeContext = createContext({ toggleColorMode: () => {} });
export const useColorMode = () => useContext(ColorModeContext);

const ThemeProvider = ({ children, logoAnimationComplete }) => {
  const [mode, setMode] = useState('light');
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
  }, [pathname]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === 'dark'
            ? {
                primary: {
                  main: '#fafafa',
                  BurgerMenu: '#FFFFFF',
                  logo: '#E9FA50',
                },
                background: {
                  default: '#051A2F',
                  paper: '#051A2F',
                },
                text: {
                  primary: '#ffffff',
                  BurgerMenu: '#FFFFFF',
                  logo: '#FFFFFF',
                },
              }
            : {
                primary: {
                  main: '#1976d2',
                  BurgerMenu: '#051A2F',
                  logo: '#051A2F',
                },
                background: {
                  // default: pathname === '/' ? '#9D89FC' : logoAnimationComplete && pathname === '/' ? '#051A2F' : '#F4F4F4',
                  paper: '#F4F4F4',
                  default:logoAnimationComplete ? "#9D89FC" : pathname !== '/' && logoAnimationComplete ? "#F4F4F4" : "#051A2F" 
                },
                text: {
                  primary: '#000000',
                  BurgerMenu: '#051A2F',
                  logo: '#051A2F',
                },
              }),
        },
      }),
    [mode, pathname, logoAnimationComplete],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeProvider;
