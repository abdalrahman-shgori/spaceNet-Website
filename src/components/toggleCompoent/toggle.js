import React, { useState } from "react";
import { Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ThemeProvider, { useColorMode } from '../../ThemeProvider';

export default function Toggle({ drawerOpen }) {
    const { toggleColorMode } = useColorMode();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const theme = useTheme();
    console.log(drawerOpen, "wewewe")
    const handleToggle = () => {
        toggleColorMode();
        setIsDarkMode((prev) => !prev);
    };
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isTabScreen = useMediaQuery(theme.breakpoints.only('md'));
    return (
        <>
            <Box
              
                onClick={handleToggle}
                sx={{
                    zIndex: "9999",
                    position: 'fixed',
                    right: {
                        lg: '58px',
                        md: '60px',
                        sm: '15px',
                        xs: '15px'
                    },
                    top: {
                        lg: '328px',
                        md: '328px',
                        sm: '200px',
                        xs: '300px'
                    },
                    width: '38px',
                    height: '106px',
                    backgroundColor: isDarkMode ? "#051A2F" : '#051A2F',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    border: isDarkMode && "2px solid #FFFFFF",
                }}
            >
                <Typography
                    variant="body2"
                    sx={{
                        position: 'absolute',
                        top: '-55px',
                        left: '50%',
                        transform: 'translateX(-50%) rotate(-90deg)',
                        color: drawerOpen === true && !isSmallScreen ? '#000000' : (isDarkMode ? '#FFFFFF' : '#051A2F'), // Check this line
                        fontWeight: "light",
                        fontFamily: "var( --English-font-light)",
                        fontSize: "23px"

                    }}
                >
                    {isDarkMode ? ' Light' : 'Dark'}
                </Typography>

                <Box
                    sx={{
                        position: 'absolute',
                        bottom: isDarkMode ? '6px' : 'calc(100% - 36px)',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '26px',
                        height: '26px',
                        backgroundColor: isDarkMode ? '#E9FA50' : "#9D89FC",
                        borderRadius: '50%',
                        transition: 'bottom 0.3s ease',
                    }}
                />
            </Box>
        </>
    );
}
