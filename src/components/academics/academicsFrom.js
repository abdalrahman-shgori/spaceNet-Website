import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import { Grid, useTheme, Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { motion } from "framer-motion"
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { format, getCountries, getCountryCallingCode } from 'libphonenumber-js';
import FirstFormSection from './formSections/firstFormSection';
import SecFormSection from './formSections/secFormSection';
import { getCourses, postRegistration } from '../../services/websiteApis/services';
import { useTranslation } from 'react-i18next';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
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
    const { t } = useTranslation()
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('info');
    const theme = useTheme()
    const [countries, setCountries] = useState([]);
    const [countryCode, setCountryCode] = useState('+964');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(true);
    const [selectedGender, setSelectedGender] = useState('');
    const [selectedCourseType, setSelectedCourseType] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [selectedCoursesId, setSelectedCoursesId] = useState([]);
    const [age,setAge]=useState('')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        age: '',
        gender: '',
        background: '',
        type: '',
        language: '',
        day: '',
        time: '',
        courses: [],
        password: '',
        confirmPassword: "",
    });
    console.log(formData)
    const [data, setData] = useState()
    const handleClose = () => setEnroll(false);
    const handleAgeChange = (e) => {
        setAge(e.target.value);

        setFormData((prevData) => ({
            ...prevData,
            age: e.target.value
        }));
    };
    const handleTimeChange = (newTime) => {
        setSelectedTime(newTime);

    };
    useEffect(() => {
        if (selectedTime) {
            const formattedTime = selectedTime.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' });
            setFormData((prevData) => ({
                ...prevData,
                time: formattedTime
            }));
        }
    }, [selectedTime])

    useEffect(() => {
        if (selectedDate) {
            const formattedDate = selectedDate.toLocaleDateString('en-GB');

            setFormData((prevData) => ({
                ...prevData,
                day: formattedDate,
            }));
        }
    }, [selectedDate])


    const handleDateChange = (newDate) => {
        setSelectedDate(newDate);

        if (selectedDate) {
            const formattedDate = newDate.toLocaleDateString('en-GB');
            setFormData((prevData) => ({
                ...prevData,
                day: formattedDate,
            }));
        }
    };
    const [passwordError, setPasswordError] = useState("");
    const handleConfirmPasswordChange = (e) => {
        const { value } = e.target;
        setFormData({
            ...formData,
            confirmPassword: value,
        });
    };
    const convertArabicNumeralsToLatin = (value) => {
        const arabicToLatinMap = {
            '٠': '0', '١': '1', '٢': '2', '٣': '3', '٤': '4', '٥': '5', '٦': '6', '٧': '7', '٨': '8', '٩': '9'
        };

        return value.replace(/[٠-٩]/g, (d) => arabicToLatinMap[d]);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "password") {
            const errorMsg = validatePasswordStrength(value);
            setPasswordError(errorMsg);
        }
        const convertedValue = formData.age ? convertArabicNumeralsToLatin(value) : value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: convertedValue
        }));
    };
    useEffect(() => {
        if (selectedCourses) {
            handleCourseChange()
        }
    }, [selectedCourses])
    const handleCourseChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            courses: selectedCourses
        }));
    };
    const handleCourseTypeChange = (event) => {
        const courseType = event.target.value;
        setSelectedCourseType(courseType);
        setFormData((prevData) => ({
            ...prevData,
            type: courseType,
        }));
    };
    const handleLanguageChange = (event) => {
        const courseType = event.target.value;
        setSelectedLanguage(courseType);
        setFormData((prevData) => ({
            ...prevData,
            language: courseType,
        }));
    };
    const handleGenderChange = (event) => {
        const gender = event.target.value;
        setSelectedGender(gender);
        setFormData((prevData) => ({
            ...prevData,
            gender: gender,
        }));
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

        setFormData((prevData) => ({
            ...prevData,
            phone: countryCode + e.target.value
        }));
    };
    useEffect(() => {
        if (countryCode) {
            setFormData((prevData) => ({
                ...prevData,
                phone: countryCode + phoneNumber
            }));
        }
    }, [countryCode])


    useEffect(() => {
        setLoading(true)
        if (enroll === true) {
            const fetchCourses = async () => {
                try {
                    const response = await getCourses();
                    setData(response.data)
                    setLoading(false)
                } catch (error) {
                    console.error('Error fetching sub-service data: ', error);
                }
            };

            fetchCourses();
        }


    }, [enroll]);
    const validatePasswordStrength = (password) => {
        const minLength = 8;
        const hasNumber = /[0-9]/;
        const hasUpperCase = /[A-Z]/;
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;

        if (password.length < minLength) {
            return "Password must be at least 8 characters long";
        }
        if (!hasNumber.test(password)) {
            return "Password must contain at least one number";
        }
        if (!hasUpperCase.test(password)) {
            return "Password must contain at least one uppercase letter";
        }
        if (!hasSpecialChar.test(password)) {
            return "Password must contain at least one special character";
        }
        return "";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password || !formData.name || !formData.phone || !formData.age || !formData.gender || !formData.courses.length || !formData.type || !formData.language || !formData.day || !formData.time) {
            setSnackbarMessage(t("formAcademics.PleaseFillAll"));
            setSnackbarSeverity('warning');
            setSnackbarOpen(true);
            return;
        }
        const passwordError = validatePasswordStrength(formData.password);
        if (passwordError) {
            setSnackbarMessage(passwordError);
            setSnackbarSeverity('warning');
            setSnackbarOpen(true);
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setSnackbarMessage(t("formAcademics.passwordnot"));
            setSnackbarSeverity('warning');
            setSnackbarOpen(true);
            return;
        }
        try {
            setLoading(true)
            const response = await postRegistration(
                formData.name,
                formData.email,
                formData.phone,
                formData.age,
                formData.gender,
                formData.background,
                formData.type,
                formData.language,
                formData.day,
                formData.time,
                formData.courses,
                formData.password
            );
            setTimeout(() => {
                setEnroll(false)
            }, 2000);
            setSnackbarMessage(t("formAcademics.FormSubmitted"));
            setSnackbarSeverity('success');
            setSnackbarOpen(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                age: '',
                gender: '',
                background: '',
                type: '',
                language: '',
                day: '',
                time: '',
                courses: [],
                password: '',
                confirmPassword: ''
            })
            setPhoneNumber('')
            setSelectedGender('')
            setSelectedCourseType('')
            setSelectedLanguage('')
            setSelectedCourses([])
            setSelectedTime(null)
            setSelectedDate(null)
            setLoading(false)
        } catch (error) {
            setSnackbarMessage(error);
            setSnackbarSeverity('warning');
            setSnackbarOpen(true);
            setLoading(false)
            return;
            console.error('Error submitting form: ', error);
        }
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
                                {t("formAcademics.StartYourLearning")}
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
                                        formData={formData}
                                        handleGenderChange={handleGenderChange}
                                        passwordError={passwordError}
                                        handleConfirmPasswordChange={handleConfirmPasswordChange}
                                        CheckCircleIcon={CheckCircleIcon}
                                        ErrorIcon={ErrorIcon}
                                    />
                                    <SecFormSection
                                        theme={theme}
                                        data={data}
                                        handleChange={handleChange}
                                        formData={formData}
                                        handleCourseTypeChange={handleCourseTypeChange}
                                        selectedCourseType={selectedCourseType}
                                        setSelectedLanguage={setSelectedLanguage}
                                        selectedLanguage={selectedLanguage}
                                        handleLanguageChange={handleLanguageChange}
                                        selectedCourses={selectedCourses}
                                        setSelectedCourses={setSelectedCourses}
                                        setSelectedCoursesId={setSelectedCoursesId}
                                        selectedCoursesId={selectedCoursesId}
                                        handleCourseChange={handleCourseChange}
                                        selectedTime={selectedTime}
                                        handleTimeChange={handleTimeChange}
                                        handleDateChange={handleDateChange}
                                        selectedDate={selectedDate}
                                        handleSubmit={handleSubmit}
                                        selectedGender={selectedGender}
                                        handleGenderChange={handleGenderChange}
                                        loading={loading}
                                        handleAgeChange={handleAgeChange}
                                        age={age}


                                    />
                                </Grid>
                            </Box>
                        </Grid>
                    </Box>
                    <Snackbar
                        open={snackbarOpen}
                        autoHideDuration={2000}
                        onClose={() => setSnackbarOpen(false)}
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    >
                        <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity}>
                            {snackbarMessage}
                        </Alert>
                    </Snackbar>
                </motion.div>
            </Modal>
        </div>
    );
}
