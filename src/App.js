import React, { useEffect, useState } from 'react';
import ThemeProvider from './ThemeProvider';
import { Route, Routes, useLocation } from 'react-router-dom';
import Software from './components/softwareService/software';
import InnerApp from './components/LandingPage/innerApp';
import NavBar from './components/navbar/navbar';
import LogoAnimation from './components/LandingPage/logoaniamtion';
import { motion } from 'framer-motion';
import { Box, useTheme } from '@mui/material';
import Toggle from './components/toggleCompoent/toggle';

const App = () => {
  const [drawerOpen,setDrawerOpen]=useState(false)
  const [showContent, setShowContent] = useState(false);
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false); // For tracking logo animation completion
  const theme = useTheme()
  const [themeColor, setThemeColor] = useState('')
  const handleAnimationComplete = () => {
    setLogoAnimationComplete(true);
  };
  console.log(theme.palette.background.default)
  useEffect(() => {
    if (logoAnimationComplete) {
      setTimeout(() => {
        setShowContent(true);
      }, 0);
    }
  }, [logoAnimationComplete]);
  const location = useLocation();

  useEffect(() => {
    const handleOverflow = () => {
      if (location.pathname === '/') {
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
          document.body.style.overflow = 'auto';
        }, 5000);

        return () => clearTimeout(timer);
      } else {
        document.body.style.overflow = 'auto';
      }
    };
    handleOverflow();
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [location]);

  return (
    <ThemeProvider>
      <motion.div
        initial={{ height: "100dvh" }}
        animate={{ height: showContent ? "0%" : "100%" }}
        transition={{ duration: 1 }}
        style={{
          backgroundColor: '#051A2F',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          transformOrigin: "bottom",

        }}
      >

        <LogoAnimation handleAnimationComplete={handleAnimationComplete} />
      </motion.div>

      {logoAnimationComplete && (
        <>
            <motion.div
            className='root-container'
          initial={{ y: '100dvh', opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            background: themeColor,
          }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{
            duration: 1,
            ease: 'easeInOut',
            background: { duration: 0.3 },
          }}
          style={{
            background: themeColor,
            minHeight: '100dvh',
            position: 'relative',
            zIndex: 2,
            backgroundSize: '200% 100%',
            animation: 'moveBackground 5s linear infinite',
          }}
        >
          {showContent && (
            <>
              <NavBar showContent={showContent}  setDrawerOpen={setDrawerOpen} />
              <Box
               
              sx={{
                display: {
                  xl: "unset",
                  lg: "none",
                  md: "none",
                  sm: "none",
                  xs: "none"
                }
              }}
            >
              <Toggle setThemeColor={setThemeColor} themeColor={themeColor} drawerOpen={drawerOpen}/>

            </Box>
              <Routes>
                <Route
                  path='/'
                  element={
                    <InnerApp
                      showContent={showContent}
                      setShowContent={setShowContent}
                      setThemeColor={setThemeColor}
                      draweOpen={drawerOpen}
                      setDrawerOpen={setDrawerOpen}
                    />
                  }
                />
                <Route path='/software' element={<Software />} />
              </Routes>
            </>
            
          )}
        </motion.div>
        
        <Box
            sx={{
              display: {
                xl: "none",
                lg: "unset",
                md: "unset",
                sm: "unset",
                xs: "unset"
              }
            }}
          >
            <Toggle  setThemeColor={setThemeColor}  drawerOpen={drawerOpen}/>

          </Box>
        </>
    
        
      )}
    </ThemeProvider>
  );
};

export default App;
