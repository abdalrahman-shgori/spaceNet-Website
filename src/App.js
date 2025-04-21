
import React, { lazy, Suspense, useEffect, useState } from 'react';
import ThemeProvider from './ThemeProvider';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import { motion } from 'framer-motion';
import Toggle from './components/toggleCompoent/toggle';
import ThemeSettings from './pagedirection/ThemeSettings';
import ThemeLocalization from './locals/ThemeLocalization';
import { useTranslation } from 'react-i18next';

const LogoAnimation = lazy(() => import('./pages/LandingPage/logoaniamtion'));
const SoftwareSection = lazy(() => import('./pages/softwarePage'));
const DesignAndBranding = lazy(() => import('./pages/design&branding'));
const Academics = lazy(() => import('./pages/academics'));
const CoreIt = lazy(() => import('./pages/coreIt'));
const BlogsAndNews = lazy(() => import('./components/blogsAndNews/blogsAndNews'));
const BlogDetails = lazy(() => import('./components/blogsAndNews/blogDetails'));
const BasicModal = lazy(() => import('./components/contactUs/contactUs'));
const Footer = lazy(() => import('./components/footer'));
const InnerApp = lazy(() => import('./pages/LandingPage/innerApp'));

const App = () => {
 
  const [open, setOpen] = React.useState(false);
  const [showOverflow, setShowOverFlow] = useState(false)
  const { i18n } = useTranslation();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [showContent, setShowContent] = useState(false);
  const [logoAnimationComplete, setLogoAnimationComplete] = useState(false);
  const [themeColor, setThemeColor] = useState('')
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n]);
  const handleAnimationComplete = () => {
    setLogoAnimationComplete(true);
  };
  useEffect(() => {
    if (location.pathname !== '/') {
      setLogoAnimationComplete(true);
    }
  }, [location.pathname]);
  
  useEffect(() => {
    if (logoAnimationComplete) {
      requestIdleCallback(() => setShowContent(true));
    }
  }, [logoAnimationComplete]);
  
  

  return (
    <ThemeProvider logoAnimationComplete={logoAnimationComplete}>
      {location.pathname === '/' && (
        <Suspense fallback={null}>
        <LogoAnimation handleAnimationComplete={handleAnimationComplete} logoAnimationComplete={logoAnimationComplete} />
        </Suspense>
      )}

      <ThemeSettings>
        <ThemeLocalization>
          {logoAnimationComplete && (
            <>
              <motion.div
                initial={location.pathname === '/' && { height: 0, originY: 1 }}
                animate={{
                  height: "100dvh",
                  background: themeColor,
                }}
                exit={{ scaleY: [0, 1.1, 0] }}
                transition={{
                  delay: 0.2,
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                  times: [0, 0.5, 1],
                }}
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "100%",
                  zIndex: 10,
                  transformOrigin: "bottom",
                  overflow: location.pathname === '/' ? showOverflow ? "auto" : "hidden" : 'unset'
                }}
                onAnimationComplete={()=>{
                  setShowOverFlow(true)
                }}
              >
                <>
                  <NavBar setOpen={setOpen} showContent={showContent} setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} />
                  <Suspense fallback={<div>Loading...</div>}>
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
                    <Route path='/blogs' element={<BlogsAndNews setOpen={setOpen} />} />
                    <Route path="/blogs/:id" element={<BlogDetails setOpen={setOpen} />} />
                  </Routes>
                  </Suspense>

                
                  {location.pathname !== '/' && (
                    <Suspense fallback={null}>
                    <Footer />
                    </Suspense>
                  )}
                </>
              </motion.div>
              {showContent && (
                <>
                <Suspense fallback={null}>
                <Toggle open={open} setThemeColor={setThemeColor} themeColor={themeColor} drawerOpen={drawerOpen} />
                <BasicModal setOpen={setOpen} open={open} />
                </Suspense>
                </>
              )}
             
            </>
          )}
        </ThemeLocalization>
      </ThemeSettings>
    </ThemeProvider>
  );
};

export default App;
