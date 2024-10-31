import React, { useState, useEffect } from "react";
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from '../../ThemeProvider';
import { useLocation } from "react-router-dom";

export default function Toggle({ drawerOpen, setThemeColor, themeColor }) {
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
        const newThemeColor = pathname === '/' ? theme.palette.background.default : "#fafafa";
        setThemeColor(newThemeColor);
    }, [pathname, theme]);

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
    return (
        <>
            {pathname === '/' && (
                <div
                    className="root-container"
                >
                    <Box

                        onClick={handleToggle}
                        sx={{
                            zIndex: 9999,
                            position: 'fixed',
                            right: {
                                lg: '60px',
                                md: '60px',
                                sm: '15px',
                                xs: '15px',
                            },
                            top: {
                                xl: "100px",
                                lg: '328px',
                                md: '280px',
                                sm: dimension,
                                xs: "280px",
                            },


                            width: '30px',
                            height: '92px',
                            scale: {
                                lg: 1,
                                md: 1,
                                sm: 1,
                                xs: 0.8,
                            },
                            backgroundColor: '#051A2F',
                            borderRadius: '18px',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease, opacity 0.5s ease',
                            border: theme.palette.mode === 'dark' && !drawerOpen ? '2px solid #FFFFFF' : 'none',
                            opacity: isVisible ? 1 : 0,
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

                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: theme.palette.mode === 'dark' ? '6px' : 'calc(100% - 28px)',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '22px',
                                height: '22px',
                                backgroundColor: theme.palette.mode === 'dark' ? '#E9FA50' : "#9D89FC",
                                borderRadius: '50%',
                                transition: 'bottom 0.3s ease',
                            }}
                        />
                    </Box>
                </div>

            )}

        </>
    );
}
