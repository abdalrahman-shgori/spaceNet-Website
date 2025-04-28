
import React, { startTransition, useEffect, useState,Suspense } from 'react';
import ThemeProvider from './ThemeProvider';
import { Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import { motion } from 'framer-motion';
import Toggle from './components/toggleCompoent/toggle';
import LogoAnimation from './pages/LandingPage/logoaniamtion';
import ThemeSettings from './pagedirection/ThemeSettings';
import ThemeLocalization from './locals/ThemeLocalization';
import { useTranslation } from 'react-i18next';
import BasicModal from './components/contactUs/contactUs';
import Loader from './components/loadingPage/loading';
import LoaderWrapper from './components/delaySuspens';
const SoftwareSection = React.lazy(() => import('./pages/softwarePage'));
const DesignAndBranding = React.lazy(() => import('./pages/design&branding'));
const Academics = React.lazy(() => import('./pages/academics'));
const CoreIt = React.lazy(() => import('./pages/coreIt'));
const InnerApp = React.lazy(() => import('./pages/LandingPage/innerApp'));
const Footer = React.lazy(() => import('./components/footer'));

// import BlogsAndNews from './components/blogsAndNews/blogsAndNews';
// import BlogDetails from './components/blogsAndNews/blogDetails';
const App = () => {
  const [open, setOpen] = React.useState(false);
  const [showOverflow, setShowOverFlow] = useState(false)
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
      requestIdleCallback(() => {
        startTransition(() => {
          setShowContent(true);
        });
      });
    } else if (location.pathname !== '/') {
      setLogoAnimationComplete(true);
    }
  }, [logoAnimationComplete]);
  
  const DelayedFallback = () => {
    const [show, setShow] = React.useState(false);
    React.useEffect(() => {
      const timer = setTimeout(() => setShow(true), 300);
      return () => clearTimeout(timer);
    }, []);
  
    return show ? <Loader/> : null;
  };
  
 
  return (
    <ThemeProvider logoAnimationComplete={logoAnimationComplete}>
      {location.pathname === '/' && (
        <LogoAnimation handleAnimationComplete={handleAnimationComplete} logoAnimationComplete={logoAnimationComplete} />
      )}
      <ThemeSettings>
        <ThemeLocalization>
          {logoAnimationComplete && (
            <>
      <motion.div
  initial={{ translateY: '100%' }}
  animate={{ translateY: '0%' }}
  exit={{ translateY: '100%' }}
  transition={{
    duration: 0.8,
    ease: [0.4, 0, 0.2, 1],
  }}
  style={{
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100dvh',
    zIndex: 10,
    background: themeColor,
    transformOrigin: 'bottom',
    overflowY: location.pathname === '/' ? (showOverflow ? 'auto' : 'hidden') : 'scroll',
  }}
  onAnimationComplete={() => {
    setShowOverFlow(true);
  }}
>

                <>
                  <NavBar setOpen={setOpen} showContent={showContent} setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} />
                  <LoaderWrapper fallback={location.pathname !== '/' ? <Loader /> : null} >
               
                  <Suspense fallback={location.pathname !== '/' ? <Loader /> : null}>
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
               
                  </Suspense>
                                </LoaderWrapper>

                  
                  {location.pathname !== '/' && (
                    <Suspense fallback={null}>
                    <Footer />
                    </Suspense>
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
