import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import { Button, CircularProgress, Grid, TextField, useTheme, Snackbar } from '@mui/material';
import EmailIcon from "../../assets/contactUs/emailIcon.svg"
import CallIcon from "../../assets/images/phone.svg"
import LocationIncon from "../../assets/contactUs/locationIcon.svg"
import FaceBookSvg from '../../assets/socialMediaIcons/facebook';
import InstaSvg from '../../assets/socialMediaIcons/instaGram';
import LinkedInSvg from '../../assets/socialMediaIcons/linkedIn';
import PaintrestSvg from '../../assets/socialMediaIcons/paintrest';
import WhatsAppSvg from '../../assets/socialMediaIcons/whatsApp';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { motion } from "framer-motion"
import { useState } from 'react';
import { ContactUsApi } from '../../services/websiteApis/services';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const style = {
    width: "100%",
    bgcolor: 'background.paper',
    overflowY: "auto",
    padding: {
        lg: "74px 0px 74px 0px",
        md: "74px 20px 74px 20px",
        sm: "74px 20px 74px 20px",
        xs: "100px 20px 30px 20px"
    },
    height: "100dvh",
    borderRadius: "none"
};



const socialMedia = [
    { icon: <FaceBookSvg />, link: "https://www.facebook.com/share/19yTYEYifS/?mibextid=wwXIfr", },
    { icon: <InstaSvg />, link: "https://www.instagram.com/spacenetiq/profilecard/?igsh=MWYxc2dldmFzamV2OQ==", },
    { icon: <LinkedInSvg />, link: "https://www.linkedin.com/company/spacenetiq/", },
    { icon: <PaintrestSvg />, link: "https://www.pinterest.com/spacenetiq/", },
    { icon: <WhatsAppSvg />, link: "https://wa.me/9647505550558", },
];
const fieldTextStyle = {
    fontSize: {
        lg: "15px",
        md: "15px",
        sm: "14px",
        xs: "14px"
    },
    fontFamily: "var(--English-font-semibold)",
    lineHeight: {
        lg: "21px",
        md: "21px",
        sm: "14px",
        xs: "14px"
    },
    color: "#000000"
}
const textFieldStyle = {
    mt: {
        lg: "6px",
        md: "6px",
        sm: "6px",
        xs: "4px"
    },
    mb: {
        lg: "13px",
        md: "13px",
        sm: "13px",
        xs: "15px"
    },
    background: "#FFFFFF",
    borderRadius: "19.22px",
    '& .MuiOutlinedInput-root': {
        borderRadius: '19.22px',
        '& fieldset': {
            border: 'none',
        },
        '&:hover fieldset': {
            border: 'none',
        },
        '&.Mui-focused fieldset': {
            border: 'none',
        },
        '& .MuiInputBase-input::placeholder': {
            color: '#29547E',
            fontFamily: "var(--English-font)"
        },
        '& .MuiInputBase-input': {
            color: '#29547E',
        },
    },
}
export default function BasicModal({ setOpen, open }) {
    const { t } = useTranslation()
    const contactUsWays = [
        { id: 0, img: EmailIcon, title: "info@spacenetiq.com" },
        { id: 1, img: CallIcon, title: "+964 (0) 750 555 0558" },
        { id: 2, img: LocationIncon, title: <> {t("ContactUs.empire")} <br /> {t("ContactUs.building")} </> },
    ]
    const handleClose = () => setOpen(false);
    const location = useLocation()
    const theme = useTheme()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!name || !email || !message) {
            setError(t("ContactUs.Allfields"));
            return;
        }
        try {
            setLoading(true);
            const response = await ContactUsApi(name, email, message);
            setName('');
            setEmail('');
            setMessage('');
            setError(null);
            setSnackbarMessage(t("ContactUs.Messagesent"));
            setSnackbarSeverity('success');
            setSnackbarOpen(true);

        } catch (error) {
            setError('Failed to send the message');
            setLoading(false);
            setSnackbarMessage('Failed to send the message');
            setSnackbarSeverity('error');
            setSnackbarOpen(true);
        }
        finally {
            setLoading(false);

        }
    };
    const handleSnackbarClose = () => {
        setSnackbarOpen(false);
    };
    useEffect(() => {
        if (name && email && message) {
            setError(null)
        }
    }, [name, email, message, error])
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <motion.div
                    initial={{ x: '-100vw' }}
                    animate={{ x: open ? 0 : "-100vw" }}
                    transition={{ duration: 0.5 }}

                >
                    <Box sx={style}>
                        <Box sx={{ position: "relative" }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "end",
                                    paddingRight: {
                                        lg: "38px",
                                        md: "0px",
                                        sm: "0px",
                                        xs: "0px"
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
                                            fontSize: { lg: "30px", md: "30px", sm: "25px", xs: "25px" },
                                            color: theme.palette.mode === 'dark' ? "#051A2F" : "#FFFFFF"
                                        }} />
                                </IconButton>
                            </Box>
                        </Box>

                        <Grid item
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                gap: {
                                    lg: "37px",
                                    md: "37px",
                                    sm: "23px",
                                    xs: "23px"
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: {
                                        lg: "64px",
                                        md: "48px",
                                        sm: "28px",
                                        xs: "24px"
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
                                {t("ContactUs.weLove")}


                            </Typography>

                            <Box
                                sx={{
                                    background: location.pathname === '/academics' ? "#FA6423" :
                                        location.pathname === '/core-it' ? "#E9FA50" :
                                            location.pathname === '/design-branding' ? '#1CB786' :
                                                "#9D89FC",
                                    padding: {
                                        lg: "83px 106px 28px 106px",
                                        md: "83px 106px 28px 106px",
                                        sm: "50px 34px 50px 34px",
                                        xs: "50px 34px 50px 25px",
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

                                    <Grid item lg={6} md={6} sm={6} xs={12}
                                        sx={{
                                            paddingRight: {
                                                lg: "unset",
                                                md: "unset",
                                                sm: "20px",
                                                xs: "unset"
                                            }
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: {
                                                    lg: "18px",
                                                    md: "18px",
                                                    sm: "12px",
                                                    xs: "12px"
                                                }
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: {
                                                        lg: "28px",
                                                        md: "28px",
                                                        sm: "24px",
                                                        xs: "24px"
                                                    },
                                                    fontFamily: "var(--English-font-semibold)",
                                                    textTransform: "capitalize",
                                                    color: "#000000"
                                                }}
                                            >
                                                {t("ContactUs.getinTouch")}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: {
                                                        lg: "15px",
                                                        md: "15px",
                                                        sm: "16px",
                                                        xs: "16px"
                                                    },
                                                    color: "#FFFFFF",
                                                    fontFamily: "var(--English-font)",
                                                    maxWidth: {
                                                        lg: "310px",
                                                        md: "310px",
                                                        sm: "275px",
                                                        xs: "275px"
                                                    },
                                                    width: "100%"
                                                }}
                                            >
                                                {t("ContactUs.getinTouchToday")}
                                            </Typography>
                                        </Box>
                                        <Box
                                            sx={{
                                                marginTop: {
                                                    lg: "44px",
                                                    md: "44px",
                                                    sm: "44px",
                                                    xs: "50px"
                                                }
                                            }}
                                        >
                                            {contactUsWays.map((item, index) => (
                                                <Box
                                                    key={index}
                                                    sx={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: {
                                                            lg: "9px",
                                                            md: "9px",
                                                            sm: "7px",
                                                            xs: "7px"
                                                        },
                                                        marginTop: {
                                                            lg: index === 1 ? "9px" : index === 2 && "1px",
                                                            md: index === 1 ? "9px" : index === 2 && "1px",
                                                            sm: index === 1 ? "7px" : index === 2 && "5px",
                                                            xs: index === 1 ? "7px" : index === 2 && "5px"
                                                        },

                                                    }}
                                                >
                                                    <img src={item.img} />
                                                    <Typography
                                                        sx={{
                                                            fontSize: {
                                                                lg: "19px",
                                                                md: "19px",
                                                                sm: "15px",
                                                                xs: "15px"
                                                            },
                                                            fontFamily: "var(--English-font)",
                                                            color: "#FFFFFF",
                                                            direction: index === 1 && "ltr"

                                                        }}
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "14px",
                                                marginTop: {
                                                    lg: "33px",
                                                    md: "33px",
                                                    sm: "50px",
                                                    xs: "50px"
                                                }
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: {
                                                        lg: "19px",
                                                        md: "19px",
                                                        sm: "17px",
                                                        xs: "17px"
                                                    },
                                                    fontFamily: "var(--English-font-semibold)",
                                                    color: "#051A2F",
                                                    lineHeight: {
                                                        lg: "21px",
                                                        md: "21px",
                                                        sm: "19.8px",
                                                        xs: "19.8px"
                                                    }
                                                }}
                                            >
                                                {t("ContactUs.FollowUs")}
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: "9px", }}>
                                                {socialMedia.map((item, index) => (
                                                    <Box
                                                        component="a"
                                                        key={index}
                                                        href={item.link}
                                                        target="_blank"
                                                        rel="noopener"
                                                        sx={{
                                                            color: item.color,
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        {item.icon}
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={6} xs={12}>
                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontSize: { lg: '28px', md: '28px', sm: '24px', xs: '24px' },
                                                    fontFamily: 'var(--English-font-semibold)',
                                                    textTransform: 'capitalize',
                                                    marginTop: { lg: 'unset', md: 'unset', sm: 'unset', xs: '67px' },
                                                    color: '#000000',
                                                }}
                                            >
                                                {t("ContactUs.SendMessage")}
                                            </Typography>

                                            <form onSubmit={handleSubmit}>
                                                <Box sx={{ marginTop: { lg: '37px', md: '37px', sm: '37px', xs: '21px' } }}>
                                                    <Box>
                                                        <Typography sx={{ ...fieldTextStyle }}>{t("ContactUs.Name")}</Typography>
                                                        <TextField
                                                            fullWidth
                                                            placeholder={t("ContactUs.YourName")}
                                                            value={name}
                                                            onChange={(e) => setName(e.target.value)}
                                                            sx={{ ...textFieldStyle }}
                                                        />
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ ...fieldTextStyle }}> {t("ContactUs.Email")} </Typography>
                                                        <TextField
                                                            fullWidth
                                                            type="email"
                                                            placeholder={t("ContactUs.YourEmail")}
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            sx={{ ...textFieldStyle }}
                                                            required
                                                        />
                                                    </Box>
                                                    <Box>
                                                        <Typography sx={{ ...fieldTextStyle }}> {t("ContactUs.Message")}</Typography>
                                                        <TextField
                                                            fullWidth
                                                            multiline
                                                            rows={4}
                                                            placeholder={t("ContactUs.YourMessage")}
                                                            value={message}
                                                            onChange={(e) => setMessage(e.target.value)}
                                                            sx={{ ...textFieldStyle }}
                                                            required
                                                        />
                                                    </Box>
                                                </Box>

                                                {/* Display error message */}
                                                {error && (
                                                    <Typography color="error" sx={{ marginTop: '10px' }}>
                                                        {error}
                                                    </Typography>
                                                )}

                                                {/* Submit button */}
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        justifyContent: 'end',
                                                        marginTop: { lg: '30px', md: '30px', sm: '30px', xs: '32px' },
                                                    }}
                                                >
                                                    <Button
                                                        type="submit"  // Submit the form
                                                        sx={{
                                                            bgcolor: '#000',
                                                            color: '#fff',
                                                            width: 'fit-content',
                                                            padding: { lg: '12px 27px', md: '12px 27px', sm: '12px 27px', xs: '9px 21px' },
                                                            fontSize: { lg: '17px', md: '17px', sm: '17px', xs: '13.5px' },
                                                            fontFamily: 'var(--English-font-semibold)',
                                                            borderRadius: '34px',
                                                            textTransform: 'capitalize',
                                                        }}
                                                        disabled={loading}  // Disable button while loading
                                                    >
                                                        {loading ? <CircularProgress style={{ color: "#fff" }} size={24} color="inherit" /> : t("ContactUs.SubmitNow")}
                                                    </Button>
                                                </Box>
                                            </form>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Box>
                    <Snackbar
                        open={snackbarOpen}
                        autoHideDuration={3000}
                        onClose={handleSnackbarClose}
                        message={snackbarMessage}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        action={
                            <Button color="inherit" size="small" onClick={handleSnackbarClose}>
                                {t("ContactUs.CLOSE")}
                            </Button>
                        }
                    />
                </motion.div>
            </Modal>
        </div>
    );
}
