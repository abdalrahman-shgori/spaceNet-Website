
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
import Footer from './components/footer';
import Loader from './components/loadingPage/loading';
import LoaderWrapper from './components/delaySuspens';

const SoftwareSection = React.lazy(() => import('./pages/softwarePage'));
const DesignAndBranding = React.lazy(() => import('./pages/design&branding'));
const Academics = React.lazy(() => import('./pages/academics'));
const CoreIt = React.lazy(() => import('./pages/coreIt'));
const InnerApp = React.lazy(() => import('./pages/LandingPage/innerApp'));

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
  // useEffect(() => {
  //   if (logoAnimationComplete) {
  //     setTimeout(() => {
  //       setShowContent(true);
  //     }, 0);
  //   }
  //   else if (location.pathname !== '/') {
  //     setLogoAnimationComplete(true)
  //   }
  // }, [logoAnimationComplete]);
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
                initial={location.pathname === '/' && { height: 0, originY: 1 }}
                animate={{
                  height: "100dvh",
                  background: themeColor,
                }}
                exit={{ scaleY: [0, 1.1, 0] }}

                transition={{
                  duration: 0.8,
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
                // onUpdate={({ height }) => {
                //   if (height === '100dvh') {
                //     setShowOverFlow(true)
                //   }
                // }}
                onAnimationComplete={()=>{
                  setShowOverFlow(true)
                }}
              >
                <>
                  <NavBar setOpen={setOpen} showContent={showContent} setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} />
                  <Suspense fallback={location.pathname !== '/' ? <Loader /> : null}>
                <LoaderWrapper fallback={location.pathname !== '/' ? <Loader /> : null} minDuration={location.pathname !== '/' ? 2000 : 0}>
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
                  </LoaderWrapper>
                  </Suspense>
              
                  
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
