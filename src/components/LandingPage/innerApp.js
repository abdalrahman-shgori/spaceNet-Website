import React, { useEffect, useState } from "react";
import { services as fetchServicesApi } from "../../services/websiteApis/services";
import ServicesLogo from '../../assets/spacenetLogo/servicesLogo';
import { useTheme } from "@mui/material";
import { Box, Grid } from '@mui/material';
import SvgGroup1 from '../../assets/logoAnimation/group1';
import { motion } from 'framer-motion';
import NavBar from "../navbar/navbar";
import LandingPage from "./landingPage";
import Toggle from "../toggleCompoent/toggle";


const InnerApp = ({
  showContent,
  setShowContent,
  showLogo,
  setShowLogo,
  draweOpen,
  setDrawerOpen,
  setThemeColor
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
  const theme = useTheme();
  const handleAnimationComplete = () => {
    setShowContent(true);
    setTimeout(() => {
      setShowLogo(false);
    }, 500);
  };

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
            {/* <NavBar setDrawerOpen={setDrawerOpen} /> */}
            <LandingPage
              loading={loading}
              servicesList={servicesList}
              setServicesList={setServicesList}
              isAboutActive={isAboutActive}
              setIsAboutActive={setIsAboutActive}
            />
           
          </motion.div>
        

        </>
      )}
    </Grid>
  );
};

export default InnerApp