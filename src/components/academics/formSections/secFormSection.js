import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Checkbox, FormControlLabel, Grid, Radio, RadioGroup, TextField, FormControl, Select, MenuItem } from '@mui/material';
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
    handleSubmit
}) {
    console.log(selectedCourses)
    const { i18n, t } = useTranslation()
    const dir = i18n.dir()
    const lang = i18n.language

    const handleSelection = (id) => {
        if (selectedCourses.includes(id)) {
            // Remove the item if it's already selected
            setSelectedCourses(selectedCourses.filter(courseId => courseId !== id));
        } else {
            // Add the item if it's not already selected
            setSelectedCourses([...selectedCourses, id]);
        }
    };
    
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
                            {t("formAcademics.Whichservices")}
                        </Typography>
                        <FormControl fullWidth
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
                                }}
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="" disabled sx={{
                                    color: "#051A2F !important",
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        color: '#fff',
                                    },
                                    '&.Mui-selected': {
                                        backgroundColor: 'transparent',
                                        color: '#fff',
                                    },
                                }}>
                                    {t("formAcademics.SelectCourse")}
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
                                                    color: "#051A2F",
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
                                                            borderColor: '#29547E',
                                                            color: selectedCourses.includes(subItem.id) ? "#fff" : '#29547E',
                                                            textTransform: 'none',
                                                            backgroundColor: selectedCourses.includes(subItem.id) ? '#051A2F' : 'transparent',
                                                            '&:hover': {
                                                                backgroundColor: '#051A2F',
                                                                color: '#fff',
                                                            },
                                                            '&.Mui-selected': {
                                                                backgroundColor: '#051A2F',
                                                                color: '#fff',
                                                            }
                                                        }}
                                                        onClick={() => handleSelection(subItem.id)}
    onTouchEnd={() => handleSelection(subItem.id)}
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
                            <LocalizationProvider dateAdapter={AdapterDateFns}

                            >
                                <DatePicker
                                    name="time"
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
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
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
                        </Box>

                    </Grid>
                    <Box
                        sx={{
                            marginTop: {
                                lg: "30px",
                                md: "30px",
                                sm: "30px",
                                xs: "16px"
                            }
                        }}
                    >
                        <Button
                            onClick={handleSubmit}

                            sx={{
                                bgcolor: theme.palette.mode === "dark" ? "#FFFFFF" : '#000',
                                color: theme.palette.mode === "dark" ? "#051A2F" : '#FFFFFF',
                                width: "fit-content",
                                padding: {
                                    lg: "22px 52px 22px 52px",
                                    md: "22px 52px 22px 52px",
                                    sm: "22px 52px 22px 52px",
                                    xs: "9px 21px 9px 21px"
                                },
                                fontSize: {
                                    lg: "23px",
                                    md: "23px",
                                    sm: "17px",
                                    xs: "15.7px"
                                },
                                fontFamily: "var(--English-font-semibold)",
                                borderRadius: "94px",
                                textTransform: "capitalize",
                                height: {
                                    lg: "64px",
                                    md: "64px",
                                    sm: "64px",
                                    xs: "44px"
                                },
                            }}>
                            {t("formAcademics.Submit")}
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </>
    )
}