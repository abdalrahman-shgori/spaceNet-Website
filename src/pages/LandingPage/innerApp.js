import React, { useEffect, useState } from "react";
import { services as fetchServicesApi } from "../../services/websiteApis/services";
import ServicesLogo from '../../assets/spacenetLogo/servicesLogo';
import Grid  from '@mui/material/Grid';
import { motion } from 'framer-motion';
import LandingPage from "../landingPage";
const InnerApp = ({
  showLogo,
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
            title_ar: "ABOUT",
            title_ku: "ABOUT",
            description: "Description for About",
            img: <ServicesLogo isaboutactive={isAboutActive} />,
          },
          ...fetchedServices,
        ];
        setServicesList(combinedServices);
        setLoading(false);
      } catch (error) {
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


  return (
    <Grid
      sx={{
        background: showLogo ? '#051A2F' : 'transparent',
        overflow: 'hidden',
      }}
    >
   
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
           
          </motion.div>
        </>
    </Grid>
  );
};

export default InnerApp