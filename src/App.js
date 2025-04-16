
import React, { lazy, Suspense, useEffect, useState } from 'react';
import ThemeProvider from './ThemeProvider';
import { Route, Routes, useLocation } from 'react-router-dom';
import InnerApp from './pages/LandingPage/innerApp';
import NavBar from './components/navbar/navbar';
import { motion } from 'framer-motion';
import Toggle from './components/toggleCompoent/toggle';
import LogoAnimation from './pages/LandingPage/logoaniamtion';
import ThemeSettings from './pagedirection/ThemeSettings';
import ThemeLocalization from './locals/ThemeLocalization';
import { useTranslation } from 'react-i18next';

const BlogsAndNews = lazy(()=>import("./components/blogsAndNews/blogsAndNews"))
const BlogDetails = lazy(()=>import("./components/blogsAndNews/blogDetails"))
const Footer = lazy(()=>import("./components/footer"))
const SoftwareSection = lazy(()=>import("./pages/softwarePage"))
const CoreIt = lazy(()=>import("./pages/coreIt"))
const Academics = lazy(()=>import("./pages/academics"))
const DesignAndBranding = lazy(()=>import('./pages/design&branding'))
const BasicModal = lazy(()=>import('./components/contactUs/contactUs'))

const App = () => {
  if (process.env.NODE_ENV === 'development') {
    console.warn = () => { };
    console.error = () => { };
  }
  const [open, setOpen] = React.useState(false);
  const [showOverflow,setShowOverFlow]=useState(false)
  console.log(showOverflow)
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


  // useEffect(() => {
  //   const handleOverflow = () => {
  //     if (location.pathname === '/') {
  //       document.body.style.overflow = 'hidden';

  //       const timer = setTimeout(() => {
  //         document.body.style.overflow = 'auto';
  //       }, 3500);

  //       return () => clearTimeout(timer);
  //     } else {
  //       document.body.style.overflow = 'auto';
  //     }
  //   };
  //   handleOverflow();
  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [location]);

  return (
    <ThemeProvider logoAnimationComplete={logoAnimationComplete}>
      {location.pathname === '/' && (
      <motion.div
      initial={{ height: "100dvh" }}
      animate={{ height: showContent ? "0" : "100dvh" }}
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

               initial={location.pathname === '/' &&{ height: 0, originY: 1 }}
               animate={{
                 height:"100dvh",       
                            background: themeColor,
               }} 
               exit={{ scaleY: [0, 1.1, 0]}}
     
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
                  overflow:showOverflow ? "auto" : "hidden"
      
                }}
                onUpdate={({ height }) => {
                  if (height === '100dvh') {
                      setShowOverFlow(true)
                  } 
              }}
              >
                <>
                  <NavBar setOpen={setOpen} showContent={showContent} setDrawerOpen={setDrawerOpen}  drawerOpen={drawerOpen} />
                 <Suspense fallback="loading">
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
                    <Route path='/software' element={<SoftwareSection  setOpen={setOpen} />} />
                    <Route path='/design-branding' element={<DesignAndBranding  setOpen={setOpen} />} />
                    <Route path='/academics' element={<Academics  setOpen={setOpen} />} />
                    <Route path='/core-it' element={<CoreIt  setOpen={setOpen} />} />
                    <Route path='/blogs' element={<BlogsAndNews  setOpen={setOpen} />} />
                    <Route path="/blogs/:id" element={<BlogDetails  setOpen={setOpen} />} />
                  </Routes>
                 </Suspense>
                 
                  {location.pathname !== '/' && (
                    <Suspense fallback=''>
                    <Footer />
                    </Suspense>
                  )}
                </>
              </motion.div>
              <Toggle open={open} setThemeColor={setThemeColor} themeColor={themeColor} drawerOpen={drawerOpen} />
              <Suspense fallback="loading">
              <BasicModal setOpen={setOpen} open={open} />
              </Suspense>
            </>
          )}
        </ThemeLocalization>
      </ThemeSettings>
    </ThemeProvider>
  );
};

export default App;
