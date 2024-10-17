import React, { useState } from 'react';
import ThemeProvider, { useColorMode } from './ThemeProvider';
import SvgGroup1 from './assets/logoAnimation/group1';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import NavBar from './components/navbar/navbar';
import LandingPage from './components/LandingPage/landingPage';
import Toggle from './components/toggleCompoent/toggle';
const App = () => {
  const [showContent, setShowContent] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  return (
    <ThemeProvider>
      <InnerApp
        showContent={showContent}
        setShowContent={setShowContent}
        showLogo={showLogo}
        setShowLogo={setShowLogo}
      />
      
    </ThemeProvider>
  );
};

const InnerApp = ({ showContent, setShowContent, showLogo, setShowLogo }) => {
  const [draweOpen,setDrawerOpen]=useState(false)
  const theme = useTheme();
  const handleAnimationComplete = () => {
    setShowContent(true);
    setTimeout(() => {
      setShowLogo(false);
    }, 500);
  };
  return (
    <div
      className='root-container'
      style={{
        minHeight: '100vh',
        background: showLogo ? '#051A2F' : 'transparent',
        overflow: showLogo ? 'hidden' : 'auto',
      }}
    >
      {showLogo && <SvgGroup1 onAnimationComplete={handleAnimationComplete} />}

      {showContent && (
        <>
          <motion.div
            initial={{ y: '100%', opacity: 0, height: "100vh" }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              background: theme.palette.background.default,
            }}
          >
            <NavBar setDrawerOpen={setDrawerOpen}/>
            <LandingPage/>

          </motion.div>
          <Toggle drawerOpen={draweOpen} setDrawerOpen={setDrawerOpen} />

        </>
      )}
    </div>
  );
};

export default App;
