import React, { useEffect, useState } from "react";
import { services as fetchServicesApi } from "../../services/websiteApis/services";
import ServicesLogo from '../../assets/spacenetLogo/servicesLogo';
import { Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import LandingPage from "../landingPage";


const InnerApp = ({
  showContent,
  setShowContent,
  showLogo,
  setShowLogo,
}) => {
  const [servicesList, setServicesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAboutActive, setIsAboutActive] = useState(true)
  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        const responseData = await fetchServicesApi();
        const fetchedServices = Array.isArray(responseData?.data)
          ? responseData.data
          : [];
        const combinedServices = [
          {
            id: 0,
            title: "ABOUT",
            description: "Description for About",
            img: <ServicesLogo isaboutactive={isAboutActive} />,
          },
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

  useEffect(() => {
    setServicesList((prevServices) => {
      const updatedServices = prevServices.map((service) =>
        service.id === 0
          ? { ...service, img: <ServicesLogo isaboutactive={isAboutActive} /> }
          : service
      );
      return updatedServices;
    });
  }, [isAboutActive]);


  const [overflow, setOverFlow] = useState('hidden')
  useEffect(() => {
    const timer = setTimeout(() => {
      setOverFlow('auto')
    }, 3000);
    return () => clearTimeout(timer)
  }, [])
  return (
    <Grid
      sx={{
        background: showLogo ? '#051A2F' : 'transparent',
        overflow: 'hidden',
      }}
    >
      {showContent && (
        <>
          <motion.div
            className={!showLogo && 'root-container'}
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{
              duration: 1
            }}
          >
            <LandingPage
              loading={loading}
              servicesList={servicesList}
              setServicesList={setServicesList}
              isAboutActive={isAboutActive}
              setIsAboutActive={setIsAboutActive}
            />
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
            </Box>
          </motion.div>
        </>
      )}
    </Grid>
  );
};

export default InnerApp