import React, { useState, useMemo, createContext, useContext } from 'react';
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ColorModeContext = createContext({ toggleColorMode: () => {} });
export const useColorMode = () => useContext(ColorModeContext);

const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');

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
                  BurgerMenu:"#FFFFFF",
                  logo:"#E9FA50"
                },
                background: {
                  default: '#051A2F',
                  paper: '#051A2F',  
                },
                text: {
                  primary: '#ffffff', 
                  BurgerMenu:"#FFFFFF",
                  logo:"#FFFFFF"

                },
              }
            : {
                primary: {
                  main: '#1976d2',
                  BurgerMenu:"#051A2F",
                  logo:"#051A2F"
                },
                background: {
                  default: '#9D89FC',  
                  paper: '#F4F4F4',    
                },
                text: {
                  primary: '#000000',  
                  BurgerMenu:"#051A2F",
                  logo:"#051A2F"


                },
              }),
        },
      }),
    [mode],
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
