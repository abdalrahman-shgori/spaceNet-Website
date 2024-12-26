import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import './LanguageSwitcher.css'
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation();
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedValue, setSelectedValue] = useState('en');
    const selectLanguage = i18n.language;

    const handleMenuItemClick = (language) => {
        handleClose();
        setSelectedValue(language);
        i18n.changeLanguage(language);
    };


    const handleBoxClick = (event) => {
        if (anchorEl) {
            handleClose();
        } else {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <Box sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "end",
                paddingLeft: selectLanguage === "en" ? { lg: "96px", sm: "6px", xs: "26px" } : { lg: "56px", sm: "26px", xs: "26px" },
                paddingRight: selectLanguage === "en" ? { lg: "56px", sm: "26px", xs: "26px" } : { lg: "96px", sm: "6px", xs: "6px" },
            }}>
                <Box
                    sx={{
                        borderRadius: '50px',
                        border: '1px solid #FFF',
                        color: '#FFFFFF',
                        padding: { lg: "8px 24px", sm: "", xs: "6px 11.5px" },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: "center",
                        position: 'relative',
                        cursor: "pointer",
                        width: "30px",
                        height: "40px"
                    }}
                    onClick={handleBoxClick}
                >
                    <Button
                        sx={{
                            color: "#FFFFFF",
                            padding: "6px 0px",
                            display: { lg: "block", sm: "none", xs: "none" },
                            fontFamily: "var(--English-font)",
                            fontWeight: "600",
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                        }}
                        disableRipple
                    >
                        {selectLanguage === 'en' ? 'EN' : selectLanguage === 'ar' ? 'AR' : 'KU'}
                    </Button>
                    <Button
                        sx={{
                            color: "#FFFFFF",
                            padding: "6px 0px",
                            display: { lg: "none", sm: "flex", xs: "flex" },
                            width: "100%",
                            minWidth: "40px",
                            height: { lg: "", xs: "0px" },
                            textTransform: "unset",
                            fontFamily: "var(--English-font)",
                        }}
                        disableRipple
                    >
                        {selectLanguage === 'en' ? 'EN' : selectLanguage === 'ar' ? 'AR' : 'KU'}
                    </Button>

                    <Menu
                        sx={{
                            cursor: "pointer",
                        }}
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                    >
                        {selectLanguage === "en" ? (
                            <>
                                <MenuItem
                                    sx={{
                                        minHeight: "0px", fontFamily: "var(--English-font)",
                                        '&.Mui-focusVisible': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                    onClick={() => handleMenuItemClick('ar')}
                                    disableRipple
                                >
                                    AR
                                </MenuItem>
                                <MenuItem
                                    sx={{
                                        minHeight: "0px", fontFamily: "var(--English-font)",
                                        '&.Mui-focusVisible': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                    onClick={() => handleMenuItemClick('ku')}
                                    disableRipple
                                >
                                    KU
                                </MenuItem>
                            </>
                        ) : selectLanguage === "ar" ? (
                            <>
                                <MenuItem
                                    sx={{
                                        minHeight: "0px", fontFamily: "var(--English-font)",
                                        '&.Mui-focusVisible': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                    onClick={() => handleMenuItemClick('en')}
                                    disableRipple
                                >
                                    EN
                                </MenuItem>
                                <MenuItem
                                    sx={{
                                        minHeight: "0px", fontFamily: "var(--English-font)",
                                        '&.Mui-focusVisible': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                    onClick={() => handleMenuItemClick('ku')}
                                    disableRipple
                                >
                                    KU
                                </MenuItem>
                            </>
                        ) : (
                            <>
                                <MenuItem
                                    sx={{
                                        minHeight: "0px", fontFamily: "var(--English-font)",
                                        '&.Mui-focusVisible': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                    onClick={() => handleMenuItemClick('en')}
                                    disableRipple
                                >
                                    EN
                                </MenuItem>
                                <MenuItem
                                    sx={{
                                        minHeight: "0px", fontFamily: "var(--English-font)",
                                        '&.Mui-focusVisible': {
                                            backgroundColor: 'transparent',
                                        },
                                    }}
                                    onClick={() => handleMenuItemClick('ar')}
                                    disableRipple
                                >
                                    AR
                                </MenuItem>
                            </>
                        )}
                    </Menu>
                </Box>
            </Box>
        </>
    );
};

export default LanguageSwitcher;