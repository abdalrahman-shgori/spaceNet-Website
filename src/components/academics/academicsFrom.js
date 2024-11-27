import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import { Grid, useTheme } from '@mui/material';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { motion } from "framer-motion"
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCountries, getCountryCallingCode } from 'libphonenumber-js';
import FirstFormSection from './formSections/firstFormSection';
import SecFormSection from './formSections/secFormSection';
const style = {
    width: "100%",
    bgcolor: 'background.paper',
    overflowY: "auto",
    padding: {
        lg: "74px 0px 0px 0px",
        md: "74px 20px 0px 20px",
        sm: "74px 20px 0px 20px",
        xs: "100px 0px 0px 0px"
    },
    height: "100dvh",
    borderRadius: "none"
};

export default function AcademicsForm({ setEnroll, enroll }) {
    const handleClose = () => setEnroll(false);
    const theme = useTheme()
    const [countries, setCountries] = useState([]);
    const [countryCode, setCountryCode] = useState('+964');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(true);
    const [selectedGender, setSelectedGender] = useState('');
    const handleChange = (event) => {
        setSelectedGender(event.target.value);
    };
    useEffect(() => {
        const countryCodes = getCountries();
        const countryData = countryCodes.map((country) => ({
            code: country,
            callingCode: `+${getCountryCallingCode(country)}`,
            name: country,
        }));
        setCountries(countryData);
        setLoading(false);
    }, []);
    const handlePhoneChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    return (
        <div>
            <Modal
                open={enroll}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <motion.div
                    initial={{ x: '-100vw' }}
                    animate={{ x: enroll ? 0 : "-100vw" }}
                    transition={{ duration: 0.5 }}
                >
                    <Box sx={style} >
                        <Box sx={{ position: "relative" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "end",
                                    paddingRight: {
                                        lg: "38px",
                                        md: "0px",
                                        sm: "0px",
                                        xs: "20px"
                                    },
                                    position: "absolute",
                                    right: 0,
                                    top: {
                                        lg: -20,
                                        md: -20,
                                        sm: -20,
                                        xs: -70
                                    }
                                }}
                            >
                                <IconButton
                                    aria-label="close"
                                    onClick={handleClose}
                                    sx={{
                                        display: "grid",
                                        alignContent: "end",
                                        background: "#A3A3A3",
                                        ":hover": {
                                            background: "#A3A3A3"
                                        }
                                    }}
                                >
                                    <CloseRoundedIcon
                                        sx={{
                                            fontSize: { lg: "30px", md: "30px", sm: "25px", xs: "20px" },
                                            color: theme.palette.mode === 'dark' ? "#051A2F" : "#FFFFFF"
                                        }}
                                    />
                                </IconButton>
                            </Box>
                        </Box>
                        <Grid
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                gap: {
                                    lg: "66px",
                                    md: "66px",
                                    sm: "45px",
                                    xs: "45px"
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: {
                                        lg: "64px",
                                        md: "48px",
                                        sm: "38px",
                                        xs: "28px"
                                    },
                                    maxWidth: {
                                        lg: "980px",
                                        md: "680px",
                                        sm: "525px",
                                        xs: "325px"
                                    },
                                    width: "100%",
                                    textAlign: "center",
                                    fontFamily: "var(--English-font)",
                                    lineHeight: {
                                        lg: "69px",
                                        md: "69px",
                                        sm: "30px",
                                        xs: "30px"
                                    },
                                    position: "relative"

                                }}
                            >
                                How Might We Help?
                            </Typography>
                            <Box
                                sx={{
                                    padding: {
                                        lg: "0px 0px 28px 0px",
                                        md: "0px 0px 28px 0px",
                                        sm: "0px 0px 50px 0px",
                                        xs: "0px 0px 50px 0px",
                                    },
                                    borderRadius: {
                                        lg: "48px",
                                        md: "48px",
                                        sm: "30px",
                                        xs: "30px"
                                    },
                                    maxWidth: "1133px",
                                    width: "100%",
                                    height: {
                                        lg: "100%",
                                        md: "100%",
                                        sm: "100%",
                                        xs: "unset"
                                    }
                                }}
                            >
                                <Grid container>
                                    <FirstFormSection
                                        theme={theme}
                                        countryCode={countryCode}
                                        setCountryCode={setCountryCode}
                                        countries={countries}
                                        phoneNumber={phoneNumber}
                                        handlePhoneChange={handlePhoneChange}
                                        selectedGender={selectedGender}
                                        handleChange={handleChange}
                                    />
                                    <SecFormSection
                                        theme={theme}
                                    />
                                </Grid>
                            </Box>
                        </Grid>
                    </Box>
                </motion.div>
            </Modal>
        </div>
    );
}
