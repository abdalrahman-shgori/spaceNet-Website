import React, { useEffect, useState } from 'react';
import ThemeProvider, { useColorMode } from './ThemeProvider';
import SvgGroup1 from './assets/logoAnimation/group1';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import NavBar from './components/navbar/navbar';
import LandingPage from './components/LandingPage/landingPage';
import Toggle from './components/toggleCompoent/toggle';
import { Box, Grid } from '@mui/material';
import { Route, Router, Routes } from 'react-router-dom';
import { services as fetchServicesApi } from "../src/services/websiteApis/services";
import ServicesLogo from './assets/spacenetLogo/servicesLogo';

const App = () => {
  const [showContent, setShowContent] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  return (
    <ThemeProvider>
      <Routes>
           <Route path='/' element={ <InnerApp
        showContent={showContent}
        setShowContent={setShowContent}
        showLogo={showLogo}
        setShowLogo={setShowLogo}
      />}/>

      </Routes>
     

    </ThemeProvider>
  );
};

const InnerApp = ({ showContent, setShowContent, showLogo, setShowLogo }) => {
  const [servicesList, setServicesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
        try {
            setLoading(true);
            const responseData = await fetchServicesApi();
            const fetchedServices = Array.isArray(responseData?.data)
                ? responseData.data
                : [];
            const combinedServices = [
                { id: 0, title: "ABOUT", description: "Description for About", img: <ServicesLogo /> },
                ...fetchedServices,
            ];
            setServicesList(combinedServices);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching services:", error);
            setLoading(false);
        }
    };
    fetchServices();
}, []);
  const [draweOpen, setDrawerOpen] = useState(false)
  const theme = useTheme();
  const handleAnimationComplete = () => {
    setShowContent(true);
    setTimeout(() => {
      setShowLogo(false);
    }, 500);
  };
  
  return (
    <Grid
 
      sx={{
        minHeight: {
          lg: '100vh',
          md: '100vh',
          sm: '100vh',
          xs: '100dvh'
        },
        background: showLogo ? '#051A2F' : '#051A2F',
        overflow: showLogo ? 'hidden' : 'auto',
      }}
    >
      {showLogo && <SvgGroup1 onAnimationComplete={handleAnimationComplete} />}

      {showContent && (
        <>
          <motion.div
          className={!showLogo && 'root-container'}
            initial={{ y: '100%', opacity: 0, height: "100dvh" }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              background: theme.palette.background.default,
            }}
          >
            <NavBar setDrawerOpen={setDrawerOpen} />
            <LandingPage 
            loading={loading}
            servicesList={servicesList}
            setServicesList={setServicesList}
            />
            <Toggle drawerOpen={draweOpen} setDrawerOpen={setDrawerOpen} />

          </motion.div>
        



        </>
      )}
    </Grid>
  );
};

export default App;
