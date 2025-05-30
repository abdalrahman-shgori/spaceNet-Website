

import React, { useEffect, useState } from 'react';
import ThemeProvider from './ThemeProvider';
import { Route, Router, Routes, useLocation } from 'react-router-dom';
import InnerApp from './pages/LandingPage/innerApp';
import NavBar from './components/navbar/navbar';
import { motion } from 'framer-motion';
import Toggle from './components/toggleCompoent/toggle';
import SoftwareSection from './pages/softwarePage';
import Footer from './components/footer';
import DesignAndBranding from './pages/design&branding';
import LogoAnimation from './pages/LandingPage/logoaniamtion';
import Academics from './pages/academics';
import BasicModal from './components/contactUs/contactUs';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import CoreIt from './pages/coreIt';
import ThemeSettings from './pagedirection/ThemeSettings';
import ThemeLocalization from './locals/ThemeLocalization';
import { useTranslation } from 'react-i18next';

const App = () => {
  const [open, setOpen] = React.useState(false);
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [showContent, setShowContent] = useState(false);
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false);
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
          <LogoAnimation handleAnimationComplete={handleAnimationComplete} logoAnimationComplete={logoAnimationComplete} />
        </motion.div>
      )}
<ThemeSettings>
<ThemeLocalization>
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
              animation: 'moveBackground 5s linear',
            }}
          >
            <>
            <NavBar setOpen={setOpen} showContent={showContent} setDrawerOpen={setDrawerOpen} setThemeColor={setThemeColor} themeColor={themeColor} drawerOpen={drawerOpen} />
             <ScrollToTop/>
             <Routes>
                    <Route
                      path='/'
                      element={
                        <InnerApp
                          showContent={showContent}
                          setShowContent={setShowContent}
                          draweOpen={drawerOpen}
                          setDrawerOpen={setDrawerOpen}
                          setOpen={setOpen}
                        />
                      }
                    />
                    <Route path='/software' element={<SoftwareSection setOpen={setOpen} />} />
                    <Route path='/design-branding' element={<DesignAndBranding setOpen={setOpen} />} />
                    <Route path='/academics' element={<Academics setOpen={setOpen} />} />
                    <Route path='/core-it' element={<CoreIt setOpen={setOpen} />} />
                    {/* <Route path='/blogs' element={<BlogsAndNews setOpen={setOpen} />} />
                    <Route path="/blogs/:id" element={<BlogDetails setOpen={setOpen} />} /> */}
                  </Routes>
          
           
              {location.pathname !== '/' && (
                <Footer />
              )}
            </>
          </motion.div>
          <Toggle open={open} setThemeColor={setThemeColor} themeColor={themeColor} drawerOpen={drawerOpen} />
          <BasicModal setOpen={setOpen} open={open} />
        </>
      )}
       </ThemeLocalization>
      </ThemeSettings>
    </ThemeProvider>
  );
};

export default App;
