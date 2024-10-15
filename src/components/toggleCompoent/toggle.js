import React, { useState } from "react";
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ThemeProvider, { useColorMode } from '../../ThemeProvider';

export default function Toggle() {
    const { toggleColorMode } = useColorMode();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const theme = useTheme();

    const handleToggle = () => {
        toggleColorMode();
        setIsDarkMode((prev) => !prev);
    };

    return (
        <>
            <Box
                onClick={handleToggle}
                sx={{
                    position: 'fixed',
                    right: {
                        lg: '70px',
                        md: '70px',
                        sm: '25px',
                        xs: '25px'
                    },
                    top: {
                        lg: '328px',
                        md: '328px',
                        sm: '256px',
                        xs: '256px'
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
                {/* Text label for Light/Dark */}
                <Typography
                    variant="body2"
                    sx={{
                        position: 'absolute',
                        top: '-55px',
                        left: '50%',
                        transform: 'translateX(-50%) rotate(-90deg)',
                        color: isDarkMode ? '#FFFFFF' : '#051A2F',
                        fontWeight: "light",
                        fontFamily: "var( --English-font-light)",
                        fontSize: "23px"

                    }}
                >
                    {isDarkMode ? 'Dark' : 'Light'}
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
