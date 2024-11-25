import React, { useState, useEffect } from "react";
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from '../../ThemeProvider';
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function Toggle({ drawerOpen, setThemeColor, themeColor,open }) {
    const { toggleColorMode } = useColorMode();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [dimension, setDimension] = useState("30%");
    const theme = useTheme();
    const location = useLocation();
    const { pathname } = location;
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleToggle = () => {
        toggleColorMode();
        setIsDarkMode((prev) => !prev);
    };

    const handleResize = () => {
        if (window.innerHeight > 600) {
            setDimension("450px");
        } else {
            setDimension("200px");
        }
    };

    useEffect(() => {
        const newThemeColor = pathname === '/'
            ? theme.palette.background.default :
            theme.palette.background.paper;
        setThemeColor(newThemeColor);
    }, [pathname, theme.palette.background.paper]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const xlgscreen = useMediaQuery(theme.breakpoints.only('xl'))
    const lgscreen = useMediaQuery(theme.breakpoints.only('lg'))
    const mdscreen = useMediaQuery(theme.breakpoints.only('md'))
    const smscreen = useMediaQuery(theme.breakpoints.only('sm'))
    const xsscreen = useMediaQuery(theme.breakpoints.only('xs'))

    const [ballVisible, setBallVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setBallVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, [ballVisible]);
    return (
        <>
            {(pathname === '/' || drawerOpen) && (
                <motion.div
                    animate={{ x: [100, 0], opacity: [0, 1] }}
                    transition={{ delay: drawerOpen ? 0.2 : 1 }}
                    style={{
                        position: 'fixed',
                        right:
                            xlgscreen ? "55px" :
                                lgscreen ? "55px" :
                                    mdscreen ? "55px" :
                                        smscreen ? "10px" :
                                            xsscreen && "12px",
                        top: 
                        xlgscreen ? "280px" :
                        lgscreen ?'280px':
                        mdscreen?'280px':
                        smscreen?'210px':
                        xsscreen &&'280px',
                        
                        zIndex: 9999,
                        display:open && "none"

                    }}
                >
                    <Box
                        onClick={handleToggle}
                        sx={{
                            width: '30px',
                            height: '92px',
                            background: '#051A2F',
                            borderRadius: '18px',
                            cursor: 'pointer',
                            transition: 'background 0.3s ease',
                            border: theme.palette.mode === 'dark' && !drawerOpen ? '2px solid #FFFFFF' : 'none',
                            paddingLeft: theme.palette.mode === 'dark' ? '12px' : '0',
                            paddingRight: theme.palette.mode === 'dark' ? '12px' : '0',
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                position: 'absolute',
                                top: '-55px',
                                left: '50%',
                                transform: 'translateX(-50%) rotate(-90deg)',
                                color: drawerOpen === true && !isSmallScreen ? '#000000' : (theme.palette.mode === 'dark' ? '#FFFFFF' : '#051A2F'),
                                fontWeight: "light",
                                fontFamily: "var(--English-font-light)",
                                fontSize: "23px"
                            }}
                        >
                            {theme.palette.mode === 'dark' ? 'Dark' : 'Light'}
                        </Typography>

                        {ballVisible && ( // Only render the ball if visible

                            <Box
                                sx={{
                                    position: 'absolute',
                                    bottom: theme.palette.mode === 'dark' ? '6px' : 'calc(100% - 28px)',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '22px',
                                    height: '22px',
                                    background: theme.palette.mode === 'dark' ? '#E9FA50' : "#9D89FC",
                                    borderRadius: '50%',
                                    transition: 'bottom 0.3s ease',
                                }}
                            />

                        )}
                    </Box>
                </motion.div>
            )}
        </>
    );
}
