import React, { useState, useEffect } from "react";
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useColorMode } from '../../ThemeProvider';

export default function Toggle({ drawerOpen }) {
    const { toggleColorMode } = useColorMode();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const handleToggle = () => {
        toggleColorMode();
        setIsDarkMode((prev) => !prev);
    };

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Box
                onClick={handleToggle}
                sx={{

                    zIndex: "9999",
                    position: 'fixed',
                    right: {
                        xl:"70px",
                        lg: '70px',
                        md: '60px',
                        sm: '10px',
                        xs: '15px'
                    },
                    top: {
                        lg: '328px',
                        md: '280px',
                        sm: '300px',
                        xs: '260px'
                    },
                    width: '30px',
                    height: '92px',
                    scale: {
                        lg: 1,
                        md: 1,
                        sm: 1,
                        xs: 0.8
                    },
                    backgroundColor:'#051A2F',
                    borderRadius: '18px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease, opacity 0.5s ease',
                    border: isDarkMode && !drawerOpen && "2px solid #FFFFFF",
                    opacity: isVisible ? 1 : 0,
                    paddingLeft:isDarkMode && "12px",
                    paddingRight:isDarkMode && "12px"

                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        position: 'absolute',
                        top: '-55px',
                        left: '50%',
                        transform: 'translateX(-50%) rotate(-90deg)',
                        color: drawerOpen === true && !isSmallScreen ? '#000000' : (isDarkMode ? '#FFFFFF' : '#051A2F'),
                        fontWeight: "light",
                        fontFamily: "var(--English-font-light)",
                        fontSize: "23px"
                    }}
                >
                    {isDarkMode ? ' Light' : 'Dark'}
                </Typography>

                <Box
                    sx={{
                        position: 'absolute',
                        bottom: isDarkMode ? '6px' : 'calc(100% - 28px)',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '22px',
                        height: '22px',
                        backgroundColor: isDarkMode ? '#E9FA50' : "#9D89FC",
                        borderRadius: '50%',
                        transition: 'bottom 0.3s ease',
                    }}
                />
            </Box>
        </>
    );
}
