import React, { useEffect, useState } from "react";
import { services as fetchServicesApi } from "../../services/websiteApis/services";
import ServicesLogo from '../../assets/spacenetLogo/servicesLogo';
import Grid from '@mui/material/Grid';
import { motion } from 'framer-motion';
import LandingPage from "../landingPage";
import { Helmet } from "react-helmet";
import { getServicesCache, setServicesCache } from "../../services/websiteApis/servicesCache";

const InnerApp = ({ showLogo,logoAnimationComplete }) => {
	const [servicesList, setServicesList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isAboutActive, setIsAboutActive] = useState(true);

	useEffect(() => {
		const fetchServices = async () => {
			setLoading(true);

			// Try shared cache first
			const cached = getServicesCache();
			if (cached) {
				setServicesList([
					{
						id: 0,
						title: "ABOUT",
						title_ar: "ABOUT",
						title_ku: "ABOUT",
						description: "Description for About",
						img: <ServicesLogo isaboutactive={isAboutActive} />,
					},
					...cached,
				]);
				setLoading(false);
				return;
			}

			try {
				const responseData = await fetchServicesApi();
				const fetchedServices = Array.isArray(responseData?.data) ? responseData.data : [];

				// Update shared cache
				setServicesCache(fetchedServices);

				setServicesList([
					{
						id: 0,
						title: "ABOUT",
						title_ar: "ABOUT",
						title_ku: "ABOUT",
						description: "Description for About",
						img: <ServicesLogo isaboutactive={isAboutActive} />,
					},
					...fetchedServices,
				]);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchServices();
	}, []);

	// Update About image when isAboutActive changes
	useEffect(() => {
		setServicesList(prev => prev.map(s => s.id === 0 ? { ...s, img: <ServicesLogo isaboutactive={isAboutActive} /> } : s));
	}, [isAboutActive]);

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>SPACECRAFT</title>
				<link rel="canonical" href="https://spacecraftiq.com" />
			</Helmet>
			<Grid
				sx={{
					background: showLogo ? '#051A2F' : 'transparent',
					overflow: 'hidden',
				}}
			>
				<motion.div
					className={!showLogo && 'root-container'}
					initial={{ opacity: 0, y: 150 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: 0 }}
					transition={{ duration: 1 }}
				>
					<LandingPage
						loading={loading}
						servicesList={servicesList}
						setServicesList={setServicesList}
						isAboutActive={isAboutActive}
						setIsAboutActive={setIsAboutActive}
            logoAnimationComplete={logoAnimationComplete}
					/>
				</motion.div>
			</Grid>
		</>
	);
};

export default InnerApp;
