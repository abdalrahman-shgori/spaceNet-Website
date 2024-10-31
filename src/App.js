import React, { useEffect, useState } from 'react';
import ThemeProvider from './ThemeProvider';
import { Route, Routes } from 'react-router-dom';
import Software from './components/softwareService/software';
import InnerApp from './components/LandingPage/innerApp';
import NavBar from './components/navbar/navbar';
import LogoAnimation from './components/LandingPage/logoaniamtion';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material';

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false); // For tracking logo animation completion
  const theme = useTheme()
  const [themeColor,setThemeColor]=useState('')
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

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
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
        <motion.div
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
              <NavBar showContent={showContent} setDrawerOpen={() => { }} />
              <Routes>
                <Route
                  path='/'
                  element={
                    <InnerApp
                      showContent={showContent}
                      setShowContent={setShowContent}
                      setThemeColor={setThemeColor}
                    />
                  }
                />
                <Route path='/software' element={<Software />} />
              </Routes>
            </>
          )}
        </motion.div>
      )}
    </ThemeProvider>
  );
};

export default App;
