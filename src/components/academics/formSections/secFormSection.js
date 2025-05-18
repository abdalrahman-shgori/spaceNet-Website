import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import {
    textFieldStyle,
    fieldTextStyle,
    radioStyle,
} from '../formstyle';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import CalenderIcon from '../../../assets/sectionsImages/academics/calender';
import TimePickerIcon from '../../../assets/sectionsImages/academics/timepicker';
import { useTranslation } from "react-i18next";

export default function SecFormSection({
    theme,
    data,
    handleChange,
    formData,
    handleCourseTypeChange,
    selectedCourseType,
    selectedLanguage,
    handleLanguageChange,
    selectedCourses,
    setSelectedCourses,
    handleCourseChange,
    selectedTime,
    handleTimeChange,
    handleDateChange,
    selectedDate,
    handleSubmit,
    selectedGender,
    handleGenderChange,
    loading,
    handleAgeChange,
    age,
    loadingCourses
}) {
    const { i18n, t } = useTranslation()
    const dir = i18n.dir()
    const lang = i18n.language

    return (
        <>
            <Grid item lg={6} md={6} sm={12} xs={12}
                sx={{
                    paddingLeft: dir === 'ltr' && {
                        lg: "50px",
                        md: "20px",
                        sm: "unset",
                        xs: "unset"
                    },
                    paddingRight: dir === 'rtl' && {
                        lg: "50px",
                        md: "20px",
                        sm: "unset",
                        xs: "unset"
                    }
                }}
            >
                <Box
                    sx={{
                        padding: dir === 'ltr' ? {
                            lg: "unset",
                            md: "unset",
                            sm: "0px 9px 0px 45px",
                            xs: "0px 9px 0px 45px"
                        } :
                            {
                                lg: "unset",
                                md: "unset",
                                sm: "0px 45px 0px 9px",
                                xs: "0px 45px 0px 9px"
                            }
                        ,

                    }}
                >
                    <Box
                        sx={{
                            padding: dir === 'ltr' ? {
                                lg: "unset",
                                md: "unset",
                                sm: "0px 36px 0px 0px",
                                xs: "0px 36px 0px 0px"
                            } :
                                {
                                    lg: "unset",
                                    md: "unset",
                                    sm: "0px 0px 0px 36px",
                                    xs: "0px 0px 0px 36px"
                                }

                        }}
                    >
                        <Grid container >
                            <Grid lg={6} md={6} sm={6} xs={6}
                                sx={{
                                    paddingRight: dir === 'ltr' && "5px",
                                    paddingLeft: dir === 'rtl' && "5px"
                                }}
                            >
                                <Typography sx={{ ...fieldTextStyle(theme) }}>
                                    {t("formAcademics.Age")}
                                </Typography>
                                <TextField
                                    name="age"
                                    value={age}
                                    onChange={handleAgeChange}
                                    type='text'
                                    fullWidth
                                    required
                                    placeholder={t("formAcademics.YourAge")}
                                    sx={{
                                        ...textFieldStyle(theme),
                                        '& input[type=number]': {
                                            MozAppearance: 'textfield',
                                        },
                                        '& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button': {
                                            WebkitAppearance: 'none',
                                            margin: 0,
                                        },

                                    }}
                                />

                            </Grid>
                            <Grid lg={6} md={6} sm={6} xs={6}
                                sx={{
                                    paddingLeft: dir === 'ltr' && "5px",
                                    paddingRight: dir === 'rtl' && "5px"
                                }}
                            >
                                <Typography sx={{ ...fieldTextStyle(theme) }}>
                                    {t("formAcademics.Gender")}
                                </Typography>
                                <FormControl fullWidth>
                                    <Select
                                        required
                                        sx={{
                                            ...textFieldStyle(theme),
                                            '& .MuiSelect-icon': {
                                                color: theme.palette.mode === "dark" ? "#FFFFFF" : '#051A2F',
                                                fontSize: {
                                                    lg: "50px",
                                                    md: "50px",
                                                    sm: "50px",
                                                    xs: "30px"
                                                },

                                            },
                                            '& .MuiSelect-select': {
                                                color: theme.palette.mode === "dark" ? "#FFFFFF" : '#29547E',
                                                fontSize: {
                                                    lg: "15px",
                                                    md: "15px",
                                                    sm: "15px",
                                                    xs: "11px"
                                                }
                                            },
                                            '& .MuiMenuItem-root.Mui-selected': {
                                                backgroundColor: 'your-selected-background-color',
                                            },
                                            '& .MuiSelect-icon': {
                                                fontSize: {
                                                    lg: "50px",
                                                    md: "50px",
                                                    sm: "50px",
                                                    xs: "30px"
                                                },
                                                color: theme.palette.mode === "dark" ? "#FFFFFF" : "#051A2F",
                                                padding: "0 !important",
                                                marginRight: dir === 'rtl' &&
                                                {
                                                    lg: "-6px",
                                                    md: "-6px",
                                                    sm: "-6px",
                                                    xs: "-6px"
                                                }
                                                ,

                                                marginTop: {
                                                    lg: "-2px",
                                                    md: "-2px",
                                                    sm: "-2px",
                                                    xs: "1px"
                                                }

                                            },

                                            height: {
                                                lg: "58px",
                                                md: "58px",
                                                sm: "58px",
                                                xs: "40px"
                                            },
                                            '& .MuiSelect-select': {
                                                paddingRight: dir === 'rtl' && "44px !important",
                                                fontSize: {
                                                    lg: "15px",
                                                    md: "15px",
                                                    sm: "15px",
                                                    xs: "11px"
                                                },
                                                color: "#29547E"

                                            },
                                        }}
                                        displayEmpty
                                        value={selectedGender}
                                        onChange={handleGenderChange}
                                        inputProps={{ 'aria-label': 'Without label' }}

                                    >
                                        <MenuItem value="" disabled
                                            sx={{
                                                color: "#29547E !important"
                                            }}
                                        >
                                            {t("formAcademics.GenderType")}
                                        </MenuItem>
                                        <MenuItem value="male"> {t("formAcademics.Male")}</MenuItem>
                                        <MenuItem value="female"> {t("formAcademics.Female")}</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Box
                            sx={{
                                display: "flex",
                                gap: {
                                    lg: "4px",
                                    md: "4px",
                                    sm: "4px",
                                    xs: "2p"
                                }
                            }}
                        >
                            <Typography sx={{ ...fieldTextStyle(theme) }}>
                                {t("formAcademics.Background")}
                            </Typography>
                            <Typography
                                component="span"
                                sx={{
                                    color: "#2A547E",
                                    fontSize: {
                                        lg: "12.7px",
                                        md: "12.7px",
                                        sm: "12.7px",
                                        xs: "8.3px"
                                    },
                                }}
                            >
                                ({t("formAcademics.Optional")})
                            </Typography>
                        </Box>
                        <TextField
                            fullWidth
                            placeholder={t("formAcademics.EducationalandProfessional")}
                            sx={{
                                ...textFieldStyle(theme),
                            }}
                            name="background"
                            value={formData.background}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box
                        sx={{
                            mb: {
                                lg: "14px",
                                md: "14px",
                                sm: "14px",
                                xs: "15px"
                            },
                        }}
                    >
                        <Typography sx={{ ...fieldTextStyle(theme) }}>
                            {t("formAcademics.CourseType")}
                        </Typography>
                        <FormControl>
                            <RadioGroup row value={selectedCourseType} onChange={handleCourseTypeChange}>
                                <FormControlLabel sx={{
                                    ...radioStyle(theme),
                                    marginRight: dir === 'ltr' && { lg: "10px", md: "8px", sm: "10px", xs: "7px" },
                                    marginLeft: dir === 'rtl' && { lg: "10px", md: "8px", sm: "10px", xs: "7px" }
                                }} value="online" control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: { lg: 22, md: 22, sm: 20, xs: 15 } } }} />} label={t("formAcademics.Online")} />
                                <FormControlLabel sx={{
                                    ...radioStyle(theme),
                                    marginRight: dir === 'ltr' && { lg: "10px", md: "8px", sm: "10px", xs: "7px" },
                                    marginLeft: dir === 'rtl' && { lg: "10px", md: "8px", sm: "10px", xs: "7px" }
                                }} value="classroom" control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: { lg: 22, md: 22, sm: 20, xs: 15 } } }} />} label={t("formAcademics.Classroom")} />
                                <FormControlLabel sx={{ ...radioStyle(theme) }} value="bootcamp" control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: { lg: 22, md: 22, sm: 20, xs: 15 } } }} />} label={t("formAcademics.Bootcamp")} />
                            </RadioGroup>
                            <input
                                type="text"
                                tabIndex={-1}
                                autoComplete="off"
                                style={{ opacity: 0, height: 0, position: 'absolute' }}
                                value={selectedCourseType}
                                onChange={() => { }}
                                required
                            />
                        </FormControl>

                    </Box>
                    <Box
                        sx={{
                            mb: {
                                lg: "14px",
                                md: "14px",
                                sm: "14px",
                                xs: "15px"
                            },
                        }}
                    >
                        <Typography sx={{ ...fieldTextStyle(theme) }}>{t("formAcademics.Languages")}</Typography>
                        <FormControl>
                            <RadioGroup row value={selectedLanguage} onChange={handleLanguageChange}>
                                <FormControlLabel sx={{
                                    ...radioStyle(theme),
                                    marginRight: dir === 'ltr' && { lg: "10px", md: "8px", sm: "10px", xs: "7px" },
                                    marginLeft: dir === 'rtl' && { lg: "10px", md: "8px", sm: "10px", xs: "7px" }
                                }}
                                    value="kurdish" control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: { lg: 22, md: 22, sm: 20, xs: 15 } } }} />} label={t("formAcademics.Kurdish")} />
                                <FormControlLabel sx={{
                                    ...radioStyle(theme),
                                    marginRight: dir === 'ltr' && { lg: "10px", md: "8px", sm: "10px", xs: "7px" },
                                    marginLeft: dir === 'rtl' && { lg: "10px", md: "8px", sm: "10px", xs: "7px" }
                                }} value="english" control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: { lg: 22, md: 22, sm: 20, xs: 15 } } }} />} label={t("formAcademics.English")} />
                                <FormControlLabel sx={radioStyle(theme)} value="arabic" control={<Radio sx={{ '& .MuiSvgIcon-root': { fontSize: { lg: 22, md: 22, sm: 20, xs: 15 } } }} />} label={t("formAcademics.Arabic")} />
                            </RadioGroup>

                            <input
                                type="text"
                                tabIndex={-1}
                                autoComplete="off"
                                style={{ opacity: 0, height: 0, position: 'absolute' }}
                                value={selectedLanguage}
                                onChange={() => { }}
                                required
                            />
                        </FormControl>

                    </Box>
                    <Box
                    >
                        <Typography sx={{ ...fieldTextStyle(theme) }}>
                            {t("formAcademics.Whichservices")}
                        </Typography>
                        <FormControl fullWidth required
                            sx={{
                                padding: dir === 'ltr' ? {
                                    lg: "unset",
                                    md: "unset",
                                    sm: "0px 36px 0px 0px",
                                    xs: "0px 36px 0px 0px"
                                } :
                                    {
                                        lg: "unset",
                                        md: "unset",
                                        sm: "0px 0px 0px 36px",
                                        xs: "0px 0px 0px 36px"
                                    },
                                '&:hover': {
                                    backgroundColor: 'transparent',
                                    color: '#fff',
                                },
                                '&.Mui-selected': {
                                    backgroundColor: 'transparent',
                                    color: '#fff',
                                },

                            }}
                        >
                            <Select
                                value={selectedCourses}
                                onChange={handleCourseChange}
                                displayEmpty
                                multiple
                                renderValue={(selected) => {
                                    if (selected.length === 0) {
                                        return <Typography color={theme.palette.mode === 'dark' ? "#FFFFFF" : '#29547E'}
                                            sx={{
                                                fontSize: {
                                                    lg: "15px",
                                                    md: "15px",
                                                    sm: "15px",
                                                    xs: "11px"
                                                },
                                            }}
                                        >
                                            {t("formAcademics.SelectCourse")}
                                        </Typography>;
                                    }
                                    const selectedTitles = data
                                        .flatMap(item => item.courses)
                                        .filter(subItem => selected.includes(subItem.id))
                                        .map(subItem => lang === 'ar' ? subItem.title_ar : lang === 'ku' ? subItem.title_ku : subItem.title);
                                    return selectedTitles.join(', ');
                                }}
                                sx={{
                                    ...textFieldStyle(theme),
                                    borderRadius: '30px',
                                    '& .MuiSelect-icon': {
                                        color: theme.palette.mode === "dark" ? "#FFFFFF" : '#051A2F',
                                        fontSize: {
                                            lg: "30px",
                                            md: "30px",
                                            sm: "30px",
                                            xs: "20px"
                                        },
                                        marginRight: dir === 'rtl' ? '-6px' : undefined,
                                        marginTop: { lg: "-2px", md: "-2px", sm: "-2px", xs: "1px" }
                                    },
                                    '& .MuiSelect-select': {
                                        color: theme.palette.mode === "dark" ? "#FFFFFF" : '#29547E',
                                        fontSize: { lg: "15px", md: "15px", sm: "15px", xs: "11px" },
                                        paddingRight: dir === 'rtl' ? "44px !important" : undefined,
                                    },
                                    height: { lg: "58px", md: "58px", sm: "58px", xs: "40px" },
                                    border: '1px solid #051A2F',
                                    '& .MuiMenuItem-root.Mui-selected': {
                                        backgroundColor: '#051A2F',
                                        color: '#fff',
                                    },

                                    '& .MuiSelect-icon': {
                                        fontSize: {
                                            lg: "50px",
                                            md: "50px",
                                            sm: "50px",
                                            xs: "30px"
                                        },
                                        color: theme.palette.mode === "dark" ? "#FFFFFF" : "#051A2F",
                                        padding: "0 !important",
                                        marginRight: dir === 'rtl' &&
                                        {
                                            lg: "-6px",
                                            md: "-6px",
                                            sm: "-6px",
                                            xs: "-6px"
                                        }
                                        ,

                                        marginTop: {
                                            lg: "-2px",
                                            md: "-2px",
                                            sm: "-2px",
                                            xs: "1px"
                                        }

                                    },

                                }}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="" disabled sx={{
                                    color: theme.palette.mode === 'dark' ? "#FFFFFF !important" : "#051A2F !important",
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        color: '#fff',
                                    },
                                    '&.Mui-selected': {
                                        backgroundColor: 'transparent',
                                        color: '#fff',
                                    },
                                }}>
                                    {loadingCourses ?
                                        <CircularProgress
                                            style={{
                                                color: theme.palette.mode === 'dark' ? "#FFFFFF !important" : "#051A2F !important",
                                                display: "flex",
                                                margin: "0 auto"
                                            }} size={24} color="inherit" /> : t("formAcademics.SelectCourse")}
                                </MenuItem>

                                {data?.map((item) => (
                                    <>
                                        <Box
                                            sx={{
                                                padding: "0px 20px 8px 20px",
                                                position: "relative",
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    color: theme.palette.mode === 'dark' ? "#FFFFFF !important" : "#051A2F !important",
                                                    paddingBottom: "8px",
                                                    paddingTop: "8px"
                                                }}
                                            >
                                                {lang === 'ar' ? item.title_ar : lang === 'ku' ? item.title_ku : item.title}
                                            </Typography>

                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                                {item?.courses?.map((subItem) => (
                                                    <Button
                                                        value={item.title}
                                                        key={subItem.id}
                                                        variant="outlined"
                                                        sx={{
                                                            borderRadius: '20px',
                                                            borderColor: theme.palette.mode === 'dark' ? "#fff" : '#29547E',
                                                            color: selectedCourses.includes(subItem.id) ? "#fff" : theme.palette.mode === 'dark' ? "#FFFFFF" : '#29547E',
                                                            textTransform: 'none',
                                                            backgroundColor: selectedCourses.includes(subItem.id) ? '#051A2F' : 'transparent',
                                                            transition: 'background-color 0.3s ease, color 0.3s ease',


                                                            '&.Mui-selected': {
                                                                backgroundColor: '#051A2F',
                                                                color: '#fff',
                                                            }
                                                        }}
                                                        onClick={(e) => {
                                                            if (selectedCourses.includes(subItem.id)) {
                                                                const newSelection = selectedCourses.filter(courseId => courseId !== subItem.id);
                                                                setSelectedCourses(newSelection);
                                                            } else {
                                                                const newSelection = [...selectedCourses, subItem.id];
                                                                setSelectedCourses(newSelection);
                                                            }
                                                        }}
                                                    >
                                                        {lang === 'ar' ? subItem.title_ar : lang === 'ku' ? subItem.title_ku : subItem.title}
                                                    </Button>
                                                ))}
                                            </Box>
                                        </Box>

                                    </>
                                ))}
                            </Select>
                        </FormControl>


                    </Box>

                    <Grid container
                        sx={{
                            gap: "10px"
                        }}
                    >
                        <Box
                            sx={{
                                maxWidth: {
                                    lg: "170px",
                                    md: "170px",
                                    sm: "170px",
                                    xs: "130px"
                                }
                            }}
                        >
                            <Typography sx={{ ...fieldTextStyle(theme) }}>
                                {t("formAcademics.StartDay")}
                            </Typography>
                            <FormControl required>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        name="date"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        sx={{
                                            height: {
                                                lg: "58px",
                                                md: "58px",
                                                sm: "58px",
                                                xs: "39px"
                                            },
                                            ...textFieldStyle(theme),
                                            '& input': {},
                                            '& .css-elo8k2-MuiInputAdornment-root': {
                                                margin: "0 !important",
                                                paddingRight: dir === 'ltr' && {
                                                    lg: "18.55px",
                                                    md: "12.55px",
                                                    sm: "18.55px",
                                                    xs: "12px"
                                                },
                                                paddingLeft: dir === 'rtl' && {
                                                    lg: "18.55px",
                                                    md: "12.55px",
                                                    sm: "18.55px",
                                                    xs: "12px"
                                                },
                                            },
                                            "& .css-15guoxn": {
                                                padding: 0,
                                                paddingRight: "12px"
                                            },
                                            '& .css-oeq6yz-MuiButtonBase-root-MuiIconButton-root': {
                                                padding: 0,
                                            },
                                            '& .css-1dune0f-MuiInputBase-input-MuiOutlinedInput-input': {
                                                padding: "0",
                                                paddingLeft: {
                                                    lg: "18.55px",
                                                    md: "12.55px",
                                                    sm: "18.55px",
                                                    xs: "12px"
                                                },
                                            },
                                            '& .MuiOutlinedInput-root:hover': {
                                                backgroundColor: 'transparent',
                                            },
                                            '& .MuiButtonBase-root:hover': {
                                                backgroundColor: 'transparent',
                                            }
                                        }}
                                        slots={{
                                            openPickerIcon: CalenderIcon
                                        }}
                                        desktopModeMediaQuery="(min-width: 0px)"
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                InputProps={{
                                                    ...params.InputProps,
                                                }}
                                            />
                                        )}
                                    />
                                </LocalizationProvider>
                                <input
                                    type="text"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    style={{ opacity: 0, height: 0, position: 'absolute' }}
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    required
                                />
                            </FormControl>

                        </Box>


                        <Box
                            sx={{
                                maxWidth: {
                                    lg: "140px",
                                    md: "140px",
                                    sm: "140px",
                                    xs: "111px"
                                }
                            }}
                        >
                            <Typography sx={{ ...fieldTextStyle(theme) }}>
                                {t("formAcademics.Time")}
                            </Typography>
                            <FormControl required>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <TimePicker
                                        name="time"
                                        value={selectedTime}
                                        onChange={handleTimeChange}
                                        sx={{
                                            height: {
                                                lg: "58px",
                                                md: "58px",
                                                sm: "58px",
                                                xs: "39px"
                                            },
                                            ...textFieldStyle(theme),
                                            '& input': {
                                                margin: "0 !important",

                                            },
                                            '& .css-elo8k2-MuiInputAdornment-root': {
                                                margin: "0 !important",

                                            },
                                            '& .css-elo8k2-MuiInputAdornment-root': {
                                                margin: "0 !important",
                                                padding: "0",
                                                paddingRight: dir === 'ltr' && {
                                                    lg: "18.55px",
                                                    md: "12.55px",
                                                    sm: "18.55px",
                                                    xs: "12px"
                                                },
                                                paddingLeft: dir === 'rtl' && {
                                                    lg: "18.55px",
                                                    md: "12.55px",
                                                    sm: "18.55px",
                                                    xs: "12px"
                                                },


                                            },
                                            '& .css-oeq6yz-MuiButtonBase-root-MuiIconButton-root': {
                                                padding: 0,

                                            },
                                            "& .css-15guoxn": {
                                                padding: 0,
                                                paddingRight: "12px"

                                            },
                                            '& .css-1dune0f-MuiInputBase-input-MuiOutlinedInput-input': {
                                                padding: "0",
                                                paddingLeft: {
                                                    lg: "18.55px",
                                                    md: "12.55px",
                                                    sm: "18.55px",
                                                    xs: "12px"
                                                },
                                            },
                                            '& .MuiOutlinedInput-root:hover': {
                                                backgroundColor: 'transparent',
                                            },
                                            '& .MuiButtonBase-root:hover': {
                                                backgroundColor: 'transparent',
                                            }
                                        }}
                                        slots={{

                                            openPickerIcon: TimePickerIcon
                                        }}
                                        desktopModeMediaQuery="(min-width: 0px)"
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                sx={textFieldStyle(theme)}
                                            />
                                        )}
                                    />
                                </LocalizationProvider>
                                <input
                                    type="text"
                                    tabIndex={-1}
                                    autoComplete="off"
                                    style={{ opacity: 0, height: 0, position: 'absolute' }}
                                    value={selectedTime}
                                    onChange={handleTimeChange}
                                    required
                                />
                            </FormControl>

                        </Box>

                    </Grid>

                </Box>
            </Grid>
        </>
    )
}