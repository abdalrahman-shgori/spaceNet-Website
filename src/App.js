import React, { useEffect, useState } from 'react';
import ThemeProvider from './ThemeProvider';
import { Route, Routes, useLocation } from 'react-router-dom';
import InnerApp from './components/LandingPage/innerApp';
import NavBar from './components/navbar/navbar';
import LogoAnimation from './components/LandingPage/logoaniamtion';
import { AnimatePresence, motion } from 'framer-motion';
import { Box, useTheme } from '@mui/material';
import Toggle from './components/toggleCompoent/toggle';
import SoftwareSection from './pages/softwarePage';
import Footer from './components/footer';

const App = () => {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [showContent, setShowContent] = useState(false);
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false); // For tracking logo animation completion
  const [themeColor, setThemeColor] = useState('')

  const handleAnimationComplete = () => {
    setLogoAnimationComplete(true);
  };
  useEffect(() => {
    if (logoAnimationComplete) {
      setTimeout(() => {
        setShowContent(true);
      }, 0);
    }
    else if (location.pathname !== '/') {
      setLogoAnimationComplete(true)
    }
  }, [logoAnimationComplete]);

  useEffect(() => {
    const handleOverflow = () => {
      if (location.pathname === '/') {
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
          document.body.style.overflow = 'auto';
        }, 3500);

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
    <ThemeProvider logoAnimationComplete={logoAnimationComplete}>
      {location.pathname === '/' && (
        <motion.div
          initial={{ height: "100dvh" }}
          animate={{ height: showContent ? "0%" : "100%" }}
          transition={{ duration: 1 }}
          style={{
            background: '#051A2F',
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
      )}


      {logoAnimationComplete && (
        <>
          <motion.div
            initial={location.pathname === '/' && { y: '100dvh', opacity: 0 }}
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
              animation: 'moveBackground 5s linear infinite',
            }}
          >
            <>
              <NavBar showContent={showContent} setDrawerOpen={setDrawerOpen} setThemeColor={setThemeColor} themeColor={themeColor} drawerOpen={drawerOpen} />
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
                <Route path='/software' element={<SoftwareSection setThemeColor={setThemeColor} />} />
              </Routes>
              {location.pathname !== '/' && (
                <Footer />
              )}

            </>
          </motion.div>
          <Toggle setThemeColor={setThemeColor} themeColor={themeColor} drawerOpen={drawerOpen} />

        </>
      )}
    </ThemeProvider>
  );
};

export default App;
